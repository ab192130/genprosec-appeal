import DashboardLayout from "../../../layouts/dashboard";
import Table from '../../../app/system/ui/table';
import { motion } from "framer-motion";

const Appeals = () => {

    const schema = {
        full_name: {
            label: 'Adı, Soyadı',
            type: 'string',
            avatar: 'avatar',
            primary: true
        },
        type: {
            label: 'Növ',
            type: 'string',
        },
        email: {
            label: 'E-poçt',
            type: 'string',
        },
        phone: {
            label: 'Telefon',
            type: 'string',
        },
        created_at: {
            label: 'Göndərilib',
            type: 'string',
            format: 'date',
        },
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
                <Table title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
            </div>
        </motion.div>
    );
};

Appeals.Layout = DashboardLayout;

export default Appeals;