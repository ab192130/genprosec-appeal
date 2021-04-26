import DashboardLayout from "../../layouts/dashboard";
import { motion } from "framer-motion";

const Settings = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div>
                [ayarlar]
            </div>
        </motion.div>
    );
};

Settings.Layout = DashboardLayout;

export default Settings;