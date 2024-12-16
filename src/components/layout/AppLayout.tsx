```typescript
import React from 'react';
import { Header } from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-[1600px]">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
```