import React from 'react';
import loader from '../images/loader.gif';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loaderDiv: {
    margin: '1rem 0',
    textAlign: 'center',
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderDiv}>
      <img src={loader} alt='loader' />
    </div>
  );
};

export default Loader;
