import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useRef, useEffect, useState} from "react";
import Button from "./button";

const Modal = ({active, onChange, title, children, icon, theme, color, onPositive}) => {
    const [open, setOpen] = useState(active);
    const cancelButtonRef = useRef();

    useEffect(() => {
        setOpen(active);
    }, [active]);

    function closeModal() {
        setOpen(false);
        onChange(false);
    }

    function openModal() {
        setOpen(true);
        onChange(true);
    }

    function runPositive(e) {
        closeModal();
        onPositive(e);
    }

    return (
        <>
            {open && <div className={`fixed inset-0 z-40 flex items-center justify-center
            bg-red-600 bg-opacity-10`}>

            </div>}
            <Transition show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    static
                    open={open}
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-75"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-75"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex items-center">
                                    <span className={`rounded-xl relative p-2 bg-red-100`}>
                                        {icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <Dialog.Title
                                            as="span"
                                            className="font-bold cursor-pointer text-md text-gray-600 transition group-hover:text-black dark:text-white ml-2"
                                        >
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {children}
                                    </p>
                                </div>

                                <div className="mt-4 space-x-4 flex flex-wrap justify-end">
                                    <Button onClick={closeModal} theme="default">
                                        Xeyr, qalsın
                                    </Button>
                                    <Button theme={theme} onClick={runPositive} icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                    }>
                                        Bəli
                                    </Button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

Modal.defaultProps = {
    theme: 'info',
    color: 'gray'
};

export default Modal;