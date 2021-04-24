import React from 'react';
import DefaultLayout from "../layouts/default";
import Textfield from "../app/main/ui/textfield";

const Submit = () => {
    return (
        <div>
            <div className="text-7xl mb-10 font-bold">
                <span className="text-blue-600">Yeni</span> müraciət
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div className="">
                    <Textfield label="Ad" placeholder="Məs, Kənan" name="first_name"/>
                </div>
                <div className="">
                    <Textfield label="Soyad" placeholder="Məs, Məmmədov" name="last_name"/>
                </div>
                <div className="">
                    <Textfield label="E-poçt" placeholder="Məs, kenan@mammadov.com" name="last_name"/>
                </div>
                <div className="">
                    <Textfield label="Əlaqə nömrəsi" placeholder="Məs, +994501234567" name="last_name"/>
                </div>
            </div>
        </div>
    );
};

Submit.Layout = DefaultLayout;

export default Submit;