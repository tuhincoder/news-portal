import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sidBarImg from '@/assets/side-top-news.png'

const SideBar = () => {
    return (
        <Box className='my-10'>
            <Card >
                <CardActionArea>
                    <CardMedia>
                        <Image src={sidBarImg} alt="latest img" width={800} height={800}></Image>
                    </CardMedia>
                    <CardContent className="space-y-2">
                        <p className="bg-red-500 w-[100px] px-2 py-2 rounded text-white">Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin climbs as Elon musk say tesla likely to accept it again
                        </Typography>
                        <Typography gutterBottom component="div">
                            By Mh Tuhin
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;