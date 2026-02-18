import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils'; // Keep import consistent

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      icon,
      rightIcon,
      onRightIconClick,
      error,
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-[10px] font-bold uppercase tracking-wider text-gray-400"
          >
            {label}
          </label>
        )}
        <div className="relative group">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              'w-full h-[52px] rounded-lg border border-surface-light bg-surface-light text-white placeholder:text-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200',
              icon ? 'pl-10' : 'pl-4',
              rightIcon ? 'pr-10' : 'pr-4', // Ensure padding for right icon
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : '',
              className,
            )}
            {...props}
          />
          {rightIcon && (
            <button
              type="button"
              onClick={onRightIconClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors focus:outline-none cursor-pointer p-1"
            >
              {rightIcon}
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
