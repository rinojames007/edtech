import { Signup } from 'ui';
import axios from 'axios';
export default function SignupPage () {
    async function handleSignup(username: string, password: string){
        try{
            const responsess = await axios.post("/api/admin/signup", {
                username,
                password
            });
            console.log(responsess);
        } catch (e) {
            console.log('something broke in here:',e)
        }
    }
return <div>
    <Signup onClick = {handleSignup}/>
</div>
}