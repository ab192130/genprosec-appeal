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

const User = ({id}) => {
    const [creating, setCreating] = useState(false);
    const [item, setItem] = useState({});
    const router = useRouter();

    async function createItem() {
        setCreating(true);

        try {
            const res = await axios.post(`https://60851effd14a870017577685.mockapi.io/api/v1/categories`, item);

            router.push(`/dashboard/categories/${res.data.id}`)
        } catch (e) {
            console.error(e);
        }

        setCreating(false);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">

                {/* Left side */}
                <div className="sm:col-span-3">
                    <Card title="Əsas məlumatlar">
                        <form className="">
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <Textfield label="Adı" name="username" placeholder="Adı"
                                           value={item.name} onChange={val => {
                                    setItem({...item, name: val})
                                }}/>

                                <Textfield label="Təsvir" name="description" placeholder="Şifrə"
                                           value={item.description} onChange={val => {
                                    setItem({...item, description: val})
                                }}/>
                            </div>
                        </form>
                    </Card>
                </div>

                {/* Right side */}
                <div className="sm:col-span-1 space-y-5">
                    <Sheet>
                        <div className="p-4 flex flex-col space-y-3">
                            <Button theme="primary" onClick={createItem} loading={creating} icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            }>
                                Yarat
                            </Button>
                        </div>
                    </Sheet>
                </div>
            </div>
        </motion.div>
    );
};

User.Layout = DashboardLayout;

export default User;