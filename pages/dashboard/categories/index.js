import DashboardLayout from "../../../layouts/dashboard";
import Table from '../../../app/system/ui/table';
import { motion } from "framer-motion";

const Appeals = () => {

    const schema = {
        name: {
            label: 'Adı',
            type: 'string',
            avatar: 'avatar',
            primary: true
        },
        description: {
            label: 'Təsvir',
            type: 'string',
        },
        created_at: {
            label: 'Yaradılıb',
            type: 'string',
            format: 'date',
        },
    };

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
                <Table title="Kateqoriyalar" schema={schema}
                       namespace="categories"
                       path="https://60851effd14a870017577685.mockapi.io/api/v1/categories"/>
            </div>
        </motion.div>
    );
};

Appeals.Layout = DashboardLayout;

export default Appeals;