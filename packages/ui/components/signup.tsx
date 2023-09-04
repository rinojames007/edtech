import { Card, Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
export function Signup(props: {
    onClick: (username: string, password: string) => void
}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return  <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
    <Typography variant={'h5'}>
        Welcome, explore our world.
    </Typography>
    <TextField id="username" label="Username" onChange={(e) => {
        setUsername(e.target.value)
    }} style={{margin:".5em"}} variant="outlined" />
    <TextField id="password" label="Password" onChange={(e) => {
        setPassword(e.target.value)
    }} style={{margin:".5em"}} variant="outlined" />
    <Button variant="contained" onClick={async () => {
        props.onClick(username, password);
    }} style={{display:"block", margin:"0 auto"}}>Sign Up</Button>
</Card>
}