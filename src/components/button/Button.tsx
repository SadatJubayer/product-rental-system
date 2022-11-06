import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

export const Button = ({
    label,
    onClick = () => null,
    disabled = false,
    variant,
    ...rest
}: IButtonProps) => {
    return (
        <button
            className={cn(
                'bg-primary text-white px-5 py-2 rounded-sm disabled:opacity-50 text-sm transform transition-transform hover:-translate-y-0.5 active:bg-primary/90',
                {
                    'bg-secondary  active:bg-secondary/90': variant === 'secondary',
                }
            )}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {label}
        </button>
    );
};
