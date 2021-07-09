import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './styles/TableStyles';

import EditForm from './EditForm';
import ConfirmationBox from './ConfirmationBox';

const TableComponent = (props) => {
  const classes = useStyles();
  const { usersList } = props;
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userId, setUserId] = useState('');

  const handleEdit = (user) => {
    setCurrentUser(user);
    handleClickOpen();
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleDelete = (user) => {
    setUserId(user.id);
    handleOpenConfirm();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label='Faculty Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Name</TableCell>
              <TableCell className={classes.tableCell}>Username</TableCell>
              <TableCell className={classes.tableCell}>Email</TableCell>
              <TableCell className={classes.tableCell}>Phone No.</TableCell>
              <TableCell className={classes.tableCell}>Website</TableCell>
              <TableCell className={classes.tableCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map((user) => (
              <TableRow hover key={user.email}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>
                  <span className={classes.actions}>
                    <EditOutlinedIcon
                      className={classes.hoverClass}
                      onClick={() => handleEdit(user)}
                    />
                    <DeleteOutlineOutlinedIcon
                      className={classes.hoverClass}
                      onClick={() => handleDelete(user)}
                    />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditForm open={open} handleClose={handleClose} user={currentUser} />
      <ConfirmationBox
        open={openConfirm}
        handleCloseConfirm={handleCloseConfirm}
        id={userId}
      />
    </Paper>
  );
};

export default TableComponent;
