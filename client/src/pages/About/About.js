import { Typography } from '@mui/material';
import React from 'react';
import pizza from '../../assets/img/pizza.jpg'
import NavBar from '../../components/NavBar/NavBar';
const About = () => {


    return (
        <div>
            <NavBar/>
            <img src={pizza} style={{width:'100%', height: '750px', position: 'absolute', top: '100px', left: '0'}}/>
            <div style={{zIndex: 1, position:'relative', marginTop: '200px', color: 'white'}}>
                <Typography variant='h1' align='center'>PIZZA</Typography>
            </div>
        </div>
    )
}

export default About;