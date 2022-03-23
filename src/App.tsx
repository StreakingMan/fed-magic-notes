import React from 'react';

import style from './App.module.scss';
import {
    AppBar,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';

const drawerWidth = 240;

function App() {
    return (
        <div className={style.app}>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
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
                    <ListItem button>
                        <ListItemText primary={'前端常用站点'} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default App;
