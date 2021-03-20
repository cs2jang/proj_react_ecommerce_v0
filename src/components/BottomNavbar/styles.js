import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 0;
export default makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed", 
    bottom: 0,
    zIndex: 100,
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  },
  iconLabel: {
    fontSize: '0.7em'
  },
}));
