import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
//12. Now we want to add events for routing to our pages, to do so we'll import useNavigate from react router dom :
import { useNavigate } from 'react-router-dom';
// Import zustand :
import { useAppStore } from '../appStore';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
/* 2. Right now as we've copied the code from MUI, it is in closed state so we need to make it into open state */
export default function Sidenav() {
  const theme = useTheme();
  // 2.(a) We make the below React.useState(false); into React.useState(true);
  // --- const [open, setOpen] = React.useState(true);

  // 12.(a) Defining useNavigate :
  const navigate = useNavigate();

  // const updateOpen = useAppStore((state) => state.updateOpen);
  const open = useAppStore((state) => state.dopen);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={20} />
      <Drawer variant="permanent" open={open}>
       <DrawerHeader>
            {/* 8. onClick={() => setOpen(!open)} this will reverse the open meaning open will becom close and close open. */}
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> 
        <Divider />
        <List>
            {/* 5. List item 1 i.e. for Home page : */} {/*12.(b) We'll have to give onClick event on listitems and give an arraw function inside which will update the navigation : */}
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

                  {/* 6. ListItem 2 for About page : */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/about")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

                              {/* 7. ListItem 2 for Setting page : */}
                              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/settings")}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Setting" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      
    </Box>
  );
}

/* 3. Install react router dom as for now we cannot access the sidebar components. */
/* 4. We'll remove all the dynamic content and other content that we dont require form the above code. Like remove multiple lists, Appbar etc */