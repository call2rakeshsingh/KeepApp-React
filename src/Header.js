import React from 'react';
import logo from './logo.png';

console.log(logo);

function Header() {
  return (
    <>
    <nav className="navbar bg-warning">
    <div className="container-fluid">
      <a className="navbar-brand ml-5" href="#">
      <img src={logo} width="100"  />
      <span className='p-5 fw-bolder fs-1 text-success'>Keep App</span>
      </a>
    </div>
  </nav>
    </>
  )
}

export default Header
