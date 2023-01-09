import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PayoutsModal from './PayoutsModal';
import eventBus from '../EventBus';
import Avatar from '@mui/material/Avatar';
import CleanHandsIcon from '@mui/icons-material/CleanHands';

export default function PayoutsPage() {
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const openPayAll = (e) => {
        eventBus.on("getAllRows", (data) => {
            setRows(data)
        }
        );
        setRows(JSON.parse(sessionStorage.getItem("rows")));
        setOpen(true);
        debugger
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card elevation={3}>
                    <CardContent>
                        <div style={{display:'flex'}}>
                 <CleanHandsIcon/>
                        <Typography component="div" variant="h6" style={{marginLeft: '10px',marginTop: '-3px'}}>
                            Total Paid Payouts
                        </Typography>
                        </div>
                        <Typography component="div" variant="h4" style={{fontWeight:'bold'}}>
                            $0.00
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card elevation={3}>
                    <CardContent>
                        <div  style={{display:'flex'}}>
                    <CleanHandsIcon/>
                        <Typography component="div" variant="h6" style={{marginLeft: '10px',marginTop: '-3px'}}>
                            Total Unpaid Payouts
                        </Typography>
                        </div>
                        <Typography component="div" variant="h4" style={{fontWeight:'bold'}}>
                            $185.88
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card elevation={3}>
                    <CardContent>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div  style={{display:'flex'}}>
                            <CleanHandsIcon/>
                                <Typography component="div" variant="h6" style={{marginLeft: '10px',marginTop: '-3px'}}>
                                    Total Ready Payouts
                                </Typography>
                                </div>
                                <Typography component="div" variant="h4" style={{color:'green', fontWeight:'bold'}}>
                                    $185.88
                                </Typography>
                            </div>
                            <div>
                                <Typography>
                                    <Button variant="contained" onClick={openPayAll}>Pay All</Button>
                                </Typography>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </Grid>
            <PayoutsModal open={open} handleClose={handleClose} rows={rows} />
        </Grid>

    );
}