import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-tittle'> Sign Up</h1>
                <form>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to='/login'>login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;