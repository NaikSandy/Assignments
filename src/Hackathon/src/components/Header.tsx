import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
function Header() {
    return ( <>
    <div className="nav">
    <Link to="/home" className='link-color'>Home</Link>
    <br></br>
    <Link to="/login" className='link-color'>Login</Link>
    <br></br>
    <Link to="/list" className='link-color'>FriendList</Link>
    </div>
    </> );
}

export default Header;