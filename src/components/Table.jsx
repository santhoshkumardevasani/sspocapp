import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PayoutsModal from './PayoutsModal';
import eventBus from '../EventBus';
const rows = [
    { id: 1, affiliateName: 'Gy Test Contains leaks', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$156.05', paidPayouts: '$0.00', unpaidPayouts: '$16.34', readyPayouts: '$18.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 2, affiliateName: 'Dwight Wisoky', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$256.05', paidPayouts: '$0.00', unpaidPayouts: '$26.34', readyPayouts: '$28.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 3, affiliateName: 'Zack Treutel', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 4, affiliateName: 'Hilma Welch', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$456.05', paidPayouts: '$0.00', unpaidPayouts: '$46.34', readyPayouts: '$48.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 5, affiliateName: 'Ericka Mohr', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$556.05', paidPayouts: '$0.00', unpaidPayouts: '$56.34', readyPayouts: '$58.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 6, affiliateName: 'Adam Kohler', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$656.05', paidPayouts: '$0.00', unpaidPayouts: '$66.34', readyPayouts: '$68.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 7, affiliateName: 'Pierre Crooks', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$756.05', paidPayouts: '$0.00', unpaidPayouts: '$76.34', readyPayouts: '$78.80', breakdown: 'view ->', type: 'Store Credit' },
    { id: 8, affiliateName: 'Rocio West', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$856.05', paidPayouts: '$0.00', unpaidPayouts: '$86.34', readyPayouts: '$88.80', breakdown: 'view ->', type: 'Store Credit' },

];
sessionStorage.setItem("rows", JSON.stringify(rows));
export default function Table() {
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState({});
    const [selectionModel, setSelectionModel] = React.useState([]);
    const openPayoutsModal = (row) => {
        setOpen(true);
        setRowData(row);
    }

    const handleClose = () => {
        setOpen(false);
    };
    const columns = [

        { field: 'affiliateName', headerName: 'Affiliate Name', width: 200, renderCell: (params) => (
            <span style={{fontWeight:'bold', color:'blue'}}>{params.value}</span>
        ) },
        { field: 'mostRecentReferral', headerName: 'Most Recent Referral', width: 200, renderCell: (params) => (
            <span style={{fontWeight:'bold'}}>{params.value}</span>
        )},
        {
            field: 'revenueGenerated',
            headerName: 'Revenue Generated',
            width: 150,
            renderCell: (params) => (
                <span style={{fontWeight:'bold', color:'green'}}>{params.value}</span>
            )
        },
        {
            field: 'paidPayouts',
            headerName: 'Paid Payouts',
            width: 100,
            renderCell: (params) => (
                <span style={{fontWeight:'bold'}}>{params.value}</span>
            )

        },
        {
            field: 'unpaidPayouts',
            headerName: 'UnpaidPayouts',
            width: 130,
            renderCell: (params) => (
                <span style={{fontWeight:'bold'}}>{params.value}</span>
            )

        },
        {
            field: 'readyPayouts',
            headerName: 'Ready Payouts',
            width: 130,
            renderCell: (params) => (
                <span style={{fontWeight:'bold', color:'red'}}>{params.value}</span>
            )

        },
        {
            field: 'breakdown',
            headerName: 'Break Down',
            width: 100,
            renderCell: (params) => (
                <span style={{fontWeight:'bold', color:'skyblue'}}>{params.value}</span>
            )

        },
        {
            field: 'type',
            headerName: 'Type',
            renderCell: (params) => (
                < CardGiftcardIcon />
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            align: "center",
            width: 250,
            renderCell: (params) => (
                <strong>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ marginLeft: 16 }}
                        tabIndex={params.hasFocus ? 0 : -1}
                        onClick={() => openPayoutsModal(params.row)}
                    >
                        Send Payment
                    </Button>
                </strong>
            ),
        }
    ];


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                id="payoutsTable"
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                selectionModel={selectionModel}
                onSelectionModelChange={(newSelectionModel) => {
                    eventBus.dispatch("getAllRows", { rows: rows });
                    setSelectionModel(newSelectionModel);

                }}
            />
            <PayoutsModal open={open} rowData={rowData} handleClose={handleClose} totalRows={selectionModel} />
        </div>
    );
}