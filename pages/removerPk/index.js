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
          <h2>REMOVE PK</h2>

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
                <ul
                  id="myTab"
                  className={`nav ${styles.navPills} ${styles.subSpotTitleList} ${styles.marginTop}`}>
                  <li className={styles.subSpotTitle}>
                    <h4>REMOVER PK</h4>
                  </li>
                </ul>

                <div className={`${styles.panel} ${styles.panelGrunge} ${styles.marginTop}`}>
                  <div className={styles.panelBody}>
                    <form method="POST" action="">
                      <table className={`${styles.table} table-referrals}`}>
                        <tbody>
                        <tr>
                          <td> Seleccionar Personaje</td>
                          <td>
                            <select required="required" name="pj">
                              <option disabled="" selected="selected" value="">Seleccionar Personaje</option>
                              <option value="_HiT_HarD">_HiT_HarD</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td/>
                          <td>
                            <br/><br/>
                            <div
                              className={`${styles.alert} ${styles.alertWarning} alert-dismissible}`}
                              role="alert">
                              <button
                                type="button"
                                className={styles.close}
                                data-dismiss="alert"
                                aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>

                              <h5 align="center" className="alert_warning">
                                <strong>NOTA:</strong>
                              </h5>
                              <br/>
                              Tienes que estar desconectado del juego, para poder realizar este proceso.
                              <br/>
                              El Remover PK del personaje tiene un costo de 35 Creditos <br/>
                              Usted tiene 0 Creditos
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
              <div className={`col-md-4 ${styles.marginTop}`}>
                <div className={styles.cornerBox}>
                  <h4>Cargar Saldo</h4>
                  <ul className={styles.listUnStyled}>
                    <li>
                      <strong>USD:</strong>
                      <span className="pull-right">0.00</span>
                    </li>

                    <li>
                      <strong>Creditos:</strong>
                      <span className="pull-right">
                        <img src="https://www.alfa.srolatino-servers.com/assets/images/credits.gif" alt=""/>
                          0 </span>
                    </li>
                  </ul>

                  <a
                    href="https://www.alfa.srolatino-servers.com/profile/charge"
                    className={`btn  ${styles.btnBlock}  ${styles.btnGrunge} ${styles.marginTop}`}>
                    Cargar
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