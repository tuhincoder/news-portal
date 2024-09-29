import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicPage = async ({ params, searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    console.log('categoryNewssss', data);
    return (
        <div className='mt-5'>
            <h1 className='text-xl'>Total: <span className='font-bold'>{searchParams.category}</span> news  {data.length}</h1>

            {/* ----------- */}
            <Box>

                <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        data.map(item => (
                            <Grid key={item.id} item xs={6}>
                                {/* first */}
                                <Link href={`/${item.category.toLowerCase()}/${item._id}`}>
                                    <Card >
                                        <CardActionArea>
                                            <CardMedia style={{ "& img": { width: '100%', height: '250px' } }}>
                                                <Image src={item.thumbnail_url} alt="latest img" width={800} height={800}></Image>
                                            </CardMedia>
                                            <CardContent className="space-y-2">
                                                <p className="bg-red-500 w-[100px] px-2 py-2 rounded text-white">{item.category}</p>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}
                                                </Typography>
                                                <Typography gutterBottom component="div">
                                                    By {item.author.name} {item.author.published_date}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {item.details.length > 100 ? item.details.slice(0, 100) + '...' : item.details}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>

                        ))
                    }

                </Grid>
            </Box>
        </div>
    );
};

export default DynamicPage;