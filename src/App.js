import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/test1';
import CountComponent from './components/CountComponent';
import RegisterInputButton from './components/RegisterInputButton';
import TagList from './components/inputbox';
import React from 'react';

function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <div className="App">
      <TagList />
    </div>
  );
}

export default App;
