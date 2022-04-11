import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'

const LogIn = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword ( auth);
  const navigate = useNavigate();




const handleEmailBlur = event => {
    setEmail(event.target.value);
}
const handlePasswordBlur = event => {
    setPassword(event.target.value);
}
if(user){
navigate('/shop');
}

const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword (email,password);
}



    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title' >Login</h2>
        <form onSubmit={handleUserSignIn}>
        <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>

            </div>

            <div className="input-group">
                <label htmlFor='Password'>Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }
            <input className='form-submit' type="submit" value="Log in" />
      
        </form>
       <p>
           New to Ema-jhon? <Link className='form-link' to="/signup">Create an Account</Link>
       </p>

      <div className='line-container'>
    <div className='line-one'></div>
    <div className='line-two'></div>
      </div>


        </div>
          
        </div>
    );
};

export default LogIn;