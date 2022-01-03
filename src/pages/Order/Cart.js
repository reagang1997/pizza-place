import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Cart = ({ mycart }) => {

    const [lCart, setCart] = useState([]);
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTax((mycart.price*.08).toFixed(2))
        setTotal((mycart.price + (mycart.price*.08.toFixed(2))).toFixed(2))
    },[mycart])
    
    return (
        <div>
            {mycart.items.map(item =>
                <Typography variant='h5' align="center">
                    {item.qty}X {item.size} {item.name.toUpperCase()}
                </Typography>)}
            <Typography variant='h5' align='center'>TAX: ${tax}</Typography>
            <Typography variant='h3' align='center'>TOTAL: ${total}</Typography>
            <br/>
            <br/>
            <Button variant="contained" style={{backgroundColor: '#640000'}}>CHECK OUT</Button>
        </div>
    )
}

export default Cart;