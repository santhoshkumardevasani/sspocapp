import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
export default function ConfirmPayoutsTable(props) {

    const columns = [{
        field: 'affiliateName',
        headerName: 'Affiliate',


    }, {
        field: 'commission',
        headerName: 'Commission',


    }, {
        field: 'type',
        headerName: 'Type',


    },];
    const rows = [];
    let total = 0;
    let updatedRows = [];
    if (props.rows) {
        updatedRows = props.rows;
    }
    else {
        updatedRows.push(props.rowData);
    }
    updatedRows.map((rowObj, index) => {
        const newRow = {};
        newRow['id'] = index + 1;
        newRow['affiliateName'] = rowObj.affiliateName;
        newRow['commission'] = rowObj.readyPayouts;
        newRow['type'] = rowObj.type;
        rows.push(newRow);
        total = total + Number((rowObj.readyPayouts).split('$')[1]);
    })

    return (
        <div>
            <div>The following affiliates will be sent payouts:</div>
            <DataGrid
                style={{ width: 500, height: 600 }}
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection

            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Store Credit: {'$' + total}</span>
                <span>Tremendous :$0.00</span>
                <span>Total:{'$' + total}</span>
            </div>
        </div>
    );
}