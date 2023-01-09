import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';

import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const TableSearchBar = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>

                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Sort by</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"


                            autoWidth
                            label="Sort by"
                        >

                            <MenuItem value={10}>Revenue Generated</MenuItem>
                            <MenuItem value={21}>Most Recent Refferal</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Filter by</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"


                            autoWidth
                            label="Filter by"
                        >

                            <MenuItem value={10}>All Pending Payouts</MenuItem>
                            <MenuItem value={21}>Ready Payouts</MenuItem>
                            <MenuItem value={22}>No Leaks</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Actions</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"


                            autoWidth
                            label="Actions"
                        >

                            <MenuItem value={10}>Mark as paid</MenuItem>
                            <MenuItem value={21}>Reject</MenuItem>
                            <MenuItem value={22}>Send payouts</MenuItem>
                        </Select>
                    </FormControl>
                 
                </Grid>
                <Grid item xs={4}>
                
                </Grid>
                <Grid item xs={4}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <TextField
                        id="outlined-required"
                        label="Affiliate's Name or Email"

                    />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <Button variant="contained" style={{height:54}}>Search</Button>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <Button variant="contained" style={{height:54}}>Export</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
};
export default TableSearchBar;