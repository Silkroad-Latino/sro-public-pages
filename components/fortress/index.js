import React from 'react';
import styles from './styles.module.css'

const FortressComponent = () => {
  return (
    <>
      <div className={`${styles.sidebarImgBox} ${styles.fortressWar}`}>
        <p>Fortress War<br/> Miercoles / Domingo 17:30</p>
        <div className={styles.fortress}>
          <p>
            <span className={`${styles.iconFortress} ${styles.hotan}`}>B</span> <span
            className={styles.fortressName}>Hotan:</span>
            <span className="pull-right"><a
              href="https://www.alfa.srolatino-servers.com/guild/UnitedBrooS">UnitedBrooS</a> (10%)</span>
          </p>
          <p>
            <span className={`${styles.iconFortress} ${styles.bandit}`}>H</span> <span
            className={styles.fortressName}>Bandit:</span>
            <span className="pull-right"><a
              href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">AnGeLs_DeMoN</a> (10%)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FortressComponent;
