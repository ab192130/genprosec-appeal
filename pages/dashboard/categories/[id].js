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
import {motion} from "framer-motion";
import Textfield from "../../../app/system/ui/textfield";
import Moment from "react-moment";

const User = ({id}) => {
    const [fetching, setFetching] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [saving, setSaving] = useState(false);
    const [item, setItem] = useState(null);
    const [deleteDialogActive, setDeleteDialogActive] = useState(false);
    const router = useRouter();

    const fetch = async (id) => {
        setFetching(true);

        try {
            const res = await axios.get(`https://60851effd14a870017577685.mockapi.io/api/v1/categories/${id}`);

            setItem(res.data);
        } catch (e) {
            console.error(e);
        }

        setFetching(false);
    };

    async function deleteItem() {
        setDeleting(true);

        try {
            const res = await axios.delete(`https://60851effd14a870017577685.mockapi.io/api/v1/categories/${id}`);
            router.push('/dashboard/categories');
        } catch (e) {
            console.error(e);
        }

        setDeleting(false);
    }

    async function saveItem() {
        setSaving(true);

        try {
            const res = await axios.put(`https://60851effd14a870017577685.mockapi.io/api/v1/categories/${id}`, item);
        } catch (e) {
            console.error(e);
        }

        setSaving(false);
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
                       title="??minsiniz?" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                }>
                    Bu i??l??mi geri qaytarmaq m??mk??n olmayacaqd??r. A????r n??tic??l??rd??n yay??nmaq ??????n
                    bunu etm??k ist??diyiniz?? ??min oldu??unuzu t??sdiq etm??lisiniz.
                </Modal>

                {/* Left side */}
                <div className="sm:col-span-3">
                    <Card title="??sas m??lumatlar">
                        <form className="">
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <Textfield label="Ad??" name="username" placeholder="Ad??"
                                           value={item.name} onChange={val => {setItem({...item, name: val})}}/>

                                <Textfield label="T??svir" name="description" placeholder="??ifr??"
                                           value={item.description} onChange={val => {setItem({...item, description: val})}}/>
                            </div>
                        </form>
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
                                <Button theme="primary" onClick={saveItem} loading={saving} icon={
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

                    <Card title="??mumi" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>}>
                        <div className="space-y-2">
                            <div className="flex flex-wrap justify-between group cursor-pointer">
                                <div className="text-gray-400">Yarad??l??b</div>
                                <div className="text-gray-400 group-hover:text-gray-600 transition">
                                    <Moment format="LL" locale="az">
                                        {item.created_at}
                                    </Moment>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
};

User.Layout = DashboardLayout;

export const getServerSideProps = async (context) => {
    return {
        props: {
            id: context.params.id
        }
    };
};

export default User;