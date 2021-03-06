import React from 'react';
import './LogInForm.scss';
import fbLogo from '../Images/logos/fb.png';
import googleLogo from '../Images/logos/google.png';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLogInFrameWork, resetPassword, signInWithEmailAndPassword, storeAuthToken } from './loginManager';
import { userContext } from '../../App';

const LogInForm = () => {
    const [loggedInUser, setLoggedInUser, user, setUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    initializeLogInFrameWork();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (response) => {
        setUser(response);
        setLoggedInUser(response);
        !newUser && storeAuthToken();
        !response.error && history.replace(from);
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => handleResponse(res))
    }
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => handleResponse(res))
    }
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value);
            if (!isFieldValid) {
                alert('Your password have to be 8 character long and must contain one letter and one number');
                e.target.value = '';
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            if (user.password === user.confirmPassword) {
                const userName = user.name;
                createUserWithEmailAndPassword(userName, user.email, user.password)
                    .then(res => handleResponse(res));
            }
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => handleResponse(res));
        }
        e.target.reset();
        e.preventDefault();
    }
    const handleResetPass = email => {
        if (user.email) {
            alert("Check email to reset your password!")
            resetPassword(email);
            history.push('/login');
        }
    }

    return (
        <div className="container">
            <div className="login-form">
                {
                    user.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{user.error}</strong>
                        <button onClick={() => window.location.reload()} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                {
                    user.newUser && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>User account has{user.isSignedIn ? 'logged in' : 'created'} successfully! Please login now</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <h4>
                        {(location.hash === '#/reset') ? 'Reset Password' :
                            newUser ? 'Create an account' : 'LogIn'}
                    </h4>
                    {
                        newUser && <>
                            <div className="form-group">
                                <div className="input-group">
                                    <input onBlur={handleBlur} type="text" className="form-control" name="firstName" placeholder="First Name" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input onBlur={handleBlur} type="text" className="form-control" name="lastName" placeholder="Last Name" required />
                                </div>
                            </div>
                        </>
                    }
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email Address" required />
                    </div>
                    {
                        !(location.hash === '#/reset') &&
                        <div className="form-group">
                            <input onBlur={handleBlur} type="password" className="form-control" name="password" placeholder="Password" required />
                        </div>
                    }
                    {
                        newUser && <div className="form-group">
                            <input onBlur={handleBlur} type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" required />
                        </div>
                    }
                    <div className="form-group">
                        {
                            (location.hash === '#/reset') ? <button onClick={() => handleResetPass(user.email)} className="login-btn form-control submit-btn" >Reset Password</button>
                                : <input type="submit" className="login-btn form-control submit-btn" value={!newUser ? 'LogIn' : 'Create an Account'} />
                        }
                    </div>
                    {
                        (!newUser && !(location.hash === '#/reset')) &&
                        <div className="clearfix">
                            <label className="float-left form-check-label text-dark">
                                <input type="checkbox" /> Remember me
                            </label>
                            <Link to='#/reset' className="orange-text float-right" >Forgot Password?</Link>
                        </div>
                    }
                    <p className="mt-3 mb-1">{newUser && !(location.hash === '#/reset') ? 'Already have an account?' : !(location.hash === '#/reset') ? "Don't have an account?" : ''}
                        <span className="orange-text" onClick={() => setNewUser(!newUser)}>{newUser && !(location.hash === '#/reset') ? 'LogIn' : !(location.hash === '#/reset') ? 'Create an account' : ''}</span></p>
                </form>

                {!(location.hash === '#/reset') &&
                    <>
                        <div className="Separator"><i>or</i></div>
                        <div onClick={fbSignIn} className="social-login d-flex justify-content-around align-items-center">
                            <img className='d-inline logo' src={fbLogo} alt="" />
                            <span>Continue With Facebook</span>
                        </div>
                        <div onClick={googleSignIn} className="social-login d-flex justify-content-around align-items-center mt-3">
                            <img className='d-inline logo' src={googleLogo} alt="" />
                            <span>Continue With Google</span>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};
export default LogInForm;