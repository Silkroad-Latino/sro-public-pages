import React from 'react';

import  styles from './styles.module.css'

const FooterComponent = () => {
  return (
    <>
      <footer className={styles.footerMain}>
        <div className="container">
          <div className="row">
            <div className={`footer-nav col-md-3 ${styles.colMd3}`}>
              <h4 className={styles.footerNavH4}>
                <span className={`${styles.glyphicon} glyphicon-tower`}></span>
                Silkroad Latino
              </h4>
              <ul className="list-unstyled">
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                </li>

                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/blog/news">Noticias</a>
                </li>

                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/blog/updates">
                    <font className={styles.verticalAlign}>
                      <font
                        className={styles.verticalAlign}>
                        Actualizaciones
                      </font>
                    </font>
                  </a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/blog/events">Eventos</a>
                </li>
              </ul>
            </div>
            <div className={`footer-nav col-md-3 ${styles.colMd3}`}>
              <h4 className={styles.footerNavH4}>
                <span className={`${styles.glyphicon} glyphicon-user`}></span>
                Cuenta
              </h4>

              <ul className="list-unstyled">
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/register">Crear una cuenta</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/register/recoveryPassword">Recuperar
                    clave</a>
                </li>

                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/register/recoveryID">Recuperar
                    ID</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a
                    className={styles.footerNavA}
                    href="http://wiki.srolatino-servers.com/faq/srolatino-serversrecuperacion-de-respuesta-secreta/">Recuperar
                    RS</a>
                </li>
              </ul>
            </div>

            <div className={`footer-nav col-md-3 ${styles.colMd3}`}>
              <h4 className={styles.footerNavH4}>
                <span className={`${styles.glyphicon} glyphicon-globe`}/> Comunidad</h4>
              <ul className="list-unstyled">
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://sro-latino.com/">Foro</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/download">Descargas</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/screenshots">Imagenes</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/community/rankings">
                    <font  className={styles.verticalAlign}>
                      <font  className={styles.verticalAlign}>Clasificaciones</font>
                    </font>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`footer-nav col-md-3 ${styles.colMd3}`}>
              <h4 className={styles.footerNavH4}>
                <span className={`${styles.glyphicon} glyphicon-cog`}/> Informacion</h4>
              <ul className="list-unstyled">
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/support/info">Informacion y
                  Reglas</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/support/faq">Preguntas
                  frecuentes</a>
                </li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/support/privacy">Politica de
                  privacidad</a></li>
                <li className={styles.footerNavUlLi}>
                  <a className={styles.footerNavA} href="https://www.alfa.srolatino-servers.com/support/tos">Terminos y
                  condiciones</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`row ${styles.footerText}`}>
            <div className={`col-md-8 ${styles.textLeft} no-padding-left`}>
              <p>Copyright © 2011-2021 Sro-Latino.com. Todos los derechos reservados a sus respectivos
                propietarios.<br/><strong>Silkroad Latino</strong> Es absolutamente libre de jugar.<br/>Los
                servidores se mantienen con generosas donaciones de jugadores y administradores.</p>
              <p>

                <font  className={styles.verticalAlign}>
                  <font  className={styles.verticalAlign}> / </font>

                </font>

                <a className={styles.footerNavA} target="_blank" href="https://www.facebook.com/ZitorWerdna" rel="noreferrer">

                  <font  className={styles.verticalAlign}>

                    <font  className={styles.verticalAlign}>Andrew Ortiz</font>

                  </font>

                </a>

              </p>
            </div>

            <div className="col-md-4 text-right no-padding-right">

            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;