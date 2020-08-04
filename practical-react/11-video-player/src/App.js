import React from 'react';
import ReactPlayer from 'react-player'

import './App.css';

function App() {
  return (
    <main className="App">
      <section>
        <ReactPlayer
          controls
          height="480px"
          width="720px"
          url="https://www.youtube.com/watch?v=BHACKCNDMW8"
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPause={() => console.log("onPause")}
          onEnded={() => console.log("onEnded")}
          onError={() => console.log("onError")}
        />
      </section>
      <section>
        <ReactPlayer
          controls
          height="480px"
          width="720px"
          url="https://www.twitch.tv/videos/694226755"
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPause={() => console.log("onPause")}
          onEnded={() => console.log("onEnded")}
          onError={() => console.log("onError")}
        />
      </section>
    </main>
  );
}

export default App;
