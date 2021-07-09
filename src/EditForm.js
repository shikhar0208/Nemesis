import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles/DialogForm';

import Loader from './utils/Loader';

import { updateUserDetails } from './redux/actions/actions';

const EditForm = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { open, handleClose, user } = props;

  const [details, setDetails] = useState({});
  const [changes, setChanges] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDetails({ ...user });
  }, [user]);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    setChanges({ ...changes, [name]: e.target.value });
  };

  const handleCloseDialog = () => {
    setLoading(false);
    setChanges({});
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (changes && Object.keys(changes).length !== 0) {
      dispatch(updateUserDetails(changes, user)).then(() => {
        handleCloseDialog();
      });
    }
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          className={`${classes.title} ${classes.root}`}
        >
          Update User Details
        </DialogTitle>
        <DialogContent>
          <form
            autoComplete='off'
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <div className={classes.rowWise}>
              <TextField
                name='name'
                label='Name'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.name}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              />
              <TextField
                name='username'
                label='Username'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.username}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                name='website'
                label='Website Link'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.website}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              />
              <TextField
                type='email'
                name='email'
                label='Email'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.email}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                name='phone'
                label='Phone number'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.phone}
                onChange={handleChangeDetails}
                className={classes.inputTextFieldFull}
              />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <Button
                variant='contained'
                type='submit'
                className={`${classes.filledButton} ${classes.submitButton}`}
              >
                Update
              </Button>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditForm;
