import React from 'react';
import styles from './styles.module.css'
import useConnectedPlayers from "../../hooks/useConnectedPlayers"

const StatusComponent = () => {

  //const playersOnline = useConnectedPlayers();

  /*{playersOnline.map((row, index) => (
    key={`playersOnline${index}`}
  ))}*/

  return (
    <>

      <div className={styles.serverStatus}>
        <div className={`col-md-3 ${styles.status} text-success`}>Alfa</div>
        <div className="col-md-9">

          <div className={`progress ${styles.grunge}`} >

              <div
                className={styles.progressBar}
                role="progressbar"
                aria-valuenow="43.875"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  "width": "43.875%",
                }} >
                1778/4000
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusComponent;
