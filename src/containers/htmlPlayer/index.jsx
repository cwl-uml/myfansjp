import React from 'react';
import Plyr from "plyr-react";

// import "plyr-react/dist/plyr.css";

const HtmlPlayer = (props) => {
  const { content } = props;

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: content,
        type: 'video/mp4',
      }
    ]
  };
  return (
    <Plyr source={videoSrc} />
  )
}

export default HtmlPlayer;