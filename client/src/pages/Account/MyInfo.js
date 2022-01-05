import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const MyInfo = ({user}) => {
    const [editUser, setEditUser] = useState({})
    const [edited, setEdit] = useState(false);

    const handleChange = (e) => {
        if (!edited) {
            setEdit(true);
        }
        let tmpUser = user;
        switch (e.target.id) {
            case 'firstName': {
                tmpUser = { ...tmpUser, firstName: e.target.value }
                break;
            }
            case 'lastName': {
                tmpUser = { ...user, lastName: e.target.value }
                break;
            }
            case 'email': {
                tmpUser = { ...user, email: e.target.value }
                break;
            }
        }
        setEditUser(tmpUser)
    }

    const saveChanges = async () => {
        const updated = await axios.put(`/api/user/update/${user._id}`, editUser)
        window.location.reload()
    }
    return (
        <div style={{width: '100%'}}>
            <Typography variant='h4' align='center'>MY INFO</Typography>
            <TextField
                variant='outlined'
                fullWidth
                id="firstName"
                label="FIRST NAME"
                placeholder={user.firstName}
                name="firstname"
                focused
                value={editUser.firstName}
                onChange={handleChange}
            />
            <br />
            <TextField
                variant='outlined'
                fullWidth
                margin="normal"
                id="lastName"
                label="LAST NAME"
                name="lastName"
                focused
                placeholder={user.lastName}
                onChange={handleChange}
                value={editUser.lastName}
            />
            <br />
            <TextField
                variant='outlined'
                margin="normal"
                id="email"
                fullWidth
                label="EMAIL"
                name="email"
                focused
                placeholder={user.email}
                onChange={handleChange}
                value={editUser.email}
            />
            <br />
            {edited ? <Button variant='contained' style={{ backgroundColor: '#640000' }} onClick={saveChanges}>Save</Button> : <></>}
        </div>
    )
}

export default MyInfo;