import DashboardLayout from "../../layouts/dashboard";
import RecentTile from "../../app/system/components/recent-tile";
import TopTypesTile from "../../app/system/components/top-types-tile";
import { motion } from "framer-motion";

const Dashboard = () => {
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
            <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className=" mx-0 sm:ml-4 xl:mr-4">
                        <RecentTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                    <div className=" mx-0 sm:ml-4 xl:mr-4">
                        <TopTypesTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className=" mx-0 sm:ml-4 xl:mr-4">
                        <RecentTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                    <div className=" mx-0 sm:ml-4 xl:mr-4">
                        <RecentTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className="mb-4">
                        <TopTypesTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                    <div className="mb-4">
                        <RecentTile title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

Dashboard.Layout = DashboardLayout;

export default Dashboard;