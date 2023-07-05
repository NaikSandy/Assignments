import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import "./styles.css";


function Header() {
    return ( <>
   
    <div class="nav">
    <Link to="/employee" className='link-color'>Employees</Link>
    <br></br>
    <Link to="/department" className='link-color'>Department</Link>
    <br></br>
    <Link to="/project" className='link-color'>Projects</Link>
    </div>


 
    </> );
}

export default Header;