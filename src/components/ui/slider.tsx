```typescript
import * as React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  className?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ value, onChange, min, max, step = 1, className = '' }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.target.value));
    };

    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <div className={`relative w-full h-6 ${className}`}>
        {/* Track background */}
        <div className="absolute inset-0 h-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full">
          {/* Filled track */}
          <div
            className="absolute h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Range input */}
        <input
          ref={ref}
          type="range"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className="absolute w-full h-6 opacity-0 cursor-pointer"
        />

        {/* Thumb */}
        <div
          className="absolute h-4 w-4 bg-white border-2 border-blue-500 rounded-full shadow-md cursor-pointer transition-transform hover:scale-110 focus:ring-2 focus:ring-blue-500"
          style={{ 
            left: `${percentage}%`,
            transform: 'translate(-50%, -50%)',
            top: '50%'
          }}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
```