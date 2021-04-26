import React from 'react';
import DefaultLayout from "../layouts/default";
import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="mt-10">
                <div className="p-4 mb-10">
                    <div className="text-center mb-4 opacity-90">
                        <a href="#" className="block relative">
                            <img alt="profil" src="/developer.png"
                                 className="mx-auto object-cover rounded-full h-40 w-40 "/>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 dark:text-white">
                            Bürhan Ağazadə
                        </p>
                        <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                            Full Stack Developer
                        </p>
                        <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs mx-auto py-4 font-light">
                            Bürhan Ağazadə, 1991-ci il 3 dekabr tarixində Bakı şəhərində anadan olmuşdur.
                        </p>
                    </div>
                </div>

                <div className="text-3xl text-center font-bold mb-3">
                    Layihədə İstifadə edilmiş texnologiyalar
                </div>

                <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-10">
                    <div
                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-6 py-4 bg-white mt-6 shadow-lg rounded-3xl dark:bg-gray-800">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center mx-auto rounded-full justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6"
                                     viewBox="0 0 1792 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            React JS
                        </h3>
                        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                            İstifadəçi interfeyslərinin qurulması üçün açıq mənbəli JavaScript kitabxanasıdır. Bu
                            Facebook və fərdi inkişaf etdiricilər və şirkətlər birliyi tərəfindən təmin edilir.
                        </p>
                    </div>

                    <div
                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-3xl dark:bg-gray-800">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center mx-auto rounded-full justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6"
                                     viewBox="0 0 1792 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            Node JS
                        </h3>
                        <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                            Server-side Veb tətbiqlər yazmaq üçün istifadə olunan açıq qaynaqlı, cross-platform iş
                            mühitidir.
                        </p>
                    </div>
                    <div
                        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-3xl dark:bg-gray-800">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center mx-auto rounded-full justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                <svg width="20" height="20" fill="currentColor" className="h-6 w-6"
                                     viewBox="0 0 1792 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                            Adobe Illustrator
                        </h3>
                        <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                            Adobe Systems şirkəti tərəfindən hazılanmış və inkişaf etdirilməkdə olan vektor qrafik
                            redaktoru.
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

About.Layout = DefaultLayout;

export default About;