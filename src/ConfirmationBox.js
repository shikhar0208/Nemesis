import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';
import useStyles from './styles/DialogForm';

import { deleteUser } from './redux/actions/actions';

const ConfirmationBox = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { open, handleCloseConfirm, id } = props;

  const handleDelete = () => {
    dispatch(deleteUser(id)).then(() => handleCloseConfirm());
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseConfirm}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' className={classes.confirmTitle}>
          DELETE
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.actionDiv}>
          <Button
            onClick={handleCloseConfirm}
            variant='contained'
            className={classes.outlinedButton}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant='contained'
            className={classes.filledButton}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationBox;
