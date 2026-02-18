import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx'; // Assuming you might want direct type import if needed, but cn handles it.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', isLoading, children, ...props }, ref) => {
    const variants = {
      primary:
        'bg-primary text-surface-dark hover:bg-primary-hover font-bold shadow-lg shadow-primary/20',
      outline: 'border border-surface-light text-white hover:bg-white/5',
      ghost: 'text-gray-400 hover:text-white',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'flex items-center justify-center rounded-lg px-6 py-3 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          className,
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button };
