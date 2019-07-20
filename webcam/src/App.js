import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        width='100%'
        height='100%'
        url="http://localhost:80/hls/stream.m3u8"
        playing
        controls
      />
    </div>
  );
}

export default App;
