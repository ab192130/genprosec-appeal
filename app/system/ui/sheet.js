const Card = ({children}) => {
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Card;