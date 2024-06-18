import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Stack from '@mui/material/Stack';
import BarChart from '../charts/BarChart';
import { GeoChart } from '../charts/GeoChart';
import { PieChart } from '../charts/PieChart';

import AccordionDash from '../components/AccordianDash';

import img1 from "../images/img1.png";
import koala from "../images/koala.png";

export default function Home() {
  return (
    <>
    <Box sx={{bgcolor : '#ececec'}}>
    <Navbar />
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
        <Sidenav />
        {/*9. We cut the main BOX from sidebar.jsx and paste it below and remove the drawerhead : */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* Grid copied from mui */}
        <Grid container spacing={2}>
            {/* Card copied from mui */}
            <Grid item xs={6} md={8}>
                <Stack spacing={2} direction="row">
                    <Card sx={{ maxWidth: 500 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 500 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Black Bear
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Black bears are excellent climbers, often scalling trees in search of
                            food or to escape danger. Young bears spend their lives in trees to avoid predators.
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={4} md={4}>
                <Stack spacing={2} direction="row">
                <Card sx={{ maxWidth: 200, maxHeight: 300 }}>
                       
                        <CardContent>
                        <img src={img1} alt={'Img1'} height={'150px'} width={'150px'} />
                        </CardContent>
                    </Card>

                    <Card sx={{ maxHeight:'345', height: "fit-content" }}>
                        <CardContent>
                            <img src={koala} alt={'Koala'} height={'150px'} width={'150px'} />
                        </CardContent>
                    </Card>
                </Stack>
             
            </Grid>
            
            <Box height={20} />

            <Grid item xs={8}>
            <Card sx={{ height:"fit-content"}}>
                        <CardContent>
                            <GeoChart />
                        </CardContent>
                    </Card>
                
            </Grid>
                <Grid item xs={4} >
                <Card sx={{ height:"fit-content" }}>
                        <CardContent>
                            <BarChart />
                        </CardContent>
                    </Card>
                </Grid>

                <Box height={30} />

            <Grid item xs={8}>
            <Card sx={{ height:"fit-content"}}>
                        <CardContent>
                           <AccordionDash />
                        </CardContent>
                    </Card>
            </Grid>

            <Box height={30} />

            <Grid item xs={4}>
            <Card sx={{ height:"fit-content", width:"fit-content"}}>
                        <CardContent>
                        <PieChart />
                        </CardContent>
                    </Card>
            </Grid>

            

        </Grid>
        <Box height={50} />
        </Box>
    </Box>
    </Box>
    </>
  )
}
