import React from 'react';
import VideoPlayer from 'react-video-js-player';

function App() {
  return (
    <div className='player-wrapper'>
      <VideoPlayer
        controls={true}
        width="720"
        height="420"
        src={"http://10.10.60.200/hls/stream.m3u8"}
      />
    </div>
  );
}

export default App;
