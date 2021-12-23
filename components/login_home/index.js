import React from 'react';

import styles from './styles.module.css'

const LoginHomeComponent = () => {
  return (
    <>
      <div className={`col-md-3 ${styles.spotRight}`}>
        <a href="https://www.alfa.srolatino-servers.com/download" className={styles.downloadButton}>
          <span className={`${styles.glyphicon} glyphicon-cloud-download`} />
          <span className="hidden-md">descarga gratis</span>
        </a>

        <div className={`${styles.loginCont} col-md-12 ${styles.frame}`}>
          <div className={styles.frameInner}>
            <div role="form" id="loginForm">
              <div className={`${styles.formGroup} ${styles.narrow}`}>
                <input type="username" className={`${styles.formControl} ${styles.grunge}`} id="username"
                       placeholder="IDENTIFICACIÓN"/>
                <span className="endbtn" />
              </div>
              <div className={`${styles.formGroup} ${styles.narrow}`}>
                <input type="password" className={`${styles.formControl} ${styles.grunge}`} id="password"
                       placeholder="Contraseña"/>
              </div>
              <button type="button" className={`${styles.btn} ${styles.btnBlock} ${styles.btnGrunge}`}>Iniciar Sesion
              </button>
            </div>

            <h5 className="login-reg-link">
              <a href="https://www.alfa.srolatino-servers.com/register" className={styles.a}>
                <span className={` ${styles.glyphicon} glyphicon-chevron-right`}/>
                Crear Una Cuenta!
              </a>
              <br/>
              <a href="https://www.alfa.srolatino-servers.com/register/recoveryPassword" className={styles.a}>
                <span className={` ${styles.glyphicon} glyphicon-chevron-right`}/>
                Recuperar clave
              </a>
              <br/>
              <a href="https://www.alfa.srolatino-servers.com/register/recoveryID" className={styles.a}>
                <span className={` ${styles.glyphicon} glyphicon-chevron-right`}/>
                Recuperar ID
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHomeComponent;
