import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
            <div className="flex items-center justify-center pt-6">
                <img src="/logo.png" alt=""/>
            </div>
            <nav className="mt-6">
                <div>
                    <Link href="/dashboard">
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500">
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </span>
                            <span className="mx-4 text-sm font-bold">
                            Lövhə
                        </span>
                        </a>
                    </Link>

                    <Link href="/dashboard/appeals">
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                            </svg>
                        </span>
                            <span className="mx-4 text-sm font-bold">
                            Müraciətlərim
                        </span>
                        </a>
                    </Link>

                    <Link href="/dashboard/settings">
                        <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </span>
                            <span className="mx-4 text-sm font-bold">
                            Ayarlar
                        </span>
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;