import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: '#145d93',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
      fontSize: '1rem',
    },
    '& .MuiTypography-root.MuiTypography-h6': {
      fontWeight: '600',
      color: '#0058ac',
      fontSize: '1.6rem',
      textAlign: 'center',
    },
    '& .MuiFormControl-marginNormal': {
      margin: '1rem 0',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#145d93',
    },
    '& .MuiIconButton-root': {
      padding: 0,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '1rem auto',
  },

  inputTextField: {
    width: '46%',
  },

  inputTextFieldFull: {
    width: '100%',
  },

  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitButton: {
    margin: '1.2rem 0',
    fontSize: '1.1rem',
  },
  title: {
    paddingBottom: 0,
  },

  confirmTitle: {
    '& .MuiTypography-root.MuiTypography-h6': {
      fontWeight: '400',
      color: '#0058ac',
      fontSize: '1.2rem',
    },
  },
  actionDiv: {
    marginBottom: '1rem',
    marginRight: '1rem',
  },
  outlinedButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '6px 18px',
    fontWeight: '600',
    color: '#0058ac',
    backgroundColor: '#fafafa',
    border: '1px solid #0058ac',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#fafafa',
      transform: 'scale(1.01)',
      outline: 'none',
    },
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '400',
    textTransform: 'none',
    backgroundColor: '#0058ac',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#0058ac',
      transform: 'scale(1.09)',
      outline: 'none',
    },
  },
}));
