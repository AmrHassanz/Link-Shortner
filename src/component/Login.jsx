import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MediaContext } from './mediaContext/MediaContext';

export default function Login() {
  let { getUser, submitRegister, error, isLoading, userData } = useContext(MediaContext);
  

  return (
    <>
      {!userData ? <div className='login py-5'>
        <div className='container d-flex align-items-center justify-content-center pt-5'>
          <form onSubmit={submitRegister} className='rounded-3 border my-5 p-4 bg-light w-75'>
            <h2 className='text-center mb-4'>Login Form</h2>

            {error ? <div className='alert alert-danger fw-normal py-0'>{error}</div> : ''}

            <div className="mb-3">
              <input onChange={getUser} placeholder='Email' type="email" className="form-control" name="email" id="email" />
            </div>
            <div className="mb-3">
              <input onChange={getUser} placeholder='Password' type="password" className="form-control" name="password" id="password" />
            </div>
            <button type="submit" className="btn my-btn">{isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}</button>
          </form>
        </div>
      </div> : <Navigate to='/' />}
    </>
  )
}
