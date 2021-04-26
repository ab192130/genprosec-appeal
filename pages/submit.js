import DefaultLayout from "../layouts/default";
import Textfield from "../app/main/ui/textfield";
import Button from "../app/main/ui/button";
import {useState} from 'react';
import axios from 'axios';
import SwipeableViews from 'react-swipeable-views';
import Textarea from "../app/main/ui/textarea";
import Loading from "../app/system/ui/loading";

const Submit = () => {
    const initial = {
        full_name: '',
        email: '',
        phone: '',
        address: '',
        type: '',
        description: '',
    };

    const [submitting, setSubmitting] = useState(false);
    const [payload, setPayload] = useState(initial);
    const [index, setIndex] = useState(0);

    const reset = () => {
        setPayload({
            full_name: '',
            email: '',
            phone: '',
            address: '',
            type: '',
            description: '',
        });
    };


    const submit = async () => {
        setSubmitting(true);
        setIndex(4);

        try {
            const res = await axios.post('https://60851effd14a870017577685.mockapi.io/api/v1/appeals', payload);
            console.log(res);

            reset();
            setIndex(5);
        } catch (e) {
            console.log(e);
        }

        setSubmitting(false);
    };

    function onSelectType(name) {
        setPayload({...payload, type: name});

        setIndex(1);
    }

    return (
        <div className="max-w-7xl mx-auto">
            <SwipeableViews index={index}>
                {/*Step 1*/}
                <div className="mt-10">
                    <div className="text-5xl mb-10">
                        <div className="font-bold mb-2"><span className="text-blue-600 ">Salam,</span> buyurun!</div>
                        <div className="text-xl text-gray-400">Məsələniz nə ilə bağlı idi?</div>
                    </div>

                    <div className="grid sm:grid-cols-6 grid-cols-1 gap-4 p-10">
                        <div onClick={e => {
                            e.preventDefault();
                            onSelectType('Şikayət')
                        }}
                             className="shadow-xl hover:shadow-lg hover:bg-gray-50 transition rounded-2xl w-72 p-10 bg-white relative overflow-hidden cursor-pointer">
                            <img alt="moto" src="/logo_lg.jpg"
                                 className="absolute -right-20 -bottom-8 h-40 w-50 mb-4"/>
                            <div className="w-4/6">
                                <p className="text-gray-800 text-lg font-medium mb-2 uppercase">
                                    Şikayət
                                </p>
                                <p className="text-gray-400 text-xs">
                                    Bir məsələ ilə bağlı şikayətim var.
                                </p>
                            </div>
                        </div>
                        <div onClick={e => {
                            e.preventDefault();
                            onSelectType('Təklif')
                        }}
                             className="shadow-xl hover:shadow-lg hover:bg-gray-50 transition rounded-2xl w-72 p-10 bg-white relative overflow-hidden cursor-pointer">
                            <img alt="moto" src="/logo_lg.jpg"
                                 className="absolute -right-20 -bottom-8 h-40 w-50 mb-4"/>
                            <div className="w-4/6">
                                <p className="text-gray-800 text-lg font-medium mb-2 uppercase">
                                    Təklif
                                </p>
                                <p className="text-gray-400 text-xs">
                                    Bir məsələ ilə bağlı şikayətim var.
                                </p>
                            </div>
                        </div>
                        <div onClick={e => {
                            e.preventDefault();
                            onSelectType('Ərizə')
                        }}
                             className="shadow-xl hover:shadow-lg hover:bg-gray-50 transition rounded-2xl w-72 p-10 bg-white relative overflow-hidden cursor-pointer">
                            <img alt="moto" src="/logo_lg.jpg"
                                 className="absolute -right-20 -bottom-8 h-40 w-50 mb-4"/>
                            <div className="w-4/6">
                                <p className="text-gray-800 text-lg font-medium mb-2 uppercase">
                                    Ərizə
                                </p>
                                <p className="text-gray-400 text-xs">
                                    Bir məsələ ilə bağlı şikayətim var.
                                </p>
                            </div>
                        </div>
                        <div onClick={e => {
                            e.preventDefault();
                            onSelectType('Videoqəbul')
                        }}
                             className="shadow-xl hover:shadow-lg hover:bg-gray-50 transition rounded-2xl w-72 p-10 bg-white relative overflow-hidden cursor-pointer">
                            <img alt="moto" src="/logo_lg.jpg"
                                 className="absolute -right-20 -bottom-8 h-40 w-50 mb-4"/>
                            <div className="w-4/6">
                                <p className="text-gray-800 text-lg font-medium mb-2 uppercase">
                                    Videoqəbul
                                </p>
                                <p className="text-gray-400 text-xs">
                                    Bir məsələ ilə bağlı şikayətim var.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/*Step 2*/}
                <div className="mt-10">
                    <div className="text-7xl mb-10">
                        <div className="font-bold mb-5"><span className="text-blue-600">Kim</span>sən?</div>
                        <div className="text-xl text-gray-400">Özünü təqdim et</div>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mb-10 p-10">
                        <div className="">
                            <Textfield label="Ad, Soyad" placeholder="Məs, Kənan Məmmədov" name="first_name"
                                       value={payload.full_name} onChange={val => payload.full_name = val}/>

                            <div className="text-left mt-5">
                                <Button onClick={() => setIndex(2)}>
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
                    </div>
                </div>

                {/*Step 3*/}
                <div className="mt-10">
                    <div className="text-7xl mb-10">
                        <div className="font-bold mb-5"><span className="text-blue-600">Əlaqə</span> vasitələriniz</div>
                        <div className="text-xl text-gray-400">Sizinlə necə əlaqə saxlaya bilərik?</div>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mb-10 p-10">
                        <div className="">
                            <Textfield label="E-poçt" placeholder="Məs, kenan@emailim.com" name="email"
                                       value={payload.email} onChange={val => payload.email = val}/>
                        </div>
                        <div className="">
                            <Textfield label="Telefon" placeholder="Məs, Kənan Məmmədov" name="phone"
                                       value={payload.phone} onChange={val => payload.phone = val}/>
                        </div>
                        <div className="">
                            <Textfield label="Ünvan" placeholder="Məs, Bakı, Həsən bəy Zərdabi 13b" name="phone"
                                       value={payload.address} onChange={val => payload.address = val}/>

                            <div className="text-left mt-5">
                                <Button onClick={() => setIndex(3)}>
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
                    </div>
                </div>

                {/*Step 4*/}
                <div className="mt-10">
                    <div className="text-7xl mb-10">
                        <div className="font-bold mb-5"><span className="text-blue-600">Nə</span> düşünürsünüz?</div>
                        <div className="text-xl text-gray-400">Məsələnizi ətraflı izah edin!</div>
                    </div>

                    <div className="m-10">
                        <div className="mb-5">
                            <Textarea label="Məktub" placeholder="Fikirlərinizi buraya daxil edin" name="description"
                                      value={payload.description} onChange={val => payload.description = val}/>
                        </div>

                        <Button onClick={submit} loading={submitting}>
                            Göndər

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010
                              1.414l-4 4a1 1 0 01-1.414 0z"/>
                            </svg>
                        </Button>
                    </div>
                </div>

                {/*Step 5*/}
                <div className="flex flex-col space-y-5 items-center justify-center h-full">
                    <Loading size="2xl"/>

                    <div className="text-4xl">Bir dəq...</div>
                </div>

                {/*Step 6*/}
                <div className="flex flex-col space-y-5 items-center justify-center h-full">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-blue-600" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                        </svg>
                    </div>
                    <div className="text-6xl">Təşəkkürlər!</div>
                    <div className="text-3xl text-gray-400">Məktubunuzu aldıq. Qatqılarınız üçün minnətdarıq.</div>
                </div>
            </SwipeableViews>
        </div>
    );
};

Submit.Layout = DefaultLayout;

export default Submit;