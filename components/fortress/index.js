import React from 'react';
import styles from './styles.module.css'
import useOwnerOfTheFortress from "../../hooks/useOwnerOfTheFortress"

const FortressComponent = () => {
  const fortressRanking = useOwnerOfTheFortress();
  return (
    <>
      <div className={`${styles.sidebarImgBox} ${styles.fortressWar}`}>
        <p>Fortress War<br/> Miercoles / Domingo 17:30</p>

          {fortressRanking.map((row, index)=> (
            <div className={styles.fortress} key={`fortressRanking${index}`}>
              <p>
                <span className={`${styles.iconFortress} ${styles[`${index}`]}`}>B</span>
                <span className={styles.fortressName}>{row.fortressName}</span>
                <span className="pull-right">
                  <a href={`https://www.alfa.srolatino-servers.com/guild/${row.Name}`}>{row.Name}</a>
                  (10%)
                </span>
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default FortressComponent;
