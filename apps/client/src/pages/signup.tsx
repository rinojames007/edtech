import { Signup } from 'ui';
import axios from 'axios';
export default function SignupPage () {
    async function handleSignup(username: string, password: string){
        try{
            const responsesData = await axios.post("/api/admin/signup", {
                username,
                password
            });
            console.log(responsesData);
        } catch (e) {
            console.log('something broke in here:',e)
        }
    }
return <div>
    <Signup onClick = {handleSignup}/>
</div>
}