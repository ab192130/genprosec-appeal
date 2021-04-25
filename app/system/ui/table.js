import Sheet from "./sheet";
import Button from "./button";
import Textfield from "./textfield";

const Table = ({data, title, schema}) => {
    return (
        <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                <h2 className="text-2xl leading-tight">
                    <div className="flex w-full max-w-sm space-x-3">
                        <Button icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        }>
                            Yeni
                        </Button>
                        <Button theme="info" icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                            </svg>
                        }>
                            Yenilə
                        </Button>
                        <Textfield placeholder="Axtarış"/>
                    </div>
                </h2>
                <div className="text-end">
                    <Button theme="danger" icon={
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="text-red-600 group-hover:text-white" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
                                  4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    }>

                        Sil
                    </Button>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="">
                    <Sheet>
                        <table className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                {Object.keys(schema).map((name, i) => {
                                    return <th key={i} scope="col"
                                               className="px-5 py-3 bg-white font-bold cursor-pointer
                                        text-gray-800 text-left text-sm uppercase font-normal">
                                        {schema[name].label}
                                    </th>
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item, row_index) => {
                                return <tr key={row_index.toString()}>
                                    {Object.keys(schema).map((column_name, column_index) => {
                                        return <td key={column_index.toString()}
                                                   className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex flex-wrap items-center">
                                                {schema[column_name]['avatar'] &&
                                                <img alt="profil" src={`https://i.pravatar.cc/150?u=${item.id}`}
                                                     className="h-10 w-10 rounded-full mr-3 bg-gray-100 cursor-pointer"/>}

                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item[column_name]}
                                                </p>
                                            </div>
                                        </td>
                                    })}

                                    {/*<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true"
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            həll edilib
                                        </span>
                                    </span>
                                </td>*/}
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </Sheet>
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

Table.defaultProps = {
    data: []
};

export default Table;