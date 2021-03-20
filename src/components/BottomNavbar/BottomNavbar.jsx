import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MessageIcon from '@material-ui/icons/Message';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import useStyles from './styles';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      color="inherit"
    >
      <BottomNavigationAction className={classes.navIcon} label={<span className={classes.iconLabel}>전단지</span>} icon={<WallpaperIcon />} component={Link} to="/" />
      <BottomNavigationAction className={classes.navIcon} label={<span className={classes.iconLabel}>메시지</span>} icon={<MessageIcon />} component={Link} to="/message" />
      <BottomNavigationAction className={classes.navIcon} label={<span className={classes.iconLabel}>상품목록</span>} icon={<CardGiftcardIcon />} component={Link} to="/products" />
      <BottomNavigationAction className={classes.navIcon} label={<span className={classes.iconLabel}>이벤트</span>} icon={<EmojiEventsIcon />} component={Link} to="/" />
    </BottomNavigation>
  );
}