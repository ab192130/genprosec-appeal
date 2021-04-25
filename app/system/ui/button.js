import React from 'react';

const Button = ({children}) => {
    return (
        <button
            className="flex-shrink-0 flex flex-wrap items-center px-4 py-2 text-base font-semibold text-white bg-blue-600
            rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition active:bg-blue-500 active:shadow-xl"
            type="button">
            {children}
        </button>
    );
};

export default Button;