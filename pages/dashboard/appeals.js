import DashboardLayout from "../../layouts/dashboard";
import Table from '../../app/system/ui/table';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Appeals = () => {
    const [fetching, setFetching] = useState(false);
    const [appeals, setAppeals] = useState([
        {
            id: "1",
            created_at: "2021-04-24T08:54:23.689Z",
            full_name: "Kamil Həsənov",
            category: "Şikayət",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dhrubo/128.jpg"
        }
    ]);

    useEffect(async () => {
        setFetching(true);

        try {
            const res = await axios.get('https://60851effd14a870017577685.mockapi.io/api/v1/appeals');

            setAppeals(res.data);
        } catch (e) {
            console.error(e);
        }
    }, []);

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