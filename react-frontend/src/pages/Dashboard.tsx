import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import PropertyView from '../components/PropertyView'
import HomeIcon from '@material-ui/icons/HomeWork';
import SettingsIcon from '@material-ui/icons/Settings'
import SignOutIcon from '@material-ui/icons/ExitToApp'
import { useHistory } from 'react-router-dom';
import Settings from '../components/Settings'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    myListingsIcon: {
      marginLeft: 15,
      marginRight: 10,
      marginTop: 10
    }
  }),
);

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState('property');
  const [properties, setProperties] = useState([{
    id: '',
    propertyName: '',
    squareFootage: '',
    price: ''
  }]);
  const [error, setError] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    if (index < properties.length) {
      setView('property')
    }
    // settings
    if (index == properties.length) {
      setView('settings')
    }
    // sign out
    if (index == properties.length + 1) {
      history.push("/");
    }
  };

  useEffect(() => {
    fetch("/properties/realtor/1")
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProperties(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Alexa Open House
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h6">
          <HomeIcon className={classes.myListingsIcon} /> My Listings
        </Typography>
        <List>
          {properties.map((property, index) => (
            <ListItem button
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              key={property.id}
            >
              <ListItemText primary={property.propertyName} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Sign Out'].map((text, index) => (
            <ListItem button
              selected={selectedIndex === properties.length + index}
              onClick={(event) => handleListItemClick(event, properties.length + index)}
              key={text}>
              <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <SignOutIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {/* show window according to selectedIndex (listing or setting) */}
        {(view == 'property') ?
          <PropertyView
            id={properties[selectedIndex].id}
            propertyName={properties[selectedIndex].propertyName}
            squareFootage={properties[selectedIndex].squareFootage}
            price={properties[selectedIndex].price}
          /> : null
        }
        {(view == 'settings') ?
          <Settings /> : null
        }
      </main>
    </div>
  );
}