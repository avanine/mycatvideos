import React from 'react';
import * as stylex from "@stylexjs/stylex";

interface EmbeddedVideoProps {
  link: string;
}

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ link }) => {
  return (
    <iframe
      {...stylex.props(styles.root)}
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

const styles = stylex.create({
  root: {
    border: 0,
    padding: '10px',
  },
});

export default EmbeddedVideo;
