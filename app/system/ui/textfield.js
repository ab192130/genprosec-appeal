import {useState, useEffect} from 'react';

const Textfield = ({value, placeholder, onChange}) => {
    const [field, setField] = useState(value);

    const updateValue = (val) => {
        setField(val);
        onChange(val);
    };

    useEffect( () => {
        setField(value);
    }, [value]);

    return (
        <div className="relative">
            <input type="text" id="&quot;form-subscribe-Filter"
                   className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full
                   py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                   focus:shadow-md transition focus:border-transparent"
                   autoComplete="off"
                   value={field}
                   onChange={(event) => updateValue(event.target.value)}
                   placeholder={placeholder}/>
        </div>
    );
};

export default Textfield;