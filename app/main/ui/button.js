const Button = ({children, onClick}) => {
    return (
        <button type="button" onClick={onClick}
                className="scale-95 py-4 px-6 bg-blue-600 hover:bg-blue-700
                text-white transition ease-in active:bg-blue-500 duration-200
                text-center text-base font-semibold shadow-lg active:shadow-xl
                ease-in-out focus:outline-none uppercase rounded-full">
            <div className="flex flex-wrap items-center">
                {children}
            </div>
        </button>
    );
};

export default Button;