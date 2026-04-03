/**
 * Validate resources.json against the JSON schema
 * Usage: node scripts/validate-resources.js
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Simple JSON schema validator (no external dependencies)
function validate(data, schema, path = '') {
  const errors = [];

  if (schema.type === 'object') {
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      errors.push(`${path || 'root'}: Expected object, got ${typeof data}`);
      return errors;
    }

    // Check required properties
    if (schema.required) {
      for (const prop of schema.required) {
        if (!(prop in data)) {
          errors.push(`${path || 'root'}: Missing required property "${prop}"`);
        }
      }
    }

    // Validate properties
    if (schema.properties) {
      for (const [key, value] of Object.entries(data)) {
        if (schema.properties[key]) {
          errors.push(...validate(value, schema.properties[key], `${path}.${key}`));
        } else if (schema.additionalProperties === false) {
          errors.push(`${path}.${key}: Additional property not allowed`);
        }
      }
    }
  } else if (schema.type === 'array') {
    if (!Array.isArray(data)) {
      errors.push(`${path || 'root'}: Expected array, got ${typeof data}`);
      return errors;
    }

    if (schema.items) {
      data.forEach((item, index) => {
        errors.push(...validate(item, schema.items, `${path}[${index}]`));
      });
    }
  } else if (schema.type === 'string') {
    if (typeof data !== 'string') {
      errors.push(`${path}: Expected string, got ${typeof data}`);
    } else {
      if (schema.minLength && data.length < schema.minLength) {
        errors.push(`${path}: String length ${data.length} is less than minimum ${schema.minLength}`);
      }
      if (schema.maxLength && data.length > schema.maxLength) {
        errors.push(`${path}: String length ${data.length} exceeds maximum ${schema.maxLength}`);
      }
      if (schema.pattern) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(data)) {
          errors.push(`${path}: String "${data}" does not match pattern "${schema.pattern}"`);
        }
      }
      if (schema.enum && !schema.enum.includes(data)) {
        errors.push(`${path}: Value "${data}" is not one of allowed values: ${schema.enum.join(', ')}`);
      }
    }
  } else if (schema.type === 'integer') {
    if (!Number.isInteger(data)) {
      errors.push(`${path}: Expected integer, got ${typeof data}`);
    }
    if (schema.minimum !== undefined && data < schema.minimum) {
      errors.push(`${path}: Value ${data} is less than minimum ${schema.minimum}`);
    }
  } else if (schema.type === 'boolean') {
    if (typeof data !== 'boolean') {
      errors.push(`${path}: Expected boolean, got ${typeof data}`);
    }
  }

  return errors;
}

try {
  console.log('🔍 Validating resources.json...\n');

  const schemaPath = join(__dirname, 'resources-schema.json');
  const dataPath = join(__dirname, '..', 'src', 'data', 'resources.json');

  const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
  const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

  const errors = validate(data, schema);

  if (errors.length === 0) {
    console.log('✅ Validation passed! No errors found.\n');
    console.log(`📊 Statistics:`);
    console.log(`   - Resources: ${data.resources.length}`);
    console.log(`   - Tutorials: ${data.tutorials?.length || 0}`);
    
    const categories = {};
    data.resources.forEach(r => {
      categories[r.category] = (categories[r.category] || 0) + 1;
    });
    console.log(`   - Categories:`);
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`     • ${cat}: ${count}`);
    });
    
    process.exit(0);
  } else {
    console.log('❌ Validation failed!\n');
    console.log(`Found ${errors.length} error(s):\n`);
    errors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error}`);
    });
    console.log('\n💡 Fix these errors before committing.');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error during validation:', error.message);
  process.exit(1);
}
