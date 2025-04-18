export interface Spell {
  id?: number;
  name: string;
  description?: string;
  difficulty: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED' | 'FORBIDDEN';
  type: 'OFFENSIVE' | 'DEFENSIVE' | 'HEALING' | 'CONTROL' | 'SUMMONING';
  requiresWand: boolean;
  createdAt: string; // ISO 8601 date
}
