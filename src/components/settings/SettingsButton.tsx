```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
import { useSettings } from './hooks/useSettings';

export const SettingsButton: React.FC = () => {
  const { openSettings } = useSettings();

  return (
    <motion.button
      onClick={openSettings}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <Settings className="w-5 h-5 text-gray-600" />
    </motion.button>
  );
};
```