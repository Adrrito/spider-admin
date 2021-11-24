import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { Route, Switch, useRouteMatch } from 'react-router'
import Reports from '../Reports/Reports';
import Feedbacks from '../Feedbacks/Feedbacks';
import DashboardHome from '../DashboardHome/DashboardHome';
import AllAdmins from '../AllAdmins/AllAdmins';
import AddAdmin from '../AddAdmin/AddAdmin';
import CreateCategory from '../CreateCategory/CreateCategory';

const drawerWidth = 180;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink to={`${url}`} style={{ textDecoration: 'none' }}>
                <Button>Dashboard</Button>
            </NavLink>
            <br />
            <NavLink to={`${url}/reports`} style={{ textDecoration: 'none' }}>
                <Button>Reports</Button>
            </NavLink>
            <br />
            <NavLink to={`${url}/feedbacks`} style={{ textDecoration: 'none' }}>
                <Button>Feedbacks</Button>
            </NavLink>
            <br />
            <NavLink to={`${url}/allAdmins`} style={{ textDecoration: 'none' }}>
                <Button>All Admins</Button>
            </NavLink>
            <br />
            <NavLink to={`${url}/addAdmin`} style={{ textDecoration: 'none' }}>
                <Button>Add Admin</Button>
            </NavLink>
            <NavLink to={`${url}/createCategory`} style={{ textDecoration: 'none' }}>
                <Button>Create Category</Button>
            </NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/reports`}>
                        <Reports></Reports>
                    </Route>
                    <Route path={`${path}/feedbacks`}>
                        <Feedbacks></Feedbacks>
                    </Route>
                    <Route path={`${path}/allAdmins`}>
                        <AllAdmins></AllAdmins>
                    </Route>
                    <Route path={`${path}/addAdmin`}>
                        <AddAdmin></AddAdmin>
                    </Route>
                    {/* <Route path={`${path}/addProduct`}>
                        <AddDoctor></AddDoctor>
                    </Route> */}
                    <Route path={`${path}/createCategory`}>
                        <CreateCategory></CreateCategory>
                    </Route>

                </Switch>
            </Box>
        </Box>
    );
}

export default Dashboard;