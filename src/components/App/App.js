import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import './App.css';
import MainBody from '../MainBody/MainBody';


function App() {
  return (
    <div className="App row">
        <LeftPane></LeftPane>
        <MainBody></MainBody>
    </div>
  );
}

export default App;
