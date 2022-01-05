import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
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
const NotLoggedIn = ({guestCheckout, setguestCheckout, setNotLoggedIn}) => {

    const [open, setOpen] = useState(true)

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
                        YOU ARE NOT SIGNED IN!
                    </Typography>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Button variant='contained' color='success'>SIGN IN</Button>
                        <Button variant='contained' style={{backgroundColor: 'grey', color: 'white', marginLeft: '103px'}} onClick={e => {setguestCheckout(true); setNotLoggedIn(false)}}>CONTINUE AS GUEST</Button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )

}

export default NotLoggedIn;