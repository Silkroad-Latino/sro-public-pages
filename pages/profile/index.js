import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";

import styles from './styles.module.css'

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleProfile}>
          <h2>PERFIL</h2>
        </div>
        <div className={`col-md-12 ${styles.accountContent}`}>
          <div className="row">
            <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
              <li>
                <a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
              </li>
              <li className="active">Mi Cuenta</li>
            </ol>
          </div>
          <div className="col-md-12">
            <div className={styles.media}>
              <a className={styles.pullLeft} href="#">
                <img
                  className={`media-object ${styles.accountAvatar}`}
                  style={{
                    height:'40px;',
                    width:'40px;',
                  }}
                  src="https://www.alfa.srolatino-servers.com/assets/images/default-avatar.png"
                  alt="..."
                />
              </a>
              <div className={styles.mediaBody}>
                <h4 className={styles.mediaHeading}/>
                <p>Conectado como <strong>svpamdxD</strong></p>
              </div>
            </div>
          </div>

          <div className="clearfix"/>
          <ul className={`${styles.nav} ${styles.navTabs} ${styles.navTabsGrunge} ${styles.marginTop}`}>
            <li className="active">
              <a href="https://www.alfa.srolatino-servers.com/profile">Ver</a>
            </li>

            <li className="dropdown dd-grunge">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#">
                Configuraciones
                <span className="caret"/>
              </a>
              <ul className="dropdown-menu dd-menu-grunge" role="menu" aria-labelledby="dLabel">
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/changeEmail">Cambiar E-mail</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/changePassword">Cambiar Clave</a>
                </li>
              </ul>
            </li>

            <li className="dropdown dd-grunge">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#">
                Mis Personajes
                <span className="caret"/>
              </a>
              <ul className="dropdown-menu dd-menu-grunge" role="menu" aria-labelledby="dLabel">
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/resetSkills">Restablecer Habilidades 100%</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/resetSkills50">Restablecer Habilidades 50%</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/resetStats">Restablecer Puntos Del Personaje</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/removerPk">Remover Pk</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/cargarSkills">Cargar Skill Points</a>
                </li>
              </ul>
            </li>

            <li className="dropdown dd-grunge">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#">Recargas
                <span className="caret"/>
              </a>
              <ul className="dropdown-menu dd-menu-grunge" role="menu" aria-labelledby="dLabel">
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/balance">Resumen de saldo</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/charge">Cargar Saldo</a>
                </li>
                <li role="presentation" className="divider-grunge"/>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/buyEpin">Comprar E-Pin</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/reedem">Acreditar E-Pin</a>
                </li>
                <li role="presentation" className="divider-grunge"/>
              </ul>
            </li>


            <li className="">
              <a href="https://www.alfa.srolatino-servers.com/profile/referrals">Mis Referidos</a>
            </li>
            <li className={`dropdown ${styles.ddGrungeGreen} ${styles.pullRight}`}>
              <a
                className={styles.dropdownToggle}
                data-toggle="dropdown"
                href="#">
                  <small>Saldo:</small>
                0.00 USD
                <span className={styles.caret}/>
              </a>
              <ul className="dropdown-menu dd-menu-grunge" role="menu" aria-labelledby="dLabel">
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/balance">Resumen de saldo</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/charge">Cargar Saldo</a>
                </li>
                <li role="presentation" className="divider-grunge"/>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/buyEpin">Comprar E-Pin</a>
                </li>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/profile/reedem">Acreditar E-Pin</a>
                </li>
                <li role="presentation" className="divider-grunge"/>
              </ul>
            </li>

          </ul>
          <div className={`row ${styles.containerTab}`}>
            <div className="col-md-8">
              <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList} ${styles.marginTop}`}>
                <li className={styles.subSpotTitle}>
                  <h4>Personajes</h4>
                </li>
              </ul>
              <div className="row margin-top">
                <div className="col-sm-3 col-xs-6">
                  <a
                    href="https://www.alfa.srolatino-servers.com/guild/_FreesTyLer_/_HiT_HarD"
                     className="characters no-underline">
                    <h4>
                      <span className={`${styles.label} ${styles.labelGrunge} ${styles.centerBlock}`}>
                        <span className={`${styles.badge} ${styles.lv}`}>
                          Lvl. 112
                        </span>
                        _HiT_HarD
                      </span>
                    </h4>
                    <img
                      className="img-responsive"
                      src="https://www.alfa.srolatino-servers.com/assets/images/char/1912.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList} ${styles.marginTop}`}>
                <li className={styles.subSpotTitle}>
                  <h4>Cuentas</h4>
                </li>
              </ul>
              <dl className={`dl-horizontal ${styles.marginTop}`}>
                <div className={styles.formGroup}>
                  <dt>ID de usuario:</dt>
                  <dd>svpamdxD</dd>
                </div>
                <div className={styles.formGroup}>
                  <dt>Apodo</dt>
                  <dd> (Solo web) [
                    <a href="https://www.alfa.srolatino-servers.com/profile/changeNickname">Cambiar</a>
                    ]
                  </dd>
                </div>
                <div className={styles.formGroup}>
                  <dt>Clave:</dt>
                  <dd>****** [
                    <a href="https://www.alfa.srolatino-servers.com/profile/changePassword">Cambiar</a>
                    ]
                  </dd>
                </div>
                <div className={styles.formGroup}>
                  <dt>Pregunta secreta:</dt>
                  <dd>Pregunta secreta</dd>
                </div>
                <div className={styles.formGroup}>
                  <dt>Clave secreta:</dt>
                  <dd>s*****d</dd>
                </div>
                <div className={styles.formGroup}>
                  <dt>Email</dt>
                  <dd>jenad_04@hotmail.com [<a
                    href="https://www.alfa.srolatino-servers.com/profile/changeEmail">Cambiar</a>]
                  </dd>
                </div>
              </dl>

              <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList} ${styles.marginTop}`}>
                <li className="sub-spot-title">
                  <h4>Personal</h4>
                </li>
              </ul>
              <dl className={`dl-horizontal ${styles.marginTop}`}>
                <div className="form-group">
                  <dt>Nombres:</dt>
                  <dd>Dario</dd>
                </div>
                <div className="form-group">
                  <dt>Genero:</dt>
                  <dd>M</dd>
                </div>
              </dl>

            </div>
            <div className={`col-md-4 ${styles.marginTop}`}>
              <div className={styles.cornerBox}>
                <h4>Saldo:</h4>
                <ul className="list-unstyled">
                  <li>
                    <strong>USD:</strong>
                    <span className="pull-right">0.00</span>
                  </li>
                  <li>
                    <strong>Creditos:</strong>
                    <span className="pull-right">
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/credits.gif" alt=""/>
                      0
                    </span>
                  </li>

                </ul>
                <a
                  href="https://www.alfa.srolatino-servers.com/profile/charge"
                  className={`btn  btn-block  ${styles.btnGrunge} ${styles.marginTop}`}>
                  Cargar
                </a>

                <span className="hide">
                  <h4>Facebook integration:</h4>
                  <p>Click in the button below to integrate with your Facebook account</p>
                  <a href="#" className="btn btn-grunge btn-grunge-fb">Login with Facebook</a>
                  <div className={`separator-box ${styles.marginTop}`}/>
                  <span className="corner tl"/>
                  <span className="corner tr"/>
                  <span className="corner bl"/>
                  <span className="corner br"/>
		            </span>
                <br/>
              </div>
              <div className={styles.cornerBox}>
                <h4>Resellers</h4>
                <a
                  target="_blank"
                  href="http://weargamers.com/"
                  className={`btn btn-block ${styles.btnGrunge} ${styles.marginTop}`}>
                  WeArGamers (Argentina/BTC/WU)
                </a>

                <a
                  target="_blank"
                  href="http://www.easygameitems.com/ "
                  className={`btn btn-block ${styles.btnGrunge} ${styles.marginTop}`}>
                  Easy Game Items (Colombia)
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/servivenet/"
                  className={`btn btn-block ${styles.btnGrunge} ${styles.marginTop}`}>
                  Servivenet (Venezuela/Chile/Mexico)
                </a>

                <a
                  target="_blank"
                  href="http://knight-reseller.silkroadlatino.com/"
                  className={`btn btn-block ${styles.btnGrunge} ${styles.marginTop}`}>
                  Knight Rougue (Peru)
                </a>

                <span className={`${styles.corner} ${styles.tl}`}/>
                <span className={`${styles.corner} ${styles.tr}`}/>
                <span className={`${styles.corner} ${styles.bl}`}/>
                <span className={`${styles.corner} ${styles.br}`}/>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}