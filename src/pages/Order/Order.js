import { Grid, Typography, Box, Button, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import menu from '../../data/menu.json'
import Cart from './Cart';
import ItemCard from './ItemCard';

const Order = () => {

    const [cart, setCart] = useState({
        items: [],
        price: 0.00
    });

    useEffect(() => {

    }, [cart.length])

    

    return (
        <div>
            <NavBar />
            <div style={{ width: '80%', margin: 'auto', marginTop: '50px' }}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h3' align='left'>REGULAR</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                            {menu.regular.map(item =>
                                <ItemCard item={item} cart={cart} setCart={setCart} craft='Regular'/>
                            )}
                        </div>
                        <br />
                        <br />
                        <Typography variant='h3' align='left'>PREMIUM</Typography>  
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                            {menu.premium.map(item =>
                                <ItemCard item={item} cart={cart} setCart={setCart} craft='Premium'/>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div style={{ width: '75%', height: '500px', margin: 'auto', marginTop: '20px' }}>
                            <Typography variant='h4' align='center'>MY ITEMS</Typography>
                            <Cart mycart={cart}/>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default Order;