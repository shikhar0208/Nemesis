import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  brandNameDiv: {
    marginLeft: '2rem',
  },
  brandNameH1: {
    marginLeft: '1rem',
    color: '#0058ac',
  },
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: '1.5rem',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '1rem',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#0058ac',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.008)',
      backgroundColor: '#0058ac',
      color: 'white',
    },
  },
}));
