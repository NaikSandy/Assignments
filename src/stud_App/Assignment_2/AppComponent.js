import React from 'react';

import AddStudentComponent from './AddStudentComponent';
import ShowStudent from './ShowStudent';
import HeaderComponent from './HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function AppComponent() {
    return (
       

    <>
<Router>

    <HeaderComponent></HeaderComponent>
    

    
    <Routes>
      
        <Route path="/add-student" element={<AddStudentComponent />} />
      
        
        <Route path="/Show-student"element={<ShowStudent />} />
      </Routes>
    </Router>
    
  </>
    );
  }
  export default AppComponent;