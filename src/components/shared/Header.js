import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
// ----
import headerImg from '@/assets/The Dragon News.png'
import { getCurrentDateTime } from '@/utils/getCurrentDate';

const Header = () => {
    const getCurrentDateAndTime = getCurrentDateTime()
    return (
        <Box>
            <Container className='space-y-3 my-4'>

                <Image src={headerImg} alt='header image' width={500} height={500} className='mx-auto' />
                {/* --- */}
                <Typography variant='body1' color='gray' textAlign={'center'}>
                    journalism without fear or favour
                </Typography>
                {/* ------ */}
                <Typography className='text-xl' textAlign={'center'}>
                    {getCurrentDateAndTime}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;