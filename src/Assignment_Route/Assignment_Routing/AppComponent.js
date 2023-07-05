import React from 'react';

import Employees from './Employees';
import Department from './Department';
import Project from './Project';

import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function AppComponent() {
    return (
       

    <>
<Router>

 
    
<Header></Header>
    
    <Routes>
      
        <Route path="/employee" element={<Employees />} />
      
        
        <Route path="/department"element={<Department />} />
        <Route path="/project"element={<Project />} />
      </Routes>
    </Router>
    
  </>
    );
  }
  export default AppComponent;