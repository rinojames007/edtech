import {Button, Card, TextField, Typography} from '@mui/material';
import {useState} from "react";

export function SignIn(props: {
    onClick: (username: string, password: string) => void
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   /* const [loading, setLoading] = useState(false);
    const navigate export default SignIn;= useNavigate();
    const setUser = useSetRecoilState(userState);*/

    return (
            <Card style={{width:'20vw', margin:'20vh auto', padding:'2rem', textAlign:'center'}}>
                <Typography variant='h5'>
                    Welcome Back.
                </Typography>
                <TextField id="username" label="Username" onChange={(e) => {
                    setUsername(e.target.value)
                }} style={{margin:".5em"}} variant="outlined" />
                <TextField id="password" label="Password" onChange={(e) => {
                    setPassword(e.target.value)
                }} style={{margin:".5em"}} variant="outlined" />
                <Button onClick={() => {
                    props.onClick(username, password)
                }} style={{display:"block", margin:"0 auto"}} variant="contained">
                    Sign In
                </Button>
            </Card>
    )
}