import React from 'react';
import styles from './styles.module.css'

const DonationComponent = () => {
  return (
    <>
      <div className={`col-md-3 ${styles.noPaddingAll}`}>
        <div className={styles.subSpotLinkBg}>
          <a
            href="https://www.alfa.srolatino-servers.com/profile/charge"
            className={`${styles.subSpotLinkImage} ${styles.donateLink}`}
            data-bg="url(/assets/img/donate-link.png)">
            Dona!
            <br/>
            <small>Obtene Creditos! </small>
            <br/>
            <small>Y Disfruta!</small>
          </a>
        </div>
      </div>
    </>
  );
};

export default DonationComponent;
