import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Typography, Grid, TextField, Button } from '@mui/material'
import { useNavigate } from "react-router";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Points from './Points';
import MyInfo from './MyInfo';
import Orders from './Orders';
import { Box } from '@mui/system';

const Account = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [editUser, setEditUser] = useState({})
    const [value, setValue] = useState(0);
    const [edited, setEdit] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        console.log('ACCCCCCCCCCCCCCCCCOOOOOOOOOOOUUUUUUUUUNNNNNNNNNNTTTTTTTTTTTT')
        getPointsValue();
        getUser();

    }, [])

    const getUser = async () => {
        const tmpUser = await axios.get('/api/user/loggedIn');
        setUser(tmpUser.data)
        setOrders(tmpUser.data.orders);
        setEditUser(tmpUser.data)
        if (!tmpUser.data.firstName) {
            navigate('/signup')
        }
    }


    const getPointsValue = () => {
        console.log(user.points)
        if (user.points >= 100 && user.points <= 200) {
            console.log(user.points - 100)
            setValue(user.points - 100)

        }
        if (user.points >= 100 && user.points <= 200) {
            console.log(200 - user.points)

            setValue(200 - user.points)
        }
        if (user.points >= 200 && user.points <= 300) {
            console.log(300 - user.points)

            setValue(300 - user.points)
        }
    }




    return (
        <div>
            <NavBar />
            <Typography variant='h2' align='center' style={{ marginTop: '25px' }}>HELLO, {user.firstName}</Typography>
            <Grid container>
                <Grid item md={2} />
                <Grid item md={4}>
                    <Orders orders={user.orders} />
                </Grid>
                <Grid item md={4}>
                    <Box sx={{marginLeft: {xs: '53px'}, marginTop: {xs: '20px'}}}>
                        {value > 0 ? <Points pts={user.points} value={value} /> : <>{getPointsValue()}</>}
                    </Box>
                </Grid>
                <Grid item md={2} />
            </Grid>
            <Box sx={{width: {xs: '90%', md: '20%'}}} style={{ margin: 'auto'}}>
                <br />
                <br />
                <MyInfo user={user} />
            </Box>
        </div>
    )
}

export default Account;