```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { InvestmentSettings } from '../../utils/types';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  settings: InvestmentSettings;
  onSave: (settings: InvestmentSettings) => void;
}

export const SettingsDialog: React.FC<SettingsDialogProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const { t } = useTranslation();
  const [localSettings, setLocalSettings] = React.useState(settings);

  React.useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">{t('settings.title')}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Settings content here */}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {t('settings.buttons.cancel')}
          </button>
          <button
            onClick={() => {
              onSave(localSettings);
              onClose();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {t('settings.buttons.save')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
```