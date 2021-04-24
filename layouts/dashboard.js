import Card from "../app/system/ui/card";
import Sidebar from "../app/system/partials/sidebar";

const DashboardLayout = () => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                    <Sidebar/>
                </div>
                <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                            <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                                <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                    <div className="relative flex items-center w-full lg:w-64 h-full group">
                                        <div
                                            className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                            <svg fill="none" className="relative w-5 h-5" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <svg
                                            className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                        <input type="text"
                                               className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                                               placeholder="Axtarış"/>
                                        <div
                                            className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                    <a href="#" className="block relative">
                                        <img alt="profil" src="https://i.pravatar.cc/150"
                                             className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                        <div className="flex flex-col flex-wrap sm:flex-row ">
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                                <Card title="Son müraciətlər" subtitle="Göndərilmiş son müraciətlər" icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                    </svg>
                                }/>
                                <Card/>
                            </div>
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                                <div className=" mx-0 sm:ml-4 xl:mr-4">
                                    {/*<Card/>*/}
                                </div>
                                <div className=" mx-0 sm:ml-4 xl:mr-4">
                                    {/*<Card/>*/}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 xl:w-1/3">
                                <div className="mb-4">
                                    {/*<Card/>*/}
                                </div>
                                <div className="mb-4">
                                    {/*<Card/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;