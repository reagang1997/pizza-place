import { Button, Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotLoggedIn from "./NotLoggedIn";
import GuestCheckOut from "./GuestCheckOut";
import UserCheckout from "./UserCheckout";
import {useNavigate} from 'react-router'
const Cart = ({ mycart, setMycart }) => {

    const [lCart, setCart] = useState([]);
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)
    const [codes, setCodes] = useState([{ name: 'OFF15', amount: .15 }])
    const [foundCode, setFoundCode] = useState({ name: '', found: false })
    const [tmpCode, setTmpCode] = useState('')
    const [couponApplied, setApplied] = useState(false);
    const [itemTotal, setITotal] = useState(0);
    const [savings, setSavings] = useState(0)
    const [notLoggedIn, setNotLoggedIn] = useState(false);
    const [guestCheckout, setguestCheckout] = useState(false);
    const [userCheckout, setUserCheckout] = useState(false);
    const [points, setPoints] = useState(0);
    const [guest, setGuest] = useState({firstName: '', lastName: ''})
    const [user, setUser] = useState({})
    const [placeOrder, setPlaceOrder] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let tmpITotal = mycart.price;
        let tmpTax = (tmpITotal * .08).toFixed(2)
        setTax(tmpTax)
        setITotal(tmpITotal);
        if (foundCode.found) {
            applyCode()
        }
        let tmpTotal = (+tmpITotal + +tmpTax).toFixed(2)
        setTotal(tmpTotal)
    }, [mycart])

    useEffect(() => {
        console.log(mycart)
    }, [guestCheckout])

    useEffect(() => {
        if(placeOrder){
            sendOrder()
        }
    }, [placeOrder])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(cart){
            setMycart(cart);
            setUserCheckout(true);
            checkOut();
        }
    }, [])

    const checkCode = (e) => {
        setTmpCode(e.target.value.toUpperCase())
        codes.forEach(code => {
            if (code.name === e.target.value) {
                setFoundCode({ ...foundCode, found: true, amount: code.amount });
                let tmpSavings = (total * code.amount).toFixed(2)
                setSavings(tmpSavings);
                setTotal((total - tmpSavings).toFixed(2));
            }
            else if (foundCode.found === true) {
                setFoundCode({ ...foundCode, found: false });

            }
        })
    }

    const applyCode = () => {
        console.log(foundCode.amount)
        let tmpSavings = (itemTotal * foundCode.amount).toFixed(2)
        console.log(tmpSavings)
        let tmpTotal = itemTotal - tmpSavings;
        setTotal(tmpTotal);
        setSavings(tmpSavings);
    }

    const renderCoupon = () => {
        if (!couponApplied && foundCode.found) {
            setTotal(total - (total * foundCode.amount));
        }
        return <h1>{total}</h1>
    }

    const checkOut = async () => {
        //check if loggedIn
        const {data} = await axios.get('/api/user/loggedIn');
        if(data.error){
            console.log('hit')
            setguestCheckout(true);
        }
        else{
            console.log(data)
            setUser(data);
            setUserCheckout(true)
        }
    }

    const sendOrder = async () => {
        if(guestCheckout){
            const order = {
                items: mycart.items,
                price: total,
                firstName: guest.firstName,
                lastName: guest.lastName
            }
            const ordered = await axios.post('/api/order/guest', order);
            console.log(order)
        }
        else if(userCheckout){
            
            const order = {
                items: mycart.items,
                price: total,
                firstName: user.firstName,
                lastName: user.lastName,
                user: user._id,
                points: points
            }
            console.log(order);
            const ordered = await axios.post('/api/order/user', order)
            if(ordered.status === 200){
                localStorage.clear();
                navigate('/account')
            }
        }
    }
    return (
        <div>
            {mycart.items.map(item =>
                <Typography variant='h5' align="center">
                    {item.qty}X {item.size} {item.name.toUpperCase()}
                </Typography>)}
            <Typography variant='h5' align='center'>PIZZA: ${itemTotal}</Typography>
            {foundCode.found ? <Typography variant='h5' align='center'>COUPON: -${savings}</Typography>
                : <></>}
            <Typography variant='h5' align='center'>TAX: ${tax}</Typography>
            <Typography variant='h3' align='center'>TOTAL: ${total}</Typography>
            <TextField
                margin="normal"
                style={{ width: '50%' }}
                id="coupon"
                label="COUPON CODE"
                name="coupon"
                value={tmpCode}
                onChange={checkCode}
                color={foundCode.found ? 'success' : ''}
                focused={foundCode.found ? 'true' : ''}
            />
            <br />
            <Button variant="contained" style={{ backgroundColor: '#640000' }} onClick={checkOut}>CHECK OUT</Button>
            {guestCheckout? <GuestCheckOut guest={guest} setGuest={setGuest} setPlaceOrder={setPlaceOrder} mycart={mycart}/> : <></>}
            {userCheckout? <UserCheckout setPlaceOrder={setPlaceOrder} mycart={mycart} setPoints={setPoints}/> : <></>}
        </div>
    )
}

export default Cart;