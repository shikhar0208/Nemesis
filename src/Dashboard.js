import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Button } from '@material-ui/core';
import TableComponent from './TableComponent';

import { getUsers } from './redux/actions/actions';
import DialogBox from './DialogBox';

import useStyles from './styles/DashboardStyles';
import Loader from './utils/Loader';

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const { usersList } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (usersList.length === 0) {
      dispatch(getUsers()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, usersList]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.brandNameDiv}>
        <h1 className={classes.brandNameH1}>Nemesis Consultants.</h1>
        <Divider />
      </div>

      <div className={classes.container}>
        <div className={classes.buttonDiv}>
          <Button
            variant='contained'
            className={classes.button}
            onClick={handleClickOpen}
          >
            Add User
          </Button>
        </div>
        <DialogBox open={open} handleClose={handleClose} />
        <Fragment>
          {loading ? <Loader /> : <TableComponent usersList={usersList} />}
        </Fragment>
      </div>
    </div>
  );
};

export default Dashboard;
