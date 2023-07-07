import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
 import FriendList from "./components/FriendList";
import Header from './components/Header';
function App() {
  return (
    <div >
      <Router>


<Header />


<Routes>
  
    <Route path="/" element={<Home />} />
  
    
    <Route path="/login"element={<Login />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/home"element={<Home />} />
   <Route path="/list"element={<FriendList />} />
  </Routes>
</Router>
    
    </div>
  );
}

export default App;
