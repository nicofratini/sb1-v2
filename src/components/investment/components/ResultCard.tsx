```typescript
import React from 'react';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ 
  icon, 
  title, 
  value, 
  description 
}) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  </div>
);
```