import DashboardLayout from "../../layouts/dashboard";
import Table from '../../app/system/ui/table';
import {useState} from 'react';

const Appeals = () => {
    const [appeals, setAppeals] = useState([
        {
            id: "1",
            created_at: "2021-04-24T08:54:23.689Z",
            full_name: "Kamil Həsənov",
            category: "Şikayət",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dhrubo/128.jpg"
        }
    ]);


    const schema = {
        full_name: {
            label: 'Adı Soyadı',
            type: 'string',
            avatar: 'avatar'
        },
        category: {
            label: 'Növ',
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
           <Table data={appeals} title="Müraciətlər" schema={schema}/>
        </div>
    );
};

Appeals.Layout = DashboardLayout;

export default Appeals;