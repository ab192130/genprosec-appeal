import DashboardLayout from "../../layouts/dashboard";
import Card from "../../app/system/ui/card";

const Dashboard = () => {
    return (
        <div className="flex flex-col flex-wrap sm:flex-row ">
            <div className="w-full sm:w-1/2 xl:w-1/3">
                <Card title="Son müraciətlər" subtitle="Göndərilmiş son müraciətlər" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                    </svg>
                }/>
                <Card/>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className=" mx-0 sm:ml-4 xl:mr-4">
                    {/*<Card/>*/}
                </div>
                <div className=" mx-0 sm:ml-4 xl:mr-4">
                    {/*<Card/>*/}
                </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/3">
                <div className="mb-4">
                    {/*<Card/>*/}
                </div>
                <div className="mb-4">
                    {/*<Card/>*/}
                </div>
            </div>
        </div>
    );
};

Dashboard.Layout = DashboardLayout;

export default Dashboard;