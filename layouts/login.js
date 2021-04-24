import React from 'react';
import Button from "../app/main/ui/button";
import Textfield from "../app/main/ui/textfield";

const LoginLayout = () => {
    return (
        <div className="w-full h-screen font-sans bg-cover bg-landscape">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded-3xl shadow-2xl">
                            <div className="w-full pt-1 text-center -mt-20 mb-5 mx-auto">
                                <a href="#"
                                   className="flex items-center justify-center bg-gray-50 border border-gray-100 block relative mx-auto text-gray-400 object-cover rounded-full h-20 w-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                </a>
                            </div>

                            <p className="mb-8 text-2xl font-light text-center">
                                Hesabınıza giriş edin
                            </p>
                            <div className="mb-2">
                                <Textfield name="email" placeholder="İstifadəçi adı və ya e-poçt"/>
                            </div>
                            <div className="mb-2">
                                <Textfield name="password" placeholder="Şifrə" type="password"/>
                            </div>
                            <div className="flex items-center justify-center mt-4 mb-4">
                                <Button>
                                    Giriş

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                    </svg>
                                </Button>
                            </div>
                            <div className="text-center">
                                <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                                    Qeydiyyat
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginLayout;