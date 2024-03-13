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

const images = ['https://i.imgur.com/DHqDadL.jpeg', 'https://i.imgur.com/bcch0Cc.jpeg', 'https://i.imgur.com/Q0JMbbl.jpeg', 'https://i.imgur.com/tvBFfbL.jpeg'];

export default function DiningHallCard({ name, image, id, rating }) {
    return (
        <Paper elevation={3} sx={{ borderRadius: 3 }}>
            <Tooltip title={(id === 'ort') ?

                (<h1 style={{ fontSize: '18px', fontWeight: '50' }}><span style={{ fontWeight: '1000' }}>Mon-Fri:</span> 10AM-8PM<h1 style={{ fontSize: '18px', fontWeight: '50' }}><span style={{ fontWeight: '1000' }}>Sat-Sun:</span> CLOSED</h1></h1>)
                : (<h1 style={{ fontSize: '18px', fontWeight: '50' }}><span style={{ fontWeight: '1000' }}>Mon-Fri:</span> 7:15AM-10AM, 11AM-3PM, 5PM-8:30PM<h1 style={{ fontSize: '18px', fontWeight: '50' }}><span style={{ fontWeight: '1000' }}>Sat-Sun:</span> 10AM-2PM, 5PM-8:30PM</h1></h1>)

            }>
                <Link href={`/dining-halls/${id}`}>
                    <Card sx={{ maxWidth: 400, height: '100%', borderRadius: 3 }}>
                        <CardActionArea sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                width="140"
                                src={images[image]}
                                alt="green iguana"
                                sx={{ objectFit: 'cover' }} // Add this line to apply the objectFit property
                            />
                            <CardContent >
                                <Typography variant="h5" component="div" sx={{ fontFamily: "Kalnia", fontWeight: '700', fontSize: '30px', color: 'black' }}>
                                    {name}
                                </Typography>

                                <div className='mt-1 ml-0'>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Tooltip>
        </Paper>
    );
}

