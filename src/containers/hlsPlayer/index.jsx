import { useRef, useEffect } from 'react';
import { tplayer, destroyPlayer } from "tplayer.js";

const HlsPlayer = (props) => {
  const { id, content } = props;
  const videoRef = useRef();

  useEffect(() => {
    tplayer({
      id,
      source: {
        hls: content,
      },
      playerElem: videoRef.current,
    });

    return () => destroyPlayer({ id });
  }, []);

  return (
    <div>
      <video ref={videoRef}></video>
    </div>
  );

}

export default HlsPlayer;