import React from 'react';
import '../../App.css';
import pic4 from '../images/pic4.jpg';


export default function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src={pic4}></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <label>Email</label> <br></br>
            <input type='text' placeholder='johndoe@gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <button type='submit' className='btn-sign'>Sign Up</button>

            <div>
            <p className='have-account'>Have an account? <span>Log In here </span></p>
          </div>
          </form>

         
        </div>

      </div>
    </div>
  );
}