import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ItemCard = ({ item, cart, setCart, craft }) => {

    const [size, setSize] = useState('')
    const addToCart = (e) => {

        const name = e.target.id.split('-').join(' ');
        let item = {
            name: name,
            size: size,
            qty: 1
        }
        let price;
        switch (size) {
            case 'LG':
                if (craft === "Premium") {
                    price = 20.99
                }
                else {
                    price = 18.99
                    }
                break;
            case 'MD':
                if (craft === "Premium") {
                    price = 14.99
                    }
                else {
                    price = 12.99
                    }
                break;
            case 'SM':
                if (craft === "Premium") {
                    price = 12.99
                    }
                else {
                    price = 10.99
                    }
                break;
        }
        let newCart;
        let found = false;
        if (cart.items.length > 0) {
            newCart = cart.items.map(i => {
                if (i.name === item.name && i.size === item.size) {
                    item = i;
                    item.qty++;
                    found = true;
                    return item;
                }
                else {
                    return i;
                }
            })
            if (!found) newCart.push(item)
            setCart({ ...cart, items: newCart, price: (cart.price + price) }); 
        }
        else {
            setCart({ ...cart, items: [item], price: (cart.price + price) });
        }
        console.log(newCart)


    }

    const handleChange = () => {

    }

    return (
        <Box
            style={{ margin: '10px', border: '2px solid black', borderRadius: '10px', padding: '5px', position: 'relative', height: '455px' }}
            sx={{ width: { md: '233px', xs: 'fit-content' } }}
        >
            <Typography variant='h5' align='center'>{item.name.toUpperCase()}</Typography>
            <Box
                sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src='https://via.placeholder.com/150' />
            </Box>
            <br />
            <Typography variant='body' align='left'>{item.description.toUpperCase()}</Typography>
            <br />
            <br />
            <div style={{ width: '100%', position: 'absolute', bottom: '0', right: '0', margin: '10px' }}>
                <FormControl >
                    <InputLabel id='size'>Size</InputLabel>
                    <Select
                        labelId="size"
                        value={size}
                        label="Size"
                        onChange={e => setSize(e.target.value)}
                        style={{ width: '75px', marginRight: '10px' }}
                    >
                        <MenuItem value='LG'>LG {craft === "Premium" ? "$20.99" : "$18.99"}</MenuItem>
                        <MenuItem value='MD'>MD {craft === "Premium" ? "$14.99" : "$12.99"}</MenuItem>
                        <MenuItem value='SM'>SM {craft === "Premium" ? "$12.99" : "10.99"}</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' color='success' id={item.name.split(' ').join('-')} onClick={addToCart} style={{}}>Add</Button>
            </div>
        </Box >
    )
}

export default ItemCard;