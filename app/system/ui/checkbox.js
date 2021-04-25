import {useState, useEffect} from 'react';

const Checkbox = ({value, onChange}) => {
    const [field, setField] = useState(value);

    const updateValue = (val) => {
        setField(val);
        onChange(val);
    };

    useEffect(() => {
        setField(value);
    }, [value]);

    return (
        <input type="checkbox"
               className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md
                    checked:bg-green-200 checked:border-transparent focus:outline-none cursor-pointer"
               checked={field}
               onChange={(event) => updateValue(event.target.checked)}/>
    );
};

Checkbox.defaultProps = {
    value: false,
    onChange: () => {
    }
};

export default Checkbox;