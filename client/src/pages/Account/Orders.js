import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CookingOrder from "./CookingOrder";
import PastOrder from "./PastOrder";

const Orders = ({ }) => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        const tmpOrders = await axios.get('/api/user/orders');
        setOrders(tmpOrders.data)
    }


    return (
        <Box sx={{width: {xs: 'fit-content', md: '80%'}, margin: {xs: 'auto', md: '0px'}, }}>
            <div className="orders-container">
                <Typography variant='h4' align="left">CURRENT ORDERS</Typography>
                <hr />
                {orders.map(order => {
                    console.log(order)
                    if (order.status === 'Cooking') {
                        return (
                            <CookingOrder order={order}/>
                        )
                    }
                })}
                <br/>
                <Typography variant='h4' align="left">PAST ORDERS</Typography>
                <hr />
                
                {orders.map(order => {
                    console.log(order)
                    if (order.status !== 'Cooking') {
                        return (
                            <PastOrder order={order}/>
                        )
                    }
                })}
            </div>
        </Box>
    )
}

export default Orders;