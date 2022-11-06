import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const Input = ({ name, ...rest }: IInputProps) => {
    return (
        <input
            name={name}
            className="my-2.5 bg-transparent border border-gray-300 rounded focus:outline-none focus:border-gray-600 px-5 py-2.5 h-10 text-sm md:text-base flex-1"
            {...rest}
        />
    );
};
