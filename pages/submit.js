import DefaultLayout from "../layouts/default";
import Textfield from "../app/main/ui/textfield";
import Button from "../app/main/ui/button";
import {useState} from 'react';
import axios from 'axios';

const Submit = () => {
    const initial = {
        full_name: '',
        email: '',
        phone: '',
    };

    const [submitting, setSubmitting] = useState(false);
    const [payload, setPayload] = useState(initial);

    const reset = () => {
        setPayload({
            full_name: '',
            email: '',
            phone: '',
        });
    };


    const submit = async () => {
        setSubmitting(true);

        try {
            const res = await axios.post('https://60851effd14a870017577685.mockapi.io/api/v1/appeals', payload);
            console.log(res);

            reset();
        } catch (e) {
            console.log(e);
        }

        setSubmitting(false);
    };

    return (
        <div>
            <div className="text-7xl mb-10 font-bold">
                <span className="text-blue-600">Yeni</span> müraciət
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mb-10">
                <div className="">
                    <Textfield label="Ad" placeholder="Məs, Kənan" name="first_name"
                               value={payload.full_name} onChange={val => payload.full_name = val}/>
                </div>
                <div className="">
                    <Textfield label="E-poçt" placeholder="Məs, kenan@mammadov.com" name="last_name"
                               value={payload.phone} onChange={val => payload.phone = val}/>
                </div>
                <div className="">
                    <Textfield label="Əlaqə nömrəsi" placeholder="Məs, +994501234567" name="last_name"
                               value={payload.email} onChange={val => payload.email = val}/>
                </div>
            </div>

            <div className="text-right">
                <Button onClick={submit} loading={submitting}>
                    Növbəti

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010
                              1.414l-4 4a1 1 0 01-1.414 0z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

Submit.Layout = DefaultLayout;

export default Submit;