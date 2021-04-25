import Sheet from '../ui/sheet';

const Card = ({children, title, subtitle, icon}) => {
    return (
        <Sheet>
            <div className="">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <span className="rounded-xl relative p-2 bg-blue-100">
                            {icon}
                        </span>
                        <div className="flex flex-col">
                            <span className="font-bold text-md text-black dark:text-white ml-2">
                                {title}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-white ml-2">
                                {subtitle}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="text-gray-200 focus:outline-none">
                            <svg width="25" height="25" fill="currentColor"
                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </Sheet>
    );
};

export default Card;