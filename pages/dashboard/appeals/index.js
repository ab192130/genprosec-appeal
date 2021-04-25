import DashboardLayout from "../../../layouts/dashboard";
import Table from '../../../app/system/ui/table';

const Appeals = () => {

    const schema = {
        full_name: {
            label: 'Adı, Soyadı',
            type: 'string',
            avatar: 'avatar',
            primary: true
        },
        category: {
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
        <div>
           <Table title="Müraciətlər" schema={schema} path="https://60851effd14a870017577685.mockapi.io/api/v1/appeals"/>
        </div>
    );
};

Appeals.Layout = DashboardLayout;

export default Appeals;