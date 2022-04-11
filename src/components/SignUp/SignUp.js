import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css'
import auth from '../../firebase.init';
const SignUp = () => {
    //Event handler
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirm,setConfirm] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

const handleEmailBlur = event => {
     setEmail(event.target.value);
}
const handlePasswordBlur = event => {
     setPassword(event.target.value);
}
const handleConfirmBlur = event => {
     setConfirm(event.target.value);
}

if(user ) {
    navigate('/shop');

}

const handleCreateUser = event => {
    console.log(handleCreateUser);
    event.preventDefault();
    if(password !== confirm ){
        setError('Your two passwords did not match');
        return;
    }
    if(password.length < 6) {
        setError('Password must be 6 Characters or longer');
    }

    createUserWithEmailAndPassword(email, password);
}


    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title' >Sign up</h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>

            </div>

            <div className="input-group">
                <label htmlFor='Password'>Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>

            </div>
            <div className="input-group">
                <label htmlFor='Confirm  password'>Confirm password</label>
                <input  onBlur={handleConfirmBlur} type="confirm password" name="confirm password" id="" required/>

            </div>
            <p style={{color:'red'}}>{error}</p>
            <input className='form-submit' type="submit" value="Sign up" name="submit" required/>
      
        </form>
       <p>
          Already have an Account??? <Link className='form-link' to="/login"> Log in Now </Link>    
       </p>

      <div className='line-container'>
    <div className='line-one'></div>
    <div className='line-two'></div>
      </div>


        </div>
          
        </div>
    );
};

export default SignUp;