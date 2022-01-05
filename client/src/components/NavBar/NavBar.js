import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router";

import logo from '../../assets/logo.png'
import { Drawer, Link } from '@mui/material';
import { maxWidth } from '@mui/system';

import axios from 'axios'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const NavBar = ({ }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [showDrawer, setDrawer] = useState(false)
    const [pages, setPages] = useState(['HOME','MENU'])
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

    const [user, setUser] = useState({});

    useEffect(() => {
        checkForUser();
    }, [])

    const checkForUser = async () => {
        const tmpUser = await axios.get('/api/user/loggedIn');
        console.log(tmpUser)
        if (tmpUser.data.firstName) {
            console.log('hit')
            setPages([...pages, 'ACCOUNT', 'ORDER NOW']);
            setUser(tmpUser.data);
            setLoggedIn(true);

        }
        else {
            setPages([...pages, 'LOGIN', 'ORDER NOW']);

        }
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ height: '100px', }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} className='logo' onClick={e => navigate('/')} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={e => setDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            {user ? <MenuItem key={user.firstName} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{user.firstName}</Typography>
                            </MenuItem> : <></>}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}

                    >
                        <img src={logo} className='logo' style={{ marginRight: '-45px' }} onClick={e => navigate('/')} />

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: { md: '55%' } }}>
                        {pages.map((page) => (
                            <Button
                                size='large'
                                key={page}
                                to={`/${page}`}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                style={page === 'ORDER NOW' ? { backgroundColor: '#640000', margin: '20px' } : { margin: '20px' }}
                                onClick={e => navigate(`/${page.split(' ')[0].toLowerCase()}`)}
                            >
                                {page}
                            </Button>
                        ))}

                    </Box>
                    <Drawer
                        anchor='left'
                        open={showDrawer}
                        onClose={e => setDrawer(false)}
                        style={{ width: '150px' }}
                    >
                        <div style={{ width: '150px' }}>
                            {/* <MenuItem onClick={e => navigate('/about')}>About Us</MenuItem> */}
                            {pages.map(page => {
                                console.log(page)
                                return (
                                    <MenuItem  style={page === 'ORDER NOW' ? { backgroundColor: '#640000', margin: '5px', color: 'white', borderRadius: '5px' } : { margin: '5px' }} onClick={e => navigate(`/${page.split(' ')[0].toLowerCase()}`)}>{page}</MenuItem>
                                )
                            })}
                           

                        </div>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;