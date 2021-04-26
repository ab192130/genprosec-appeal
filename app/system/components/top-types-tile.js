import axios from "axios";
import {useState, useEffect} from 'react';
import Loading from "../../system/ui/loading";
import Card from "../ui/card";

const TopTypesTile = ({data, path}) => {
    const [fetching, setFetching] = useState(false);
    const [appeals, setAppeals] = useState(data);

    const fetch = async () => {
        setFetching(true);

        try {
            const res = await axios.get(path, {
                params: {
                    page: 1,
                    limit: 5,
                    sortBy: 'created_by',
                    orderBy: 'desc'
                }
            });

            setAppeals(res.data);
        } catch (e) {
            console.error(e);
        }

        setFetching(false);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Card title="Ən çox göndərilənlər" subtitle="Vətəndaşların ən çox müraciət etdikləri kateqoriyalar">
            {fetching ? <div className="p-10"><Loading size="xl"/></div>
                : <div>
                    {appeals.map((item, row_index) => {
                        return <div key={item.id}
                                    className="px-4 py-2 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 mb-3 rounded-3xl cursor-pointer">
                            {item.type}</div>
                    })}
                </div>}
        </Card>
    );
};

TopTypesTile.defaultProps = {
    data: []
};

export default TopTypesTile;