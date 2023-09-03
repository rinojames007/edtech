import { Card, Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
export function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return  <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
    <Typography variant={'h5'}>
        Welcome, explore our world.
    </Typography>
    <TextField id="username" label="Username" onChange={(e) => setUsername(e.target.value)} style={{margin:".5em"}} variant="outlined" />
    <TextField id="password" label="Password" onChange={(e) => setPassword(e.target.value)} style={{margin:".5em"}} variant="outlined" />
    <Button variant="contained"  style={{display:"block", margin:"0 auto"}}>Sign Up</Button>
</Card>
}