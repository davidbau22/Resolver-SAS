import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../Redux/actions';

function checkErrors(post) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let errors = {};

  if (!emailRegex.test(post.email)) {
    errors.email = 'Please provide a valid email';
  }

  if (!post.password) {
    errors.password = 'Please provide a password here';
  }

  return errors;
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      return alert('Please fill in the entire form');
    } else if (!post.email || !post.password) {
      return alert('Please fill in the entire form :/');
    } else {
      dispatch(signIn(post));
      if (post.email.includes('admin') && post.password === '12345') {
        navigate('/adminhome');
      } else if (post.email.includes('technician') && post.password === '12345') {
        navigate('/technicianhome');
      } else {
        alert('Datos incorrectos, por favor intente nuevamente :)');
      }
    }
  }

  function handleInputChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4">
          <h2 className="text-center">Sign in here</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleInputChange}
                value={post.email}
                name="email"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handleInputChange}
                value={post.password}
                name="password"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
