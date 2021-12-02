import styles from './styles.module.css'
import NavbarComponent from "../../components/navbar";
import FooterComponent from "../../components/footer";
import LoginComponent from "../../components/login";
import SliderComponent from "../../components/slider";
import DonationComponent from "../../components/donation";
import HourComponent from "../../components/hour";

export default function V2() {
    return (
        <>
            <NavbarComponent/>

            <div className="container" >
              <SliderComponent/>
              <LoginComponent/>
                <div className="row">
                  <div className="col-md-12 sub-spot">
                    <div className="col-md-4 col-lg-3 no-padding-all">
                      <div className="rank-tabs">
                        <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                          <li className="sub-spot-title">
                            <h4>
                              <font style={{
                                " verticalAlign": "inherit",
                              }}>
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>Rankings </font>
                              </font>
                              <a href="https://www.alfa.srolatino-servers.com/community/rankings">
                                <small>
                                  <span className="glyphicon glyphicon-new-window"></span>
                                </small>
                              </a>
                            </h4>
                          </li>
                          <ul className="nav nav-tabs nav-tabs-grunge pull-right">
                            <li className="active">
                              <a href="#rank1" data-toggle="tab">Jugadores</a>
                            </li>
                            <li>
                              <a href="#rank2" data-toggle="tab">Clanes</a>
                            </li>
                          </ul>
                        </ul>

                        <div id="myTabContent" className="tab-content">
                          <div className="tab-pane active" id="rank1">
                            <ul className="mini-rank list-group">
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Puntos de artículos: 63926">
                                  <span className="badge-rank rank-1">1</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 135</font>
                                </font>
                              </span>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/HellWalker/_TheZeger__">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>_TheZeger__</font>
                                    </font>
                                  </a>

                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>-</font>
                                  </font>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/HellWalker">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>Caminante del infierno</font>
                                    </font>
                                  </a>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Puntos de artículos: 63923">
                                  <span className="badge-rank rank-2">2</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 135</font>
                                </font>
                              </span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild/Gus7Diaz">Gus7Diaz</a>
                                  -
                                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">InsertGuild</a>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Puntos de artículos: 63921">
                                  <span className="badge-rank rank-3">3</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 135</font>
                                </font>
                              </span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild/xMickey">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>xMickey</font>
                                    </font>
                                  </a>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}> - </font>
                                  </font>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>InsertGuild</font>
                                    </font>
                                  </a>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Puntos de artículos: 63919">
                                  <span className="badge-rank rank-4">4</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 135</font>
                                </font>
                              </span>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life/Infiiniity">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>Infiniidad</font>
                                    </font>
                                  </a>

                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}> - </font>
                                  </font>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>Thiefs4Life</font>
                                    </font>
                                  </a>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Puntos de artículos: 63919">
                                  <span className="badge-rank rank-5">5</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 135</font>
                                </font></span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN/_P1TUF1NA_">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>_P1TUF1NA_</font>
                                    </font>
                                  </a>

                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}> - </font>
                                  </font>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>AnGeLs_DeMoN</font>
                                    </font>
                                  </a>
                                </p>
                              </li>
                            </ul>
                          </div>

                          <div className="tab-pane" id="rank2">
                            <ul className="mini-rank list-group">
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Total Points: 1,861,572">
                                  <span className="badge-rank rank-1">1</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 5</font>
                                </font>
                              </span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>AnGeLs_DeMoN</font>
                                    </font>
                                  </a>

                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}> (798,252,815)</font>
                                  </font>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Total Points: 1,721,249">
                                  <span className="badge-rank rank-2">2</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 5</font>
                                </font>
                              </span>

                                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>InsertGuild</font>
                                    </font>
                                  </a>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}> (5.214.658)</font>
                                  </font>
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Total Points: 1,541,862">
                                  <span className="badge-rank rank-3">3</span>
                                  <span className="badge lv">
                                <font style={{
                                  " verticalAlign": "inherit",
                                }}>
                                  <font style={{
                                    " verticalAlign": "inherit",
                                  }}>Nivel 5</font>
                                </font>
                              </span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life">Thiefs4Life</a>
                                  (151,260,947)
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Total Points: 1,497,106">
                                  <span className="badge-rank rank-4">4</span>
                                  <span className="badge lv">Lv 5</span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/WrathOfGods">WrathOfGods</a>
                                  (793,424,909)
                                </p>
                              </li>
                              <li className="list-group-item">
                                <p className="list-group-item-heading"
                                   title="Total Points: 1,375,168">
                                  <span className="badge-rank rank-5">5</span>
                                  <span className="badge lv">Lv 5</span>
                                  <a href="https://www.alfa.srolatino-servers.com/guild/LatinNarcos">LatinNarcos</a>
                                  (811,049,773)
                                </p>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 col-lg-6">
                      <form method="POST" action="https://www.alfa.srolatino-servers.com/search">
                        <div className="input-group">
                                          <span className="input-group-btn">
                                            <select rquired="" className="btn grunge" name="by">
                                              <option value="player">Jugador</option>
                                              <option value="guild">Clan</option>
                                            </select>
                                          </span>
                          <input pattern=".{3,}" required="" title="Minimo 3 letras" type="text" name="s"
                                 className="form-control grunge search"
                                 placeholder="Buscar un jugador o clan"/>
                          <span className="input-group-btn">
                                                <button className="btn btn-grunge" type="submit">
                                                  <span className="glyphicon glyphicon-search"></span>
                                                </button>
                                            </span>
                        </div>
                      </form>

                      <div className="server-status">
                        <div className="col-md-3 estatus text-success">Alfa</div>
                        <div className="col-md-9">
                          <div className="progress grunge">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="43.875"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{
                                "width": "43.875%",
                              }}>
                              1755/4000
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <HourComponent/>


                    <div className="col-md-5 col-lg-6">
                      <div className="subspot-items corner-box">
                        <span className="corner tl"></span>
                        <span className="corner tr"></span>
                        <span className="corner bl"></span>
                        <span className="corner br"></span>
                        <div className="row">
                          <div className="col-xs-12 item-group">
                            <h5 className="text-left">
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
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 22:00:00 - [Arena Notice]: Se repartieron
                                        0
                                        arenas extras. Usuario con mas kills:
                                        itsNegar</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:58:08 - [_Beyon_] mato el unique [Tiger
                                        Girl]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:47:31 - [Xouka] mato el unique
                                        [Baal]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:46:26 - [NatSu_Vzl] cambio la
                                        apariencia de
                                        su arma [Tiger Sword] a Egypt Clase B!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:45:08 - [Windrainer10] mato el unique
                                        [Khulood]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:43:52 - [GhisLaine_] mato el unique
                                        [Haroeris]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:26:29 - [ZOOM_WIN] mato el unique
                                        [Captain
                                        Ivy]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:10:50 - [Irisariana] mato el unique
                                        [Kidemonas]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                      }}>25-11-2021 21:10:33 - [Froresita17] mato el unique
                                        [Cerberus]!</font>
                                    </font>
                                  </a>
                                </li>

                                <li>
                                  <a href="#">
                                    <font style={{
                                      " verticalAlign": "inherit",
                                    }}>
                                      <font style={{
                                        " verticalAlign": "inherit",
                                        // eslint-disable-next-line react/no-unescaped-entities
                                      }}>25-11-2021 21:09:26 - El jugador itsSantiago (con 20
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

                    <DonationComponent/>
                  </div>
            </div>
            </div>

          <FooterComponent />

            <div className="goog-te-spinner-pos">
                <div className="goog-te-spinner-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" className="goog-te-spinner" width="96px" height="96px"
                         viewBox="0 0 66 66">
                        <circle className="goog-te-spinner-path" fill="none" strokeWidth="6" strokeLinecap="round"
                                cx="33"
                                cy="33" r="30"></circle>
                    </svg>
                </div>
            </div>
        </>
    )
}
