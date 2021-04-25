const Card = ({children}) => {
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                {children}
            </div>
        </div>
    );
};

export default Card;