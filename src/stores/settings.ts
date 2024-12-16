```typescript
import { create } from 'zustand';
import { DEFAULT_SETTINGS } from '../components/investment/constants';
import type { InvestmentSettings } from '../components/settings/types';

interface SettingsState {
  isOpen: boolean;
  settings: InvestmentSettings;
  setIsOpen: (isOpen: boolean) => void;
  updateSettings: (settings: InvestmentSettings) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  isOpen: false,
  settings: DEFAULT_SETTINGS,
  setIsOpen: (isOpen) => set({ isOpen }),
  updateSettings: (settings) => set({ settings }),
}));
```