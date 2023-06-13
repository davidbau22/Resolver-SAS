import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {signIn} from '../Redux/actions';


function checkErrors(post) {

    const ValidateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    let errors = {};
    if (!ValidateEmail(post.email)) {
        errors.email = 'Please provide an email'
    }

    if (!post.password) {
        errors.password = 'Please provide a password !!'
    }

    return errors;
}

export default function Login() {

    

    const [error, setError] = useState('')


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [post, setPost] = useState({
        email: '',
        password: '',
    })

    //--------------msj alert to modal
    const [alert, setAlert] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target, 'event login')
        if ((!post.email || !post.password) || (Object.values(errors).length > 0)) return setAlert('Please fill in the entire form :/');
        else {
            dispatch(signIn(post))
        }
    }
    function handleInputChange(e) {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
        setErrors(checkErrors({
            ...post,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div>
            <h2 >Sign in here</h2>
            <div>
                <div >
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label >Email</label>
                            <input onChange={(e) => handleInputChange(e)} value={post.email} name='email' />
                            {
                                errors.email && (<p>{errors.email}</p>)
                            }
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' onChange={(e) => handleInputChange(e)} value={post.password} name='password' />
                            {
                                errors.password && (<p>{errors.password}</p>)
                            }
                        </div>
                        <button type='submit'>Continue</button>
                    </form>
                </div>
            </div>
        </div >

    )
}
