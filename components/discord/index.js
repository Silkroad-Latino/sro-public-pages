import React from 'react';
import styles from './styles.module.css';

const DiscordComponent = () => {
  return (
    <>
      <div className={styles.frame} id="discordapp" >
        <iframe
          src="https://discordapp.com/widget?id=408379216862773248&amp;theme=dark"
          width="100%"
          height="200px" allowTransparency="true" frameBorder="0"
        />
      </div>
    </>
  );
};

export default DiscordComponent;
