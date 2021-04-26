import React from 'react';
import DashboardLayout from "../../layouts/dashboard";
import {motion} from "framer-motion";

const Notifications = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <div className="flex flex-col">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-gray-500 mx-auto"
                             viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                        </svg>
                    </div>

                    <div className="text-4xl text-gray-400 mx-auto mb-3">Bütün bildirişlər oxunub</div>
                    <div className="text-lg text-gray-400 mx-auto">Səhifəni tərk edə bilərsiniz</div>
                </div>
            </motion.div>
        </div>
    );
};

Notifications.Layout = DashboardLayout;

export default Notifications;