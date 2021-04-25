const Chip = ({children}) => {
    return (
        <span className="px-4 py-2 flex items-center text-base rounded-full
        shadow-sm hover:shadow-0 active:shadow-lg cursor-pointer transition select-none
        text-gray-500 hover:text-blue-600
        bg-gray-100 hover:bg-blue-100">
            {children}
        </span>
    );
};

export default Chip;