import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
const CookingOrder = ({ order }) => {

    const [status, setStatus] = useState({ width: 'fit-content', margin: 'auto', backgroundColor: 'green', padding: '5px', borderRadius: '8px', color: 'white', marginLeft: '40px' })
    const [text, setText] = useState('COOKING');

    useEffect(() => {
        let tmp = 5;
        let int;
        int = setInterval(() => {
            tmp--;
            if (tmp === 0) {
                clearInterval(int);
                setStatus({ ...status, backgroundColor: '#640000' });
                setText('READY FOR PICKUP')
            }
        }, 1000)
    }, [])

    return (
        <Box sx={{ width: { xs: '100%', md: '90%' } }} style={{ margin: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '99%', margin: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {order.items.map(item => <Typography variant="body2" align="left">x{item.qty} | {item.name}</Typography>)}
                </div>
                <div style={{ width: 'fit-content', margin: 'auto', display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Typography variant='h5' align="center">${order.price}</Typography>
                        <div style={status}>
                            {text}
                        </div>
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <Typography variant='h5' align="center">${order.price}</Typography>
                        <div style={status} >
                            <Typography variant='body' align="center">{text}</Typography>

                        </div>
                    </Box>
                </div>
            </div>
            <hr />
        </Box>

    )
}

export default CookingOrder;