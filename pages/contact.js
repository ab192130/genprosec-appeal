import React from 'react';
import DefaultLayout from "../layouts/default";
import {motion} from "framer-motion";
import Sheet from '../app/system/ui/sheet';

const Contact = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                    <Sheet>
                        <div className="text-right leading-relaxed p-10">

                            <div className="flex flex-wrap justify-end space-x-3 mb-1 text-blue-600">
                                <div className="font-bold">+994 50 123 45 67</div>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </div>
                            <div className="flex flex-wrap justify-end space-x-3 mb-5">
                                <div className="font-bold">contact@genprosec.com</div>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                </svg>
                            </div>
                            <div className="">Bakı, Azərbaycan</div>
                            <div className="">Həsən bəy Zərdabi küçəsi 13b.</div>
                            <div className="mb-3">AZ1102</div>
                            <div className="max-w-md text-gray-400">
                                Səhifə demonstrasiya xarakteri daşıyır və
                                heç bir gerçək məlumatı əks
                                etdirmir.
                            </div>
                        </div>
                    </Sheet>
                    <div className="">

                        <div className="text-left text-gray-600 text-6xl mb-10 font-bold">
                            Bizimlə <span className="text-blue-600">Əlaqə</span>
                        </div>

                        <img src="/map.jpg"
                             className="h-72 w-72 rounded-3xl cursor-pointer shadow-xl hover:shadow-lg transition"
                             alt=""/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

Contact.Layout = DefaultLayout;

export default Contact;