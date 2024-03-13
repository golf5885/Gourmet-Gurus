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

//https://www.marionskitchen.com/wp-content/uploads/2019/09/Chinese-BBQ-Pork-Steamed-Buns4.jpg

const getRating = () => {
    return (Math.random() * 5) + 1;
}

const FoodItemCard = ({ id, isReadOnly = true, img = 'https://www.foodandwine.com/thmb/w7S6lQl89TE6FjbVWEaTB15YME0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Baked-Pizza-Pasta-with-Soppressata-XL-RECIPE0323-ee628618b9e54d4d964afcdc2d7f75e4.jpg', name = 'Pepperoni Pasta' }) => {
    return (
        <>
            <Card sx={{ maxWidth: 400, height: '100%', borderRadius: 3 }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <Link href={`/dishes/${id}`}>

                        <CardMedia
                            component="img"
                            height="140"
                            width="140"
                            src={img}
                            alt="Yummy Food here"
                            sx={{ objectFit: 'cover', maxHeight: '185px' }} // Add this line to apply the objectFit property
                        />
                    </Link>

                    <CardContent >
                        <Typography variant="h5" component="div" sx={{ fontFamily: "Kalnia", fontWeight: '700', fontSize: '30px', color: 'black' }}>
                            {name}
                        </Typography>

                        <div className='mt-1 ml-0'>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" value={getRating()} precision={0.5} readOnly={isReadOnly} />
                            </Stack>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default FoodItemCard