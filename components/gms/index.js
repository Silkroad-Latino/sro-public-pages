import React from 'react';
import styles from './styles.module.css'

import useGeneralManagerConnect from  "../../hooks/useGeneralManagerConnected"

const GmsComponent = () => {

  const generalManager = useGeneralManagerConnect();
  return (
    <>
      <div className={`${styles.sideBarImgBox} ${styles.fortressWar} ${styles.gmsOnline}`}>
        <p>
          <strong>GMs</strong>
          En Linea
        </p>
        {generalManager.map((row, index) => (
          <div className={styles.fortress} key={`generalManager${index}`}>
            <p>
            <span
              className={styles.greenCircle} style={{"backgroundColor": "#A7A7A7"}}>
            </span>
              <span className={styles.gmsName}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>{row.CharName}</font>
              </font>
            </span>
            </p>
          </div>
        ))}

      </div>
    </>
  );
};

export default GmsComponent;
