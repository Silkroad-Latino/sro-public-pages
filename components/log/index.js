import React from 'react';
import styles from './styles.module.css'

const LogActivities = () => {
  return (
    <>
      <div className="col-md-5 col-lg-6">
        <div className={`${styles.subSpotItems} ${styles.cornerBox}`}>
          <span className={`${styles.corner} ${styles.tl}`}></span>
          <span className={`${styles.corner} ${styles.tr}`}></span>
          <span className={`${styles.corner} ${styles.bl}`}></span>
          <span className={`${styles.corner} ${styles.br}`}></span>
          <div className="row">
            <div className={`col-xs-12 ${styles.itemGroup}`}>
              <h5 className={styles.textLeft}>
                Log De Actividades
                <a href="https://www.alfa.srolatino-servers.com/community/activity_logs">
                  <small>
                    <span className="glyphicon glyphicon-new-window"></span>
                  </small>
                </a>
              </h5>

              <div className="shell-wrap">
                <ul className="shell-body">
                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 22:00:00 - [Arena Notice]: Se repartieron
                          0
                          arenas extras. Usuario con mas kills:
                          itsNegar</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:58:08 - [_Beyon_] mato el unique [Tiger
                          Girl]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:47:31 - [Xouka] mato el unique
                          [Baal]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:46:26 - [NatSu_Vzl] cambio la
                          apariencia de
                          su arma [Tiger Sword] a Egypt Clase B!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:45:08 - [Windrainer10] mato el unique
                          [Khulood]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:43:52 - [GhisLaine_] mato el unique
                          [Haroeris]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:26:29 - [ZOOM_WIN] mato el unique
                          [Captain
                          Ivy]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:10:50 - [Irisariana] mato el unique
                          [Kidemonas]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}>25-11-2021 21:10:33 - [Froresita17] mato el unique
                          [Cerberus]!</font>
                      </font>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <font className={styles.verticalAlign}>
                        <font className={styles.verticalAlign}
                          // eslint-disable-next-line react/no-unescaped-entities
                        >25-11-2021 21:09:26 - El jugador itsSantiago (con 20
                          victorias) gano 30 BPs en el evento Guerra
                          PvP.</font>
                      </font>
                    </a>
                  </li>
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
