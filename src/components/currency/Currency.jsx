import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrency, setTitle} from "../../store/newsSlice";
import {Progress} from "../ui/Progress.jsx";
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'CharCode', headerName: 'Код', width: 100},
    {
        field: 'Nominal',
        headerName: 'Номинал',
        width: 100
    },
    {
        field: 'Name',
        headerName: 'Название',
        width: 150,
        flex: 1
    },
    {
        field: 'Value',
        headerName: 'Курс',
        width: 120,
    }
];

export const Currency = () => {
    const dispatch = useDispatch();
    const {currency} = useSelector(state => state.news);
    const [pageSize, setPageSize] = React.useState(10);

    React.useEffect(() => {
        dispatch(setTitle("Курс рубля"));

        if (!currency) {
            dispatch(fetchCurrency());
        }
    }, []);

    if (!currency) {
        return <Progress/>
    }

    return <DataGrid
        rows={Object.values(currency)}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowId={row => row.CharCode}
        autoHeight
    />
}
