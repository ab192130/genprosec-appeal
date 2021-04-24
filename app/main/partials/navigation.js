import Button from "../ui/button";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="max-w-7xl mx-auto bg-white rounded-b-3xl dark:bg-gray-800 shadow-xl py-4 ">
            <div className="px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a className="flex-shrink-0" href="/">
                            <img className="h-10 w-10" src="/logo.png" alt=""/>
                        </a>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <a className="uppercase text-gray-400 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Əsas səhifə
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className="uppercase text-gray-400 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Haqqımızda
                                    </a>
                                </Link>
                                <Link href="/submit">
                                    <a className="uppercase text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-white px-3 py-2 rounded-md text-md font-bold">
                                        Müraciət
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a className="uppercase text-gray-400 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Əlaqə
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="md:block -mr-2 flex">
                            <form className="flex w-full max-w-sm space-x-3">
                                <Button>
                                    Yeni müraciət
                                </Button>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width="20" height="20" fill="currentColor" className="h-8 w-8"
                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        className="uppercase text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/#">
                        Əsas səhifə
                    </Link>
                    <Link className="uppercase text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                          href="/#">
                        Haqqımızda
                    </Link>
                    <Link
                        className="uppercase text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/submit">
                        Müraciət
                    </Link>
                    <Link
                        className="uppercase text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/#">
                        Əlaqə
                    </Link>
                </div>
                <div className="p-2 flex">
                    <form className="flex w-full max-w-sm space-x-3">
                        <div className=" relative ">
                            <input type="text" id="&quot;form-subscribe-Search"
                                   className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="components"/>
                        </div>
                        <Button>
                            Yeni müraciət
                        </Button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;