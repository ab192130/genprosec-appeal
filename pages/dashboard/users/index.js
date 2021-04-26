import DashboardLayout from "../../../layouts/dashboard";
import Table from '../../../app/system/ui/table';
import { motion } from "framer-motion";

const Appeals = () => {

    const schema = {
        username: {
            label: 'İstifadəçi adı',
            type: 'string',
            avatar: 'avatar',
            primary: true
        },
        email: {
            label: 'E-poçt',
            type: 'string',
        },
        created_at: {
            label: 'Qeydiyyat tarixi',
            type: 'string',
            format: 'date',
        },
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
                <Table title="İstifadəçilər" schema={schema}
                       namespace="users"
                       path="https://60851effd14a870017577685.mockapi.io/api/v1/users"/>
            </div>
        </motion.div>
    );
};

Appeals.Layout = DashboardLayout;

export default Appeals;