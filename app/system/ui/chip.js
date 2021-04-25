const Chip = ({children}) => {
    return (
        <span className="px-4 py-2 flex items-center text-base rounded-full
        shadow-sm hover:shadow-0 active:shadow-lg cursor-pointer transition select-none
        text-blue-500 hover:text-blue-600
        bg-blue-100 hover:bg-blue-200">
            {children}
        </span>
    );
};

export default Chip;