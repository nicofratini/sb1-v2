```typescript
import React from 'react';
import { Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <Calculator className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {t('title')}
        </h1>
      </div>
    </header>
  );
};
```