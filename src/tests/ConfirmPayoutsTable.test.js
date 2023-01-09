import React from "react";
import { render } from '@testing-library/react';
import ConfirmPayoutsTable from "../components/ConfirmPayoutsTable";


describe("ConfirmPayoutsTable test suite", () => {
    const columns = [ {
        field: 'affiliateName',
        headerName: 'Affiliate',


    }, {
        field: 'commission',
        headerName: 'Commission',


    }, {
        field: 'type',
        headerName: 'Type',


    },];
    const rows = [{ id: 1, affiliateName: 'Gy Test Contains leaks', mostRecentReferral: '07 Jan 2023', revenueGenerated: '$356.05', paidPayouts: '$0.00', unpaidPayouts: '$36.34', readyPayouts: '$38.80', breakdown: 'view ->',type:'Store Credit' }];
    const props = {
        rows:  rows,
        columns: columns,
        pageSize: 5,
        rowsPerPageOptions: 5
    }
    it("renders", () => {

        render(<ConfirmPayoutsTable {...props} />);


    })
});