export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'agent' | 'prompt' | 'instruction' | 'plugin' | 'workflow';
  author: string;
  authorUrl: string;
  tags: string[];
  url: string;
  github?: string;
  addedAt: string;
  stars?: number;
  featured?: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: 'getting-started' | 'advanced' | 'best-practices' | 'case-studies' | 'tutorials' | 'integration';
  url: string;
  author?: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  resourceIds: string[];
  featured?: boolean;
}

export interface Author {
  username: string;
  url: string;
  resourceCount: number;
  joinedAt: string;
}

export type SortOption = 'newest' | 'oldest' | 'alpha' | 'alpha-desc' | 'popular';

export const categories = [
  { id: 'agent', label: 'Agents', icon: '🤖' },
  { id: 'prompt', label: 'Prompts', icon: '💬' },
  { id: 'instruction', label: 'Instructions', icon: '📋' },
  { id: 'plugin', label: 'Plugins', icon: '🔌' },
  { id: 'workflow', label: 'Workflows', icon: '⚡' }
] as const;

export const difficulties = [
  { id: 'beginner', label: 'Beginner', color: '#10b981' },
  { id: 'intermediate', label: 'Intermediate', color: '#f59e0b' },
  { id: 'advanced', label: 'Advanced', color: '#ef4444' }
] as const;