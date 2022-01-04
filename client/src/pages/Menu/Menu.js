import { Typography, Grid } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import menu from '../../data/menu.json';
import pep from '../../assets/img/pep.jpg'

const Menu = () => {

    return (
        <div>
            <NavBar />
            <br />
            <br />
            <Typography variant='h1' align="center">MENU</Typography>
            <br />

            <Grid container>
                <Grid item md={6}>
                    <div style={{ width: '75%', margin: 'auto' }}>
                        <Typography variant='h3' align="center">REGULAR</Typography>
                        <Typography variant='h5' align='center'>SM: $10.99 MD: $12.99 LG: $18.99</Typography>
                        {menu.regular.map(item => <>
                            <br />
                            <br />
                            <Typography variant='h4' align="center">{item.name.toUpperCase()}</Typography>
                            <br />
                            <Typography variant='h5' align="left">{item.description.toUpperCase()}</Typography>
                        </>)}

                    </div>
                </Grid>
                <Grid item md={6}>
                    <div style={{ width: '75%', margin: 'auto' }}>
                        <Typography variant='h3' align="center">PREMIUM</Typography>
                        <Typography variant='h5' align='center'>SM: $12.99 MD: $14.99 LG: $20.99</Typography>
                        {menu.premium.map(item => <>
                            <br />
                            <br />
                            <Typography variant='h4' align="center">{item.name.toUpperCase()}</Typography>
                            <br />
                            <Typography variant='h5' align="left">{item.description.toUpperCase()}</Typography>
                        </>)}

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Menu;