import {useState, useEffect} from 'react';
import Loading from "./loading";
import {useRouter} from "next/router";

const Button = ({children, theme, icon, loading, onClick, disabled, link}) => {
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [classes, setClasses] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (theme === 'primary') setClasses('text-white bg-blue-600 hover:bg-blue-700 hover:text-white active:bg-blue-500');
        if (theme === 'danger') setClasses('text-red-600 bg-white hover:bg-red-600 hover:text-white active:bg-red-700');
        if (theme === 'info') setClasses('text-blue-600 bg-white hover:bg-blue-600 hover:text-white active:bg-blue-700');
        if (theme === 'default') setClasses('text-gray-400 bg-white hover:text-gray-500 active:bg-gray-50');

        setIsDisabled(!!loading);

        if (isDisabled) setClasses('bg-gray-200 cursor-default');
    });

    function onTrigger(e) {
        if(isDisabled) return;

        if (link) {
            router.push(link)
        } else {
            onClick(e);
        }
    }

    return (
        <button
            onClick={onTrigger}
            className={`flex-shrink-0 flex flex-wrap group items-center px-4 py-2 text-base font-semibold
            rounded-lg shadow-md focus:outline-none transition active:shadow-xl ${classes}`}
            type="button">

            {loading ? <div className="flex flex-wrap"><Loading color={isDisabled && 'gray-600'}/>
                    <div className="ml-2">bir dəq...</div>
                </div> :
                <div className="flex flex-wrap items-center">
                    {icon && <div className="mr-2 h-6 w-6">
                        {icon}
                    </div>}

                    {children}
                </div>
            }
        </button>
    );
};

Button.defaultProps = {
    loading: false,
    disabled: false,
    theme: 'default',
    onClick: () => {},
    link: null
};

export default Button;