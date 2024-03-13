'use client'
import * as React from 'react';
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
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import Badge from '@mui/material/Badge';
import '@fontsource-variable/noto-sans-lisu';
import { useSession, signIn, signOut } from "next-auth/react"
import { UserButton } from "@clerk/nextjs";
import { UserProfile } from "@clerk/nextjs";






const pages = ['About', 'Favorites', 'Cart'];
const settings = ['Profile', 'Logout'];
const isUserLoggedIn = false;

export default function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
        <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        className='gourmet-gurus-text'
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Italiana',
                            fontWeight: 1000,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >

                        <LocalDiningIcon className='mr-4 mt-1' />
                        GOURMET GURUS
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                                <MenuItem key={page} >
                                    <Typography textAlign="center" onClick={handleCloseNavMenu}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <LocalDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className='gourmet-gurus-text'
                    />
                    <Typography
                        className='gourmet-gurus-text'
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Italiana',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GOURMET GURUS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* This box is necessary for creating empty middle in the navbar/ appbar */}
                    </Box>

                    <Link href={'/bookmarks'}>
                        <Tooltip title='Bookmarks'>
                            <BookmarksIcon className='mr-2 pl-0 gourmet-gurus-text' />
                        </Tooltip>
                    </Link>
                    <Link href={'/cart'}>
                        <Tooltip title='Cart'>
                            <ShoppingCartIcon className='mr-2 gourmet-gurus-text' />
                        </Tooltip>
                    </Link>

                    <UserButton></UserButton>
                    {/* {(isUserLoggedIn) ? (
                        <Link href={'/logout'}>
                            <Tooltip title="Logout">
                                <LogoutIcon onClick={() => { }} sx={{ p: 0 }} className='gourmet-gurus-text'>
                                </LogoutIcon>
                            </Tooltip>
                        </Link>
                    ) : (
                        <Link href={'/login'}>
                            <Tooltip title="Login">
                                <LoginIcon onClick={() => { }} sx={{ p: 0 }} className='gourmet-gurus-text'>
                                </LoginIcon>
                            </Tooltip>
                        </Link>
                    )} */}



                </Toolbar>
            </Container >
        </AppBar >
    );
}
