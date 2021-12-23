import React from 'react';
import styles from './styles.module.css'

const ListNewsComponent = () => {
  return (
    <>
      <div className={`${styles.cornerBox} ${styles.marginTop}`}>
        <h4>Notices recites:</h4>
        <ul className={`${styles.listUnStyled} ${styles.recentNews} ${styles.listGroup}`}>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/06012021-INSPECCION-COMPLETADA-96">[06/01/2021]
              INSPECTION COMPLETEDA</a>
            <br/>
            <small>11 meses </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/11122020-INSPECCION-COMPLETADA-95">[11/12/2020]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>11 meses </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/241120-INSPECCION-COMPLETADA-94">[24/11/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/021120-INSPECCION-COMPLETADA-93">[02/11/20]
              INSPECCION COMPLETADA</a>
            <br/>
              <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/291020-INSPECCION-COMPLETADA-89">[29/10/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/080920-INSPECCION-COMPLETADA-88">[08/09/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/210820-INSPECCION-COMPLETADA-87">[21/08/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/140820-INSPECCION-COMPLETADA-79">[14/08/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
          <li className={styles.listGroupItem}>
            <a href="https://www.alfa.srolatino-servers.com/blog/updates/110720-INSPECCION-COMPLETADA-78">[11/07/20]
              INSPECCION COMPLETADA</a>
            <br/>
            <small>1 año </small>
          </li>
        </ul>
        <div className={styles.buttonNews}>
          <a
            href="https://www.alfa.srolatino-servers.com/blog"
            className={`${styles.btn} ${styles.btnBlock} ${styles.btnGrungeSimple}`}
            role="button"> Mas
          </a>
        </div>
      </div>
    </>
  );
};

export default ListNewsComponent;
