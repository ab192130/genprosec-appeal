import {useState} from 'react';

const Textfield = ({name, value, placeholder, label, type, onChange}) => {
    const [field, setField] = useState(value);

    const onChangeLocal = (val) => {
        setField(val);
        onChange(val);
    };

    return (
        <div className="relative">
            <label htmlFor={name} className="text-gray-700">
                {label}
            </label>
            <input type={type} id={name}
                   className="rounded-xl border-transparent flex-1 appearance-none border border-gray-300 w-full
                   py-4 px-6 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
                   focus:ring mt-2 focus:ring-blue-600 focus:border-transparent focus:shadow-xl transition ease-in-out"
                   autoComplete="off"
                   value={field}
                   onChange={(event) => onChangeLocal(event.target.value)}
                   name={name} placeholder={placeholder}/>
        </div>
    );
};

Textfield.defaultProps = {
    type: 'text'
};

export default Textfield;