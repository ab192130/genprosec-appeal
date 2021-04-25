import {useState, useEffect} from 'react';

const Button = ({children, theme, icon}) => {
    const [classes, setClasses] = useState('text-white bg-blue-600 hover:bg-blue-700 hover:text-white active:bg-blue-500');

    useEffect(() => {
        if (theme === 'danger') setClasses('text-red-600 bg-white hover:bg-red-600 hover:text-white active:bg-red-700');
    });

    return (
        <button
            className={`flex-shrink-0 flex flex-wrap group items-center px-4 py-2 text-base font-semibold
            rounded-lg shadow-md focus:outline-none transition active:shadow-xl ${classes}`}
            type="button">
            {icon && <div className="mr-2 h-6 w-6">
                {icon}
            </div>}

            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'blue',
    dark: false
};

export default Button;