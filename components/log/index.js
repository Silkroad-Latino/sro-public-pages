import React from 'react';
import styles from './styles.module.css'
import useRankingKillUniques from "../../hooks/useRankingKillUniques"

const LogActivities = () => {
  const killUnique = useRankingKillUniques()
  return (
    <>
      <div className="col-md-5 col-lg-6">
        <div className={`${styles.subSpotItems} ${styles.cornerBox}`}>
          <span className={`${styles.corner} ${styles.tl}`}/>
          <span className={`${styles.corner} ${styles.tr}`}/>
          <span className={`${styles.corner} ${styles.bl}`}/>
          <span className={`${styles.corner} ${styles.br}`}/>
          <div className="row">
            <div className={`col-xs-12 ${styles.itemGroup}`}>
              <h5 className={styles.textLeft}>
                Log De Actividades
                <a href="https://www.alfa.srolatino-servers.com/community/activity_logs">
                  <small>
                    <span className={`${styles.glyphicon} glyphicon-new-window`}/>
                  </small>
                </a>
              </h5>
              <div className={styles.shellWrap} >
                <ul className={styles.shellBody} >
                  {killUnique.map((row, index) => (

                      <li key={`killUnique${index}`}>
                      <a href="#">
                        <font className={styles.verticalAlign}>
                          <font
                            className={styles.verticalAlign}>
                            {row.fecha} {row.unique} {row.charName}
                          </font>
                        </font>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogActivities;
