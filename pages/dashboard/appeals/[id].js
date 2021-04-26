import DashboardLayout from "../../../layouts/dashboard";
import Card from "../../../app/system/ui/card";
import Sheet from "../../../app/system/ui/sheet";
import Button from "../../../app/system/ui/button";
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import axios from 'axios';
import Loading from "../../../app/system/ui/loading";
import Textarea from "../../../app/system/ui/textarea";
import Modal from "../../../app/system/ui/modal";
import { motion } from "framer-motion";

const Appeal = ({id}) => {
    const [fetching, setFetching] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [item, setItem] = useState(null);
    const [deleteDialogActive, setDeleteDialogActive] = useState(false);
    const router = useRouter();

    const fetch = async (id) => {
        setFetching(true);

        try {
            const res = await axios.get(`https://60851effd14a870017577685.mockapi.io/api/v1/appeals/${id}`);

            setItem(res.data);
        } catch (e) {
            console.error(e);
        }

        setFetching(false);
    };

    async function deleteItem() {
        setDeleting(true);

        try {
            const res = await axios.delete(`https://60851effd14a870017577685.mockapi.io/api/v1/appeals/${id}`);
            router.push('/dashboard/appeals');
        } catch (e) {
            console.error(e);
        }

        setDeleting(false);
    }

    useEffect(() => {
        fetch(id);
    }, []);

    if (fetching) {
        return <div className="p-10 m-10"><Loading size="xl"/></div>;
    }

    if (!item) {
        return "no item"
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">

                <Modal active={deleteDialogActive} onChange={setDeleteDialogActive}
                       theme="danger"
                       color="red"
                       onPositive={deleteItem}
                       title="Əminsiniz?" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                }>
                    Bu işləmi geri qaytarmaq mümkün olmayacaqdır. Ağır nəticələrdən yayınmaq üçün
                    bunu etmək istədiyinizə əmin olduğunuzu təsdiq etməlisiniz.
                </Modal>

                {/* Left side */}
                <div className="sm:col-span-3">
                    <Card title="Əsas məlumatlar">
                        <div className="border-t border-gray-200">
                            <dl>
                                <div
                                    className="bg-gray-50 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Ad, soyad
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {item.full_name}
                                    </dd>
                                </div>
                                <div
                                    className="bg-white hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Müraciətin növü
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {item.type}
                                    </dd>
                                </div>
                                <div
                                    className="bg-gray-50 hover:bg-gray-100 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        E-poçt
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {item.email}
                                    </dd>
                                </div>
                                <div
                                    className="bg-white hover:bg-gray-100  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Telefon
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {item.phone}
                                    </dd>
                                </div>
                                <div
                                    className="bg-gray-50 hover:bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Təsvir
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {item.description}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </Card>

                    <Card title="Cavab" subtitle="Müraciət sahibinə təqdim edilmiş cavab">
                        <Textarea/>
                    </Card>
                </div>

                {/* Right side */}
                <div className="sm:col-span-1 space-y-5">
                    <Sheet>
                        <div className="p-4 flex flex-col space-y-3">
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <Button theme="danger" loading={deleting} onClick={(e) => {
                                    e.preventDefault();
                                    setDeleteDialogActive(true);
                                }} icon={
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="text-red-600 group-hover:text-white" fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
                                  4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                    </svg>
                                }>
                                    Sil
                                </Button>
                                <Button disabled icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                }>
                                    Saxla
                                </Button>
                            </div>
                        </div>
                    </Sheet>

                    <Card title="Ümumi" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>}>
                        <div className="space-y-2">
                            <div className="flex flex-wrap justify-between group cursor-pointer">
                                <div className="text-gray-400">Yaradılıb</div>
                                <div className="text-gray-400 group-hover:text-gray-600 transition">{item.created_at}</div>
                            </div>
                            <div className="flex flex-wrap justify-between group cursor-pointer ">
                                <div className="text-gray-400">Son yenilənmə</div>
                                <div className="text-gray-400 group-hover:text-gray-600 transition">{item.created_at}</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

Appeal.Layout = DashboardLayout;

export const getServerSideProps = async (context) => {
    return {
        props: {
            id: context.params.id
        }
    };
};

export default Appeal;