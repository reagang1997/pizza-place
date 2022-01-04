import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import tuesday from '../../assets/img/specials/tuesday.jpg'
import pizza from '../../assets/img/no-bg-pizza.png'
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';


const Home = () => {

    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <Box style={{ width: '100%', height: '25px', backgroundColor: '#640000' }}>
                <Typography variant='body1' align='center' style={{ color: 'white' }}>ORDER ONLINE AND SAVE 15% WITH CODE: 15OFF</Typography>
            </Box>
            <Grid container>
                <Grid item md={8}>
                    <Box style={{ width: 'fit-content', margin: 'auto', marginTop: '50px', position: 'relative', textAlign: 'center' }} >
                        <img className='special' src={tuesday} />
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography style={{ position: 'absolute', top: '15px', left: '15px', color: 'white' }} variant='h1' align='center'>TUESDAY</Typography>
                            <Typography style={{ position: 'absolute', top: '85px', left: '15px', color: 'white' }} variant='h1' align='center'>SPECIAL</Typography>
                            <Typography style={{ position: 'absolute', bottom: '135px', right: '15px', color: 'black' }} variant='h3'>1 LG PREMIUM</Typography>
                            <Typography style={{ position: 'absolute', bottom: '40px', right: '15px', color: 'black' }} variant='h1'>$15.99</Typography>
                            <Typography style={{ position: 'absolute', bottom: '40px', right: '130px', color: 'black' }} variant='caption'>* LIMIT 2 PER ORDER</Typography>
                            <Button style={{ position: 'absolute', bottom: '15px', right: '15px', backgroundColor: 'black' }} variant='contained' size='large' onClick={e => navigate('/order')}>ORDER NOW</Button>
                        </Box>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Typography style={{ position: 'absolute', top: '15px', left: '15px', color: 'white' }} variant='h3' align='center'>TUESDAY</Typography>
                            <Typography style={{ position: 'absolute', top: '55px', left: '15px', color: 'white' }} variant='h3' align='center'>SPECIAL</Typography>
                            <Typography style={{ position: 'absolute', bottom: '115px', right: '15px', color: 'black' }} variant='h4'>1 LG PREMIUM</Typography>
                            <Typography style={{ position: 'absolute', bottom: '75px', right: '15px', color: 'black' }} variant='h3'>$15.99</Typography>
                            <Typography style={{ position: 'absolute', bottom: '13px', right: '32px', color: 'black' }} variant='caption'>* LIMIT 2 PER ORDER</Typography>
                            <Button style={{ position: 'absolute', bottom: '38px', right: '15px', backgroundColor: 'black' }} variant='contained' size='large' onClick={e => navigate('/order')}>ORDER NOW</Button>
                        </Box>
                    </Box>
                </Grid >
                <Grid item md={4}>
                    <Box className='pizza-container' >
                        <Typography variant='h3' align='center'>JOIN OUR REWARDS</Typography>
                        <img className='home-pizza' src={pizza}/>
                        <Typography variant='h4' align='center'>EARN 1 POINT PER DOLLAR SPENT</Typography>
                        <Button style={{  backgroundColor: 'black' }} variant='contained' size='large' onClick={e => navigate('/signup')} >JOIN NOW</Button>
                    </Box>
                </Grid>
            </Grid >

        </div >
    )

}

export default Home;