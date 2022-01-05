import React, { useState } from 'react';
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
const GuestCheckOut = ({ guest, setGuest, setPlaceOrder, mycart }) => {

    const [open, setOpen] = useState(true)
    const navigate = useNavigate();

    const toSignin = () => {
        localStorage.setItem("cart", JSON.stringify(mycart));
        navigate('/signup')
    }
    return (
        <Box sx={{width: {xs: '50%'}}}>
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
                            GUEST CHECKOUT
                        </Typography>
                        <br />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="first-name"
                            label="FIRST NAME"
                            name="first-name"
                            autoComplete="first-name"
                            autoFocus
                            vaule={guest.firstName}
                            onChange={e => setGuest({...guest, firstName: e.target.value})}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="last-name"
                            label="LAST NAME"
                            id="last-name"
                            autoComplete="last-name"
                            vaule={guest.lastName}
                            onChange={e => setGuest({...guest, lastName: e.target.value})}
                        />
                        <br />
                        <br />
                        <Button variant='contained' color='success'  onClick={e => setPlaceOrder(true)}>PLACE ORDER</Button>
                        <div style={{width: '80px', float: 'right', marginTop: '-7px', marginRight: '44px'}}>
                            <Link variant='caption' onClick={toSignin}>SIGN IT TO START EARNING POINTS</Link>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )

}

export default GuestCheckOut;