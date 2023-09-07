import { useRef, useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
    const [signup, setSignup] = useState('true');
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const signupHandler = async (e) => {
        e.preventDefault();
        let obj = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }
        console.log(obj)
        try {
            const response = await axios.post('http://localhost:3000/user/signup', obj)
            console.log(response)
        }
        catch {
            console.log('Not Found')
        }

    }

    return <div className='form-component'>
        <section className="signup-form">
            <form className='form' onSubmit={signupHandler}>
                <h1>{signup ? "Sign Up Form" : "Sign In Form"}</h1>
                {signup && <label htmlFor='name'>Name</label>}
                {signup && <input type='text' ref={name} name='name'></input>}
                <label htmlFor='email'>Email</label>
                <input type='email' ref={email} name='email'></input>
                <label htmlFor='password'>Password</label>
                <input type='password' ref={password} name='password'></input>
                <button type='submit'>{signup ? "Create Account" : "Sign In"}</button>
                <button onClick={() => setSignup(!signup)}>{signup ? "Already a user!!! Sign In here" : "New User !!! Sign Up here"}</button>
            </form>
        </section>
    </div>
}

export default SignUp;