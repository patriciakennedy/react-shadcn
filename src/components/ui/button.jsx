import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

// import { cn } from "@/lib/utils"
import { cn } from '../../lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                gradient:
                    'bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white hover:opacity-90 transition-all duration-300 ease-in-out', // ✅ Added gradient variant
                // ✅ ELECTRIC BLUE GRADIENT BUTTON (with hover glow & pressed effect)
                electricBlue:
                    'bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white hover:opacity-90 transition-all duration-300 ease-in-out',
                outlinegradient:
                    'border border-[#A259FF] text-[#A259FF] hover:bg-gradient-to-r hover:from-[#A259FF] hover:to-[#6C00FF] hover:text-white transition-all duration-300 ease-in-out',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
                xl: 'h-14 sm:h-16 rounded-md px-14 text-lg sm:text-xl font-bold', //added to change home page btn color
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
