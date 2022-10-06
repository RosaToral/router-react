import React from 'react';

export const LoginScreen = ({history}) => {
  const handleLogin = () => history.push('/men');
  return (
    <div className="my-5 container">
      <h1 className="text-center">Welcome to dbz.io!</h1>
      <div className="d-flex flex-column justify-content-center">
        <img className="img-fluid rounded" src="/assets/animate.gif" alt="animate" />
        <button className="btn btn-primary mt-4" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
};