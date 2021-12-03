import React from 'react';
import styles from './styles.module.css'

const ScreenComponent = () => {
  return (
    <>
      <div className="screenshots-home">
        <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
          <li className={styles.subSpotTitle}>
            <h4>IMAGEN DE LA SEMANA</h4>
          </li>
        </ul>
        <div
          className={`${styles.sideBarImgBox} ${styles.screenshots}`}
          style={{
            "backgroundImage": "url(https://www.alfa.srolatino-servers.com//uploads/pictures/2021/46/9e1104218cbc80b06a325f882f4c93913514e6ad.jpg)",
          }}>
          <a href="https://www.alfa.srolatino-servers.com//pictures/pic/2021/46"
             className={styles.link}>
          </a>
          <br/>
          <div className={styles.links}>
            <span className="pull-left">
              <a href="https://www.alfa.srolatino-servers.com/pictures/upload">
                <span className={`${styles.glyphicon} glyphicon-cloud-upload`}></span>Enviar Imagen
              </a>
            </span>
            <span className="pull-right">
              <a href="https://www.alfa.srolatino-servers.com/pictures">
                Todas Las Imagenes
                <span className={`${styles.glyphicon} glyphicon-arrow-right`}></span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenComponent;
