import { CloseIcon } from 'assets/icons';
import cn from 'classnames';
import React from 'react';

interface IModalProps {
    isOpen: boolean;
    heading: string;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, heading, onClose, children }: IModalProps) => {
    return (
        <div>
            <div
                className={cn(
                    'overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full fixed top-0 left-0 right-0 bottom-0 transform bg-black bg-opacity-40',
                    { 'hidden ': !isOpen }
                )}
            >
                <div className="relative p-4 w-full h-full max-w-2xl mx-auto flex justify-center items-center pb-12 md:pb-24 lg:pb-48">
                    <div className="relative bg-white rounded-lg shadow min-w-[95%] md:min-w-[500px]  min-h-[200px]">
                        <div className="flex justify-between items-start p-5 rounded-t border-b border-primary">
                            <h3 className="text-xl font-semibold text-text lg:text-2xl">
                                {heading}
                            </h3>
                            <button
                                onClick={onClose}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-red-50 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                                data-modal-toggle="defaultModal"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="p-5">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
