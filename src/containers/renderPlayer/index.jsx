import React from 'react';

import HlsPlayer from '../hlsPlayer';
import HtmlPlayer from '../htmlPlayer';

const RenderPlayer = (props) => {
  const { id, content } = props;
  const urlExtension = checkUrlExtension(content);

  return urlExtension === 'm3u8' ?  <HlsPlayer id={id} content={content}/> : <HtmlPlayer content={content}/>
}

const checkUrlExtension = (url) => {
  const splitter = url.split('.');

  return splitter[splitter.length - 1];
}

export default RenderPlayer;