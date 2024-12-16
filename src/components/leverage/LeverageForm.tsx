```typescript
import React from 'react';
import { Slider } from '../ui/slider';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../utils/formatting';
import type { LeverageSettings } from '../../utils/types/leverage';

interface LeverageFormProps {
  settings: LeverageSettings;
  onChange: (settings: LeverageSettings) => void;
  baseAmount: number;
}

const LeverageForm: React.FC<LeverageFormProps> = ({
  settings,
  onChange,
  baseAmount
}) => {
  const { t } = useTranslation();

  // Calculate amounts based on settings
  const creditAmount = Math.round((baseAmount * settings.ratio) / 100);
  const totalAmount = baseAmount + creditAmount;

  const handleRatioChange = (value: number) => {
    onChange({ ...settings, ratio: value });
  };

  const handleInterestRateChange = (value: number) => {
    onChange({ ...settings, interestRate: value });
  };

  return (
    <div className="space-y-6">
      {/* Summary of amounts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-primary/5 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">{t('leverage.form.baseAmount')}</p>
          <p className="text-lg font-semibold">{formatCurrency(baseAmount)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{t('leverage.form.creditAmount')}</p>
          <p className="text-lg font-semibold">{formatCurrency(creditAmount)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{t('leverage.form.totalAmount')}</p>
          <p className="text-lg font-semibold">{formatCurrency(totalAmount)}</p>
        </div>
      </div>

      {/* LTV Ratio Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">
            {t('leverage.form.ltvRatio')}
          </label>
          <span className="text-sm font-medium text-gray-900">
            {settings.ratio}%
          </span>
        </div>
        <Slider
          value={settings.ratio}
          onChange={handleRatioChange}
          min={0}
          max={100}
          step={1}
          className="w-full"
        />
        <p className="text-sm text-gray-500">
          {t('leverage.form.ltvRatioHelp')}
        </p>
      </div>

      {/* Interest Rate Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">
            {t('leverage.form.creditRate')}
          </label>
          <span className="text-sm font-medium text-gray-900">
            {settings.interestRate}%
          </span>
        </div>
        <Slider
          value={settings.interestRate}
          onChange={handleInterestRateChange}
          min={0}
          max={20}
          step={0.1}
          className="w-full"
        />
        <p className="text-sm text-gray-500">
          {t('leverage.form.creditRateHelp')}
        </p>
      </div>

      {/* Warning */}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          {t('leverage.form.warning')}
        </p>
      </div>
    </div>
  );
};

export default LeverageForm;
```