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
          <h2>CARGAR</h2>

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
                    <h4>Comprar E-pin (Credits) </h4>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          3 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"/>
                        <span className="text-center">
                          <p className={styles.marginTop}>
                            <img src="https://www.alfa.srolatino-servers.com/assets/images/credits.png" alt=""/>
                          </p>
                              <h4>150 Creditos</h4>
                              <h5 className="text-success">+0 Bonus</h5>
                        </span>
                        <h3 className="text-center">
                          <strong>150 Credits</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                className={`${styles.formControl} ${styles.grunge}`}
                                name="amount"
                                value="1"
                              />
                                <input
                                  type="hidden"
                                  className={`${styles.formControl} ${styles.grunge}`}
                                  name="type"
                                  value="4"
                                />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          7 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"
                      />
                      <span className="text-center">
                        <p className={styles.marginTop}>
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/credits.png" alt=""/>
                        </p>
                          <h4>300 Creditos</h4>
                          <h5 className="text-success">+100 Bonus</h5>
                      </span>
                        <h3 className="text-center"><strong>400 Credits</strong></h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                className={`${styles.formControl} ${styles.grunge}`}
                                name="amount"
                                value="1"
                              />
                                <input
                                  type="hidden"
                                  className={`${styles.formControl} ${styles.grunge}`}
                                  name="type"
                                  value="2"
                                />
                                <span className={styles.inputGroupBtn}>
                                  <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                                </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          14 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"/>
                        <span className="text-center">
                          <p className={styles.marginTop}>
                            <img src="https://www.alfa.srolatino-servers.com/assets/images/credits.png" alt=""/>
                            </p>
                            <h4>800 Creditos</h4>
                            <h5 className="text-success">+200 Bonus</h5>
                        </span>
                        <h3 className="text-center">
                          <strong>1,000 Credits</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                className={`${styles.formControl} ${styles.grunge}`}
                                name="amount"
                                value="1"
                              />
                                <input
                                  type="hidden"
                                  className={`${styles.formControl} ${styles.grunge}`}
                                  name="type"
                                  value="1"
                                />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          30 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"
                      />
                      <span className="text-center">
                        <p className={styles.marginTop}>
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/credits.png" alt=""/>
                          </p>
                          <h4>2,000 Creditos</h4>
                          <h5 className="text-success">+200 Bonus</h5>
                      </span>
                        <h3 className="text-center">
                          <strong>2,200 Credits</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                className={`${styles.formControl} ${styles.grunge}`}
                                name="amount" value="1"
                              />
                              <input
                                type="hidden"
                                className={`${styles.formControl} ${styles.grunge}`}
                                name="type"
                                value="3"
                              />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>
                </div>

                <ul id="myTab" className="nav nav-pills sub-spot-title-list margin-top">
                  <li className="sub-spot-title">
                    <h4>Comprar E-pin (Puntos Habilidad) </h4>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          4 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"
                      />
                      <span className="text-center">
                        <p className={styles.marginTop}>
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/sp.png" alt=""/>
                        </p>
                          <h4>500,000 SP</h4>
                          <h5 className="text-success">+5,000 Bonus</h5>
                      </span>
                        <h3 className="text-center">
                          <strong>505,000 SP</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                name="amount"
                                className={`${styles.formControl} ${styles.grunge}`}
                                value="1"
                              />
                                <input
                                  type="hidden"
                                  name="type"
                                  className={`${styles.formControl} ${styles.grunge}`}
                                  value="7"
                                />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          7 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"
                      />
                      <span className="text-center">
                        <p className={styles.marginTop}>
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/sp.png" alt=""/>
                        </p>
                        <h4>1,000,000 SP</h4>
                          <h5 className="text-success">+50,000 Bonus</h5>
                      </span>
                        <h3 className="text-center">
                          <strong>1,050,000 SP</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                name="amount"
                                className={`${styles.formControl} ${styles.grunge}`}
                                value="1"
                              />
                              <input
                                type="hidden"
                                name="type"
                                className={`${styles.formControl} ${styles.grunge}`}
                                value="6"
                              />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="shop-item">
                      <h4 className="text-center text-muted">
                        <strong>
                          14 USD
                        </strong>
                      </h4>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                        alt=""
                        className="img-responsive"
                      />
                      <span className="text-center">
                        <p className={styles.marginTop}>
                          <img
                            src="https://www.alfa.srolatino-servers.com/assets/images/sp.png"
                            alt=""
                          />
                          </p>
                        <h4>2,000,000 SP</h4>
                          <h5 className="text-success">+100,000 Bonus</h5>
                      </span>
                        <h3 className="text-center">
                          <strong>2,100,000 SP</strong>
                        </h3>
                        <div className="col-md-12">
                          <form method="POST">
                            <div className={`${styles.inputGroup} ${styles.inputGroupSm}`}>
                              <input
                                required=""
                                type="number"
                                min="1"
                                max="10"
                                name="amount"
                                className={`${styles.formControl} ${styles.grunge}`}
                                value="1"
                              />
                              <input
                                type="hidden"
                                name="type"
                                className={`${styles.formControl} ${styles.grunge}`}
                                value="5"
                              />
                              <span className={styles.inputGroupBtn}>
                                <button className={`btn ${styles.btnGrunge} no-width`} type="submit">Comprar</button>
                              </span>
                            </div>
                          </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`col-md-4 ${styles.marginTop}`}>
                <div className={styles.cornerBox}>
                  <h4>Tienes una E-pin ?</h4>
                  <p>Si ya tienes un E-pin de Silkroad Latino, puedes canjearlo aquí:</p>
                  <a
                    href="https://www.alfa.srolatino-servers.com/profile/reedem"
                    className={`btn ${styles.btnBlock} ${styles.btnGrunge}`}>
                    Canjear E-pin
                  </a>
                  <div className={`separator-box ${styles.marginTop}`}/>
                    <h4>Saldo</h4>
                  <ul className={styles.listUnStyled}>
                    <li>
                      <strong>USD:</strong>
                      <span className={styles.pullRight}>0.00</span>
                    </li>
                    <li>
                      <strong>Creditos:</strong>
                      <span className="pull-right">
                        <img
                          src="https://www.alfa.srolatino-servers.com/assets/images/credits.gif"
                          alt=""
                        />
                        0
                      </span>
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