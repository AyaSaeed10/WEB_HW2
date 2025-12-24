import { useState, useEffect, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/login'
import Register from './Components/register'
import StarterPage from './Components/starterPage'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseProfile from './Components/chooseProfile'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chooseProfile" element={<ChooseProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
