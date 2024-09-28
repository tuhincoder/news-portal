import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
// met icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Footer = () => {
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
            route: 'Category',
            pathname: '/category'
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
    return (
        <Box className="bg-black px-2 py-10" >
            <Container>
                <Box sx={{ "& svg": { color: 'white' } }} className="w-full text-center">


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

                </Box>
                {/* --------- */}
                <Box className="text-center w-full">
                    {navItem.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                {/* ----- */}
                <Typography color='gray' variant='body1' textAlign={'center'}>
                    @2024 news portal by MH Tuhin
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;