```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { CycleType } from '../../../utils/types';

interface CycleButtonProps {
  value: CycleType;
  duration: number;
  isSelected: boolean;
  onClick: () => void;
}

export const CycleButton: React.FC<CycleButtonProps> = ({
  value,
  duration,
  isSelected,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-xl transition-all duration-200
        ${isSelected
          ? 'bg-blue-500 text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-200'
        }
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-base font-semibold whitespace-nowrap">
          {value} {t('cycles.title')} ({duration} {t('settings.duration.months')})
        </span>
        <span className="text-sm opacity-80">
          {t(`cycles.descriptions.${value}`)}
        </span>
      </div>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-blue-500 rounded-xl -z-10"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};
```