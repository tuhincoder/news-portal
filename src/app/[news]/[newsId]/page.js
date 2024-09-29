import { getSingleNews } from '@/utils/getSinglenews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    const { data } = await getSingleNews(params.newsId)
    // console.log('news details', data);
    return (
        <Box className="mt-2">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={data.thumbnail_url} alt='dettals' width={800} height={800}></Image>
                        {/* ----*/}
                        <Grid container className='mt-2' spacing={2}>
                            <Grid item lg={6}>
                                <Image src={data.image_url} alt='dettals' width={800} height={800}></Image>

                            </Grid>
                            <Grid item lg={6}>
                                <Image src={data.image_url} alt='dettals' width={800} height={800}></Image>
                            </Grid>

                        </Grid>
                        {/* --- */}

                    </Grid>
                    <Grid item lg={6} className='space-y-3'>
                        <Typography variant='h5' component={"h2"}>{data.title}</Typography>
                        <Box className='' style={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',


                        }}>
                            <Avatar alt="Remy Sharp" src={data.author.img} />
                            <Typography>By {data.author.name}</Typography>

                            <Typography >Publish:  {data.author.published_date}</Typography>
                        </Box>
                        <Typography style={{
                            textAlign: "justify",
                            whiteSpace: 'pre-line',
                            color: 'gray',


                        }}>{data.details}</Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;