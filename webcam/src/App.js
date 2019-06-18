import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer url="http://localhost/hls/test.m3u8" playing controls />
      </header>
    </div>
  );
}

export default App;
