import { Grid, Typography, Box, Button, Select, Fab } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import menu from '../../data/menu.json'
import Cart from './Cart';
import ItemCard from './ItemCard';
import { useNavigate } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Order = () => {

    const [cart, setCart] = useState({
        items: [],
        price: 0.00
    });

    const navigate = useNavigate();
    const myRef = useRef(null)
    const scroll = () => myRef.current.scrollIntoView();
    useEffect(() => {
        
    }, [])

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: '#640000'
    };

    return (
        <div>
            <NavBar />
            <div style={{ width: '80%', margin: 'auto', marginTop: '50px' }}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h3' align='left'>REGULAR</Typography>
                        <Box>
                            <Typography variant='h4' align='center'></Typography>
                        </Box>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                            {menu.regular.map(item =>
                                <ItemCard item={item} cart={cart} setCart={setCart} craft='Regular' />
                            )}
                        </div>
                        <br />
                        <br />
                        <Typography variant='h3' align='left'>PREMIUM</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
                            {menu.premium.map(item =>
                                <ItemCard item={item} cart={cart} setCart={setCart} craft='Premium' />
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div ref={myRef} style={{ width: '75%', height: '500px', margin: 'auto', marginTop: '20px' }}>
                            <Typography variant='h4' align='center'>MY ITEMS</Typography>
                            <Cart mycart={cart} setMycart={setCart}/>

                        </div>
                    </Grid>
                </Grid>
            </div>
            <Box sx={{ display: {sm: 'block', md: 'none'}}}>
                <Fab size="large" color="secondary" aria-label="add" style={style} onClick={scroll}>
                    <ShoppingCartIcon />
                </Fab>
            
            </Box>
        </div>
    )

}

export default Order;