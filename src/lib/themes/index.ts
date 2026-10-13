import type { Theme } from './types';
import { classicThemes } from './classic';
import { modernThemes } from './modern';
import { extraThemes } from './extra';

export type { Theme };
export const THEMES: Theme[] = [...classicThemes, ...modernThemes, ...extraThemes];

export interface ThemeGroup {
  id: 'classic' | 'modern' | 'extra';
  themes: Theme[];
}

export const THEME_GROUPS: ThemeGroup[] = [
  { id: 'classic', themes: classicThemes },
  { id: 'modern', themes: modernThemes },
  { id: 'extra', themes: extraThemes },
];
