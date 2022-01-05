import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import tuesday from '../../assets/img/specials/tuesday.png'
import pizza from '../../assets/img/no-bg-pizza.png'
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';
import axios from 'axios'
import joinRewards from '../../assets/img/join-rewards.png'


const Home = () => {

    const navigate = useNavigate();

    const navToSignup = async () => {
        const user = await axios.get('/api/user/loggedIn');
        if (user.data.firstName) {
            navigate('/account')
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div>
            <NavBar />
            <Box style={{ width: '100%', height: '25px', backgroundColor: '#640000' }}>
                <Typography variant='body1' align='center' style={{ color: 'white' }}>ORDER ONLINE AND SAVE 15% WITH CODE: 15OFF</Typography>
            </Box>
            <Grid container>
                <Grid item md={8}>
                    <div id='special' >
                        <img className='special' src={tuesday} />
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {/* <Typography style={{ position: 'absolute', top: '15px', left: '15px', color: 'white' }} variant='h1' align='center'>TUESDAY</Typography>
                                <Typography style={{ position: 'absolute', top: '85px', left: '15px', color: 'white' }} variant='h1' align='center'>SPECIAL</Typography>
                                <Typography style={{ position: 'absolute', bottom: '135px', right: '15px', color: 'black' }} variant='h3'>1 LG PREMIUM</Typography> */}
                                {/* <img style={{ position: 'absolute', bottom: '57px', right: '12px', color: 'black', height: '90px'}} src={tuesPrice}/> */}
                                {/* <Typography style={{ position: 'absolute', bottom: '40px', right: '15px', color: 'black' }} variant='h1'>$15.99</Typography> */}
                                <Typography style={{ position: 'absolute', bottom: '16px', right: '32px', color: 'black' }} variant='caption'>* LIMIT 2 PER ORDER</Typography>
                                <Button style={{ position: 'absolute', bottom: '33px', right: '15px', backgroundColor: 'black' }} variant='contained' size='large' onClick={e => navigate('/order')}>ORDER NOW</Button>
                            </Box>
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                {/* <Typography style={{ position: 'absolute', top: '15px', left: '15px', color: 'white' }} variant='h3' align='center'>TUESDAY</Typography>
                                <Typography style={{ position: 'absolute', top: '55px', left: '15px', color: 'white' }} variant='h3' align='center'>SPECIAL</Typography>
                                <Typography style={{ position: 'absolute', bottom: '130px', right: '15px', color: 'white' }} variant='h4'>1 LG PREMIUM</Typography>
                                 <img style={{ position: 'absolute', bottom: '80px', right: '11px', color: 'black', height: '65px'}} src={tuesPrice}/> 
                                <Typography style={{ position: 'absolute', bottom: '75px', right: '15px', color: 'white' }} variant='h3'>$15.99</Typography> */}
                                <Typography style={{ position: 'absolute', bottom: '5px', right: '11px', color: 'black' }} variant='caption'>* LIMIT 2 PER ORDER</Typography>
                                <Button style={{ position: 'absolute', bottom: '24px', right: '5px', backgroundColor: 'black' }} variant='contained' size='small' onClick={e => navigate('/order')}>ORDER NOW</Button>
                            </Box>
                    </div>
                </Grid >
                <Grid item md={4}>
                    <Box className='pizza-container' >
                        {/* <Typography variant='h3' align='center'>JOIN OUR REWARDS</Typography> */}
                        <img id='join-rewards' src={joinRewards} />
                        <br/>
                        {/* <Typography variant='h4' align='center'>EARN 1 POINT PER DOLLAR SPENT</Typography> */}
                        <Button style={{ backgroundColor: 'black' }} sx={{marginRight: {md: '117px', xs: '3px'}}} variant='contained' size='large' onClick={navToSignup} >JOIN NOW</Button>
                    </Box>
                </Grid>
            </Grid >

        </div >
    )

}

export default Home;