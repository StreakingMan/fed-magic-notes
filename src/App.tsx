import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.module.scss';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import Home from './Home';
import FedSitesCollect from './FedSitesCollect';
import FedMindMap from './FedMindMap';

const drawerWidth = 240;

function Layout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Divider />
                <List>
                    <Link to={'/'}>
                        <ListItem button>
                            <ListItemText primary={'首页'} />
                        </ListItem>
                    </Link>
                    <Link to={'/fedSitesCollect'}>
                        <ListItem href={'/fedSitesCollect'} button>
                            <ListItemText primary={'前端常用站点'} />
                        </ListItem>
                    </Link>
                    <Link to={'/fedMindMap'}>
                        <ListItem href={'/fedMindMap'} button>
                            <ListItemText primary={'前端知识框架'} />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Magic Notes
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ flexGrow: 1, padding: 4 }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={'fedSitesCollect'} element={<FedSitesCollect />} />
                <Route path={'fedMindMap'} element={<FedMindMap />} />
            </Route>
        </Routes>
    );
}

export default App;
