import React from 'react';

interface EmbeddedVideoProps {
  link: string;
}

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ link }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={link}
      title="Youtube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ border: 0, padding: '10px' }}
    ></iframe>
  );
};

export default EmbeddedVideo;
