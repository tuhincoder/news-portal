"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack } from '@mui/material';
// met icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Header from './Header';


const navItem = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'Pages',
        pathname: '/pages'
    },
    {
        route: 'Categories',
        pathname: '/categories/news?category=all-news'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'Post',
        pathname: '/post'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    }
];


function Navbar() {

    return (
        <>
            <Header />
            {/* ------------------- */}
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} alt='logo' width={100} height={100}></Image>
                        <Box className="text-center w-full">
                            {navItem.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <Button className='text-white'>{item.route}</Button>
                                </Link>
                            ))}
                        </Box>
                        {/* --box for icons-- */}
                        <Box>
                            <Stack direction="row" sx={{ "& svg": { color: 'white' } }}>

                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
