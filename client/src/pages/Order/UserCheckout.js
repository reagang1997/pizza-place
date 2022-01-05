import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useNavigate } from "react-router";
import { Link, TextField } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const UserCheckout = ({ setPlaceOrder, mycart, setPoints }) => {

    const [open, setOpen] = useState(true)
    const navigate = useNavigate();

    const getPoints = () => {
        let tmpPoints = (((mycart.price) * .08) + mycart.price).toFixed(2);
        tmpPoints = tmpPoints.split('');
        let found;
        tmpPoints = tmpPoints.filter(i => {
            if(i === '.'){
                found = true;
            }
            if(!found){
                return i
            }
        });

        tmpPoints = tmpPoints.join('');
        console.log(tmpPoints);
        setPoints(tmpPoints)
        return(tmpPoints)
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={e => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h4" component="h2">
                        USER CHECKOUT
                    </Typography>
                    <br />
                    <Typography id="transition-modal-title" variant="h4" component="h2">
                        ${(((mycart.price) * .08) + mycart.price).toFixed(2)}
                    </Typography>
                    <br />
                    <Typography id="transition-modal-title" variant="h4" component="h2">
                        {getPoints()} POINTS EARNED
                    </Typography>
                    <br />
                    <Button variant='contained' color='success' onClick={e => setPlaceOrder(true)}>PLACE ORDER</Button>

                </Box>
            </Fade>
        </Modal>
    )

}

export default UserCheckout;