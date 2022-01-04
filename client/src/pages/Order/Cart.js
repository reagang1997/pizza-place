import { Button, Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Cart = ({ mycart }) => {

    const [lCart, setCart] = useState([]);
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)
    const [codes, setCodes] = useState([{ name: 'OFF15', amount: .15 }])
    const [foundCode, setFoundCode] = useState({ name: '', found: false })
    const [tmpCode, setTmpCode] = useState('')
    const [couponApplied, setApplied] = useState(false);
    const [itemTotal, setITotal] = useState(0);
    const [savings, setSavings] = useState(0)

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
    return (
        <div>
            {mycart.items.map(item =>
                <Typography variant='h5' align="center">
                    {item.qty}X {item.size} {item.name.toUpperCase()}
                </Typography>)}
            {foundCode.found ? <Typography variant='h5' align='center'>COUPON: -${savings}</Typography>
                : <></>}
            <Typography variant='h5' align='center'>PIZZA: ${itemTotal}</Typography>
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
            <Button variant="contained" style={{ backgroundColor: '#640000' }}>CHECK OUT</Button>
        </div>
    )
}

export default Cart;