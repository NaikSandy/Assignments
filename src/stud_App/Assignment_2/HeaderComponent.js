import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import "./styles.css";


function HeaderComponent() {
    return ( <>
    <h2>Student APP</h2>
   
    <Link to="/Add-student" className='link-color'>Add Student</Link>
    <br></br>
    <Link to="/Show-student" className='link-color'>Show Student</Link>
    


 
    </> );
}

export default HeaderComponent;