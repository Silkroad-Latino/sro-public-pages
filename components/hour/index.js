import React from 'react';
import styles from './styles.module.css'

const HourComponent = () => {
  return (
    <>
      <div className={`col-md-3 ${styles.noPaddingAll} ${styles.time}`}>
        <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
          <li className={styles.subSpotTitle}>
            <h4>TIEMPO DEL SERVIDOR</h4>
          </li>
        </ul>

        <p id="serverTime">
          <font className={styles.verticalAlign}>
            <font className={styles.verticalAlign}>21:28:41 (UTC-5)</font>
          </font>
        </p>
      </div>
    </>
  );
};

export default HourComponent;
