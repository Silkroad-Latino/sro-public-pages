import React from 'react';
import styles from './styles.module.css'

const GmsComponent = () => {
  return (
    <>
      <div className={`${styles.sideBarImgBox} ${styles.fortressWar} ${styles.gmsOnline}`}>
        <p>
          <strong>GMs</strong>
          En Linea
        </p>

        <div className={styles.fortress}>
          <p>
            <span
              className={styles.greenCircle} style={{"backgroundColor": "#A7A7A7"}}>
            </span>
            <span className={styles.gmsName}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>
                  [GM] xMileZ
                </font>
              </font>
            </span>
          </p>

          <p>
            <span className={styles.greenCircle}
              style={{"backgroundColor": "#A7A7A7"}}>
            </span>
            <span className={styles.gmsName}>
              <font
                className={styles.verticalAlign}>
                <font
                  className={styles.verticalAlign}>
                  [GM] Grito
                </font>
              </font>
            </span>
          </p>

          <p>
            <span className={styles.greenCircle}></span>
            <span className={styles.gmsName}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>
                  [GM] Rubia
                </font>
              </font>
            </span>
          </p>

          <p>
            <span className={styles.greenCircle}></span>
            <span className={styles.gmsName}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>
                  [GM] No
                </font>
              </font>
            </span>
          </p>

          <p>
            <span className={styles.greenCircle} style={{"backgroundColor": "#A7A7A7"}}></span>
            <span className={styles.gmsName}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>
                  [GM] Celes
                </font>
              </font>
            </span>
          </p>

          <p>
            <span className={styles.greenCircle}></span>
            <span className={styles.gmsName}>
                <font className={styles.verticalAlign}>
                  <font className={styles.verticalAlign}>
                    [GM] Keila
                  </font>
                </font>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GmsComponent;
