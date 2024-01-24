import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Test from './components/Testjs';
import PrimeCalculator from './components/Calculate2';
import ThemeButton from './components/ThemeButton';
import { ThemeProvider } from './components/ThemeProvider';
import MyPage from './components/MyPage';
import Posts from './components/Posts';

function App() {

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
