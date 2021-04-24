import Card from "./card";

const Table = () => {
    return (
            <div className="py-8">
                <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <h2 className="text-2xl leading-tight">
                        Müraciətlər
                    </h2>
                    <div className="text-end">
                        <form className="flex w-full max-w-sm space-x-3">
                            <div className="relative">
                                <input type="text" id="&quot;form-subscribe-Filter"
                                       className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                       placeholder="Axtar"/>
                            </div>
                            <button
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                type="submit">
                                Filter
                            </button>
                        </form>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="">
                        <Card>
                            <table className="min-w-full leading-normal">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Göndərən
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Seriya Nömrəsi
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        Tarix
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                        status
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="https://i.pravatar.cc/150"
                                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Sahib Kərimli
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            AZE123123321
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            12/09/2020
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            həll edilib
                                        </span>
                                    </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Redaktə
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="https://i.pravatar.cc/150"
                                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Zabit Səmədov
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            MN123123321
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            01/10/2012
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            həll edilib
                                        </span>
                                    </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Redaktə
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="https://i.pravatar.cc/150"
                                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Şəhriyar Quliyev
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            MND321123321
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            02/10/2018
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            həll edilib
                                        </span>
                                    </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Redaktə
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="block relative">
                                                    <img alt="profil" src="https://i.pravatar.cc/150"
                                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Əsmər Qarayeva
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            AZE123321123
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            23/09/2010
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            həll edilib
                                        </span>
                                    </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Redaktə
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Card>
                        <div className="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-start">
                            <div className="flex items-center">
                                <button type="button"
                                        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                    1
                                </button>
                                <button type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    2
                                </button>
                                <button type="button"
                                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                    3
                                </button>
                                <button type="button"
                                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                    4
                                </button>
                                <button type="button"
                                        className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Table;