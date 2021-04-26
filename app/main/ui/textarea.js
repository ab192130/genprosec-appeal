import {useState, useEffect} from 'react';

const Textarea = ({name, value, placeholder, label, onChange}) => {
    const [field, setField] = useState(value);

    const updateValue = (val) => {
        setField(val);
        onChange(val);
    };

    useEffect(() => {
        setField(value);
    }, [value]);

    return (
        <div className="relative">
            <label htmlFor={name} className="text-gray-700">
                {label}
            </label>
            <textarea id={name}
                      className="rounded-xl border-transparent flex-1 appearance-none border border-gray-300 w-full
                       py-4 px-6 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none h-60
                       focus:ring mt-2 focus:ring-blue-600 focus:border-transparent focus:shadow-xl transition ease-in-out"
                      autoComplete="off"
                      value={field}
                      onChange={(event) => updateValue(event.target.value)}
                      name={name} placeholder={placeholder}/>
        </div>
    );
};

Textarea.defaultProps = {
    //..
};

export default Textarea;