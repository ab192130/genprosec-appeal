import React from 'react';
import Link from "next/link";

const ListItem = ({children, to}) => {
    return (
        <Link href={to}>
            <a className="hover:text-blue-600 text-gray-600 bg-gray-50 dark:bg-gray-600 dark:text-gray-400
                        hover:bg-blue-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white
                        dark:hover:bg-gray-600 duration-200 justify-start active:bg-blue-200 cursor-pointer rounded-xl">
                {children}
            </a>
        </Link>
    );
};

ListItem.defaultProps = {
    to: '/'
};

export default ListItem;