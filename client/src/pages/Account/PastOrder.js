import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
const PastOrder = ({ order }) => {

    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '99%', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {order.items.map(item => <Typography variant="body2" align="left">x{item.qty} | {item.name}</Typography>)}
                </div>
                <div style={{ width: '80%', margin: 'auto', }}>
                    <Typography variant='h5' align="right">${order.price}</Typography>
                    
                </div>
            </div>
            <hr />
        </div>

    )
}

export default PastOrder;