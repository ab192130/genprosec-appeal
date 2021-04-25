import React from 'react';

const Textfield = ({placeholder}) => {
    return (
        <div className="relative">
            <input type="text" id="&quot;form-subscribe-Filter"
                   className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full
                   py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                   focus:shadow-md transition focus:border-transparent"
                   placeholder={placeholder}/>
        </div>
    );
};

export default Textfield;