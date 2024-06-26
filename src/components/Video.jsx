import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="657fbd6d278d8a087960dbaa" opts={opts} onReady={this._onReady} />;
  }
}

export default Example;
