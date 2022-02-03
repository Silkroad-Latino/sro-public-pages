import React from "react";

import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";

import styles from './styles.module.css'

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleProfile}>
          <h2>REFERIDOS</h2>

          <div className="col-md-12 account-content">
            <div className="row">
              <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                <li>
                  <a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                </li>
                <li className={styles.active}>Mi Cuenta</li>
              </ol>
            </div>
            <div className="col-md-12">
              <div className={styles.media}>
                <a className={styles.pullLeft}
                   href="#">
                  <img
                    className="media-object account-avatar"
                    style={{
                      height:'40px;',
                      width:'40px;',
                    }}
                    src="https://www.alfa.srolatino-servers.com/assets/images/default-avatar.png"
                    alt="..."
                  />
                </a>
                <div className="media-body">
                  <h4 className="media-heading"/>
                  <p>Conectado como <strong>svpamdxD</strong></p>
                </div>
              </div>
            </div>

            <div className="clearfix"/>
            <ul className={`nav ${styles.navTabs} ${styles.navTabsGrunge} ${styles.marginTop}`}>
              <li className="active">
                <a href="https://www.alfa.srolatino-servers.com/profile">Ver</a>
              </li>
              <li className="dropdown dd-grunge">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#">
                  Configuraciones
                  <span className={styles.caret}/>
                </a>
                <ul
                  className="dropdown-menu dd-menu-grunge"
                  role="menu"
                  aria-labelledby="dLabel">
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

                <ul
                  className="dropdown-menu dd-menu-grunge"
                  role="menu"
                  aria-labelledby="dLabel">
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/resetSkills">
                      Restablecer Habilidades 100%
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/resetSkills50">
                      Restablecer Habilidades 50%
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/resetStats">
                      Restablecer Puntos Del Personaje
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/removerPk">
                      Remover Pk
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/cargarSkills">
                      Cargar Skill Points
                    </a>
                  </li>

                </ul>
              </li>


              <li className="dropdown dd-grunge">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#">
                  Recargas
                  <span className="caret"/>
                </a>
                <ul
                  className="dropdown-menu dd-menu-grunge"
                  role="menu"
                  aria-labelledby="dLabel">

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/balance">
                      Resumen de saldo
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/charge">
                      Cargar Saldo
                    </a>
                  </li>

                  <li
                    role="presentation"
                    className="divider-grunge"
                  />
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/buyEpin">
                      Comprar E-Pin
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/reedem">
                      Acreditar E-Pin
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="divider-grunge"
                  />
                </ul>
              </li>

              <li className="">
                <a
                  href="https://www.alfa.srolatino-servers.com/profile/referrals">
                  Mis Referidos
                </a>
              </li>
              <li className={`dropdown ${styles.ddGrungeGreen} ${styles.pullRight}`}>
                <a
                  className={styles.dropdownToggle}
                  data-toggle="dropdown"
                  href="#">
                  <small>Saldo:</small> 0.00 USD
                  <span className={styles.caret}/>
                </a>
                <ul
                  className={`${styles.dropdownMenu} ${styles.ddMenuGrunge}`}
                  role="menu"
                  aria-labelledby="dLabel">
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/balance">
                      Resumen de saldo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/charge">
                      Cargar Saldo
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={styles.dividerGrunge}/>
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/buyEpin">
                      Comprar E-Pin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.alfa.srolatino-servers.com/profile/reedem">
                      Acreditar E-Pin
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={styles.dividerGrunge}/>
                </ul>
              </li>
            </ul>

              <div className={`row ${styles.containerTab}`}>
                <div className="col-md-8">
                  <ul id="myTab" className={`nav ${styles.navPills} ${styles.subSpotTitleList} ${styles.marginTop}`}>
                    <li className={styles.subSpotTitle}>
                      <h4>Mis Referidos</h4>
                    </li>
                  </ul>
                  <div className={`${styles.panel} ${styles.panelGrunge} ${styles.marginTop}`}>
                    <div className={styles.panelBody}>
                      <p>
                        Tu link de referidos: <br/>
                        <br/>
                        <kbd>https://www.alfa.srolatino-servers.com/register?r=NDI3ODIy</kbd>
                        <br/>
                        <br/>
                        <strong>Tu ganas un 2% Por cada cargo</strong>
                      </p>
                    </div>
                  </div>

                  <ul id="myTab" className={`nav ${styles.navPills}  ${styles.marginTop}`}>
                    <li className={styles.subSpotTitle}>
                      <h4>Ultimas referencias</h4>
                    </li>
                  </ul>
                  <br/>
                    <table className="table table-referrals table-condensed">
                      <colgroup>
                        <col width="99"/>
                          <col width="*"/>
                            <col width="262"/>
                      </colgroup>
                      <thead>
                        <tr>
                          <th>
                            <div>#</div>
                          </th>
                          <th>
                            <div>Referido</div>
                          </th>
                          <th>
                            <div>Fecha de registro</div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <strong>Total de referidos: 0</strong>
                </div>
                <div className={`col-md-4 ${styles.marginTop}`}>
                  <div className={styles.cornerBox}>
                    <h4>Compartir en Facebook:</h4>
                    <p>Click in the button below to share yout referral link in Facebook</p>
                    <a target="_blank"
                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.alfa.srolatino-servers.com%2Fregister%3Fr%3DNDI3ODIy"
                       className={`btn ${styles.btnGrunge} btn-grunge-fb`}>
                      Compartir en Facebook
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
      </div>
      <FooterComponent/>
    </div>
  )
}