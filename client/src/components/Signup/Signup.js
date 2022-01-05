import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router';

import axios from 'axios';

const Signup = () => {

    const [signup, setSignup] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        if (signup) {
            const user = {
                email: data.get('email'),
                password: data.get('password'),
                firstName: data.get('first-name'),
                lastName: data.get('last-name'),
            };
            const signedUp = await axios.post('/api/user/', user);
            localStorage.setItem('user', JSON.stringify(user));
            if (signedUp.status === 200) {
                if (JSON.parse(localStorage.getItem('cart'))) {
                    console.log('hit')
                    navigate('/order')
                }
                else {

                    navigate('/')
                }

            }
        }
        else {
            const user = {
                email: data.get('email'),
                password: data.get('password'),
            };
            const loggedIn = await axios.post('/api/user/login', user)
            if (loggedIn.status === 200) {
                if (JSON.parse(localStorage.getItem('cart'))) {
                    navigate('/order')
                }
                else {

                    navigate('/')
                }
            }

        }
    };

    return (
        <div>
            <NavBar />
            <Box
                sx={{
                    margin: 'auto',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: '90%' }
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: '#640000' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {signup ? "SIGN UP" : "SIGN IN"}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="EMAIL ADDRESS"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="PASSWORD"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Box sx={signup ? { display: 'block' } : { display: 'none' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="first-name"
                            label="FIRST NAME"
                            name="first-name"
                            autoComplete="first-name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="last-name"
                            label="LAST NAME"
                            id="last-name"
                            autoComplete="last-name"
                        />
                    </Box>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="REMEMBER ME"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ backgroundColor: '#640000' }}
                    >
                        {signup ? 'SIGN UP' : 'SIGN IN'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                FORGOT PASSWORD
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link variant="body2" onClick={e => setSignup(!signup)}>
                                {signup ? "ALREADY HAVE AN ACCOUNT? SIGN IN!" : "DON'T HAVE AN ACCOUT? SIGN UP"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Signup;