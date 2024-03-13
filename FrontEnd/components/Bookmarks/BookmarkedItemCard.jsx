'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import Link from 'next/link'; // Import Link from next/link
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';


const BookmarkedItemCard = ({ id }) => {
    return (
        <>

            <Link href={`/dishes/${id}`}>
                <Card sx={{ maxWidth: 400, height: '100%', borderRadius: 3 }}>
                    <CardActionArea sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            width="140"
                            src={'https://www.foodandwine.com/thmb/w7S6lQl89TE6FjbVWEaTB15YME0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Baked-Pizza-Pasta-with-Soppressata-XL-RECIPE0323-ee628618b9e54d4d964afcdc2d7f75e4.jpg'}
                            alt="Yummy Food here"
                            sx={{ objectFit: 'cover' }} // Add this line to apply the objectFit property
                        />
                        <CardContent >
                            <Typography variant="h5" component="div" sx={{ fontFamily: "Kalnia", fontWeight: '700', fontSize: '30px', color: 'black' }}>
                                Pepperoni Pasta
                            </Typography>

                            <div className='mt-1 ml-0'>
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" value={4} precision={0.5} readOnly />
                                </Stack>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>

        </>
    )
}

export default BookmarkedItemCard;