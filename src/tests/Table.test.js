import React from "react";
import { render } from '@testing-library/react';
import Table from "../components/Table";

describe("Table test suite", () => {
    const columns = [

        { field: 'affiliateName', headerName: 'Affiliate Name' },
        { field: 'mostRecentReferral', headerName: 'Most Recent Referral' },
        {
            field: 'revenueGenerated',
            headerName: 'Revenue Generated',
    
        },
        {
            field: 'paidPayouts',
            headerName: 'Paid Payouts',
           
    
        },
        {
            field: 'unpaidPayouts',
            headerName: 'UnpaidPayouts',
           
           
        },
        {
            field: 'readyPayouts',
            headerName: 'Ready Payouts',
           
          
        },
        {
            field: 'breakdown',
            headerName: 'Break Down',
            type: 'number',
           
        },
        {
            field: 'type',
            headerName: 'Type',
           
           
        },
        {
            field: 'actions',
            headerName: 'Actions',
            align: "center",
          width:250
           
        }
    ];
    const rows = [
        { id: 1, affiliateName: 'Gy Test Contains leaks', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 2, affiliateName: 'Dwight Wisoky', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 3, affiliateName: 'Zack Treutel', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 4, affiliateName: 'Hilma Welch', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 5, affiliateName: 'Ericka Mohr', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 6, affiliateName: 'Adam Kohler', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 7, affiliateName: 'Pierre Crooks', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
        { id: 8, affiliateName: 'Rocio West', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->' },
    
    ];
    const props = {
        id:"payoutsTable",
        rows:{rows},
        columns:{columns},
        pageSize:5,
        rowsPerPageOptions:5
    }
it("renders", () => {
   
     render(<Table {...props}/>);
    
    
})
});


