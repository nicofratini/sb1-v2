```typescript
import * as React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={`rounded-lg border p-4 ${
          variant === 'destructive' 
            ? 'border-red-200 bg-red-50 text-red-800'
            : 'border-gray-200 bg-gray-50 text-gray-800'
        } ${className}`}
        {...props}
      />
    );
  }
);

Alert.displayName = 'Alert';

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`mt-2 text-sm ${className}`}
      {...props}
    />
  );
});

AlertDescription.displayName = 'AlertDescription';
```