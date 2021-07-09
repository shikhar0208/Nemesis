import React, { useState } from 'react';
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

import { addNewUser } from './redux/actions/actions';

const initialDetails = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  id: '',
};

const DialogBox = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [details, setDetails] = useState(initialDetails);
  const [loading, setLoading] = useState(false);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleCloseDialog = () => {
    setLoading(false);
    setDetails(initialDetails);
    props.handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, username, email, phone, website } = details;
    if (
      (name !== '' && username !== '' && email !== '',
      phone !== '',
      website !== '')
    ) {
      dispatch(addNewUser(details)).then(() => handleCloseDialog());
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle
          id='responsive-dialog-title'
          className={`${classes.title} ${classes.root}`}
        >
          Add new User
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
                name='phone'
                label='Phone number'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.phone}
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
                name='website'
                label='Website Link'
                variant='outlined'
                size='small'
                margin='normal'
                value={details.website}
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
                ADD
              </Button>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBox;
