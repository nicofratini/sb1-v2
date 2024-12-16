```typescript
import { useCallback } from 'react';
import { useSettingsStore } from '../../../stores/settings';

export function useSettings() {
  const { setIsOpen, settings, updateSettings } = useSettingsStore();

  const openSettings = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeSettings = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const saveSettings = useCallback((newSettings: typeof settings) => {
    updateSettings(newSettings);
    closeSettings();
  }, [updateSettings, closeSettings]);

  return {
    settings,
    openSettings,
    closeSettings,
    saveSettings
  };
}
```