import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ConfirmPayoutsTable from './ConfirmPayoutsTable';
export default function PayoutsModal(props) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (


    <Dialog

      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Confirm Payouts"}
      </DialogTitle>
      <DialogContent>
        <ConfirmPayoutsTable {...props} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" autoFocus onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="contained" onClick={props.handleClose} autoFocus>
          Send Payouts
        </Button>
      </DialogActions>
    </Dialog>

  );
}