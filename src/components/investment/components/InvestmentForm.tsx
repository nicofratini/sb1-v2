```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { EuroIcon, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../../utils/formatting';

interface InvestmentFormProps {
  value: string;
  onChange: (value: string) => void;
}

export const InvestmentForm: React.FC<InvestmentFormProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  
  const handleCalculate = () => {
    const numericValue = value.replace(/[^\d]/g, '');
    if (numericValue) {
      const formattedValue = formatCurrency(parseInt(numericValue));
      onChange(formattedValue);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto"
    >
      <h2 className="text-center text-lg text-gray-700 font-medium mb-4">
        {t('input.title')}
      </h2>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <EuroIcon className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full pl-12 pr-20 py-3 text-lg border-2 border-blue-200 rounded-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 
                   text-center font-medium bg-white/80 shadow-sm"
          placeholder={t('input.placeholder')}
        />
        
        <button
          onClick={handleCalculate}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-500 text-white 
                   rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-600 
                   transition-colors"
        >
          <Calculator className="h-4 w-4" />
          <span>{t('input.calculate')}</span>
        </button>
      </div>
    </motion.div>
  );
};
```