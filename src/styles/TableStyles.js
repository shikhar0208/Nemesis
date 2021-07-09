import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  tableCell: {
    backgroundColor: '#0058ac',
    color: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1rem',
  },
  tableContainer: {
    maxHeight: '65vh',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hoverClass: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#145d93',
    },
  },
}));
