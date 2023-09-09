import { SignIn } from 'ui';
import axios from 'axios';
export default function SigninPage () {
    async function handleSignin(username: string, password: string) {
        const data = {
            username: username,
            password: password
        };

        await axios.post('/api/admin/signin', data, {
            method: "POST"
        }).then(res => {
            const { token } = res.data;
            console.log(token);
        })
    }
    return <div>
        <SignIn onClick= {handleSignin}/>
    </div>
}