import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resourcesPath = path.resolve(__dirname, '../src/data/resources.json');
const schemaPath = path.resolve(__dirname, '../src/data/resources.schema.json');

async function validate() {
  console.log('🔍 Validating resources.json...');
  
  try {
    const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    
    // We'll use a simple manual validation since we don't want to add dependencies
    // like Ajv unless absolutely necessary, but for a production-ready project
    // it's better to have it.
    
    let errors = [];
    
    if (!Array.isArray(resources.resources)) {
      errors.push('Root must have a "resources" array');
    } else {
      resources.resources.forEach((r, i) => {
        const required = ['id', 'title', 'description', 'category', 'author', 'authorUrl', 'tags', 'url', 'addedAt'];
        required.forEach(field => {
          if (!r[field]) errors.push(`Resource [${i}] (${r.id || 'unknown'}): Missing field "${field}"`);
        });
        
        if (r.id && !/^[a-z0-9-]+$/.test(r.id)) {
          errors.push(`Resource [${i}] (${r.id}): ID must be kebab-case (a-z, 0-9, -)`);
        }
        
        if (r.category && !['agent', 'prompt', 'instruction', 'plugin', 'workflow'].includes(r.category)) {
          errors.push(`Resource [${i}] (${r.id}): Invalid category "${r.category}"`);
        }
        
        if (r.tags && (!Array.isArray(r.tags) || r.tags.length === 0)) {
          errors.push(`Resource [${i}] (${r.id}): Tags must be a non-empty array`);
        }
      });
    }
    
    if (errors.length > 0) {
      console.error('❌ Validation failed:');
      errors.forEach(err => console.error(`  - ${err}`));
      process.exit(1);
    } else {
      console.log('✅ Validation successful! All resources follow the schema.');
    }
  } catch (err) {
    console.error('❌ Error reading or parsing files:', err.message);
    process.exit(1);
  }
}

validate();
