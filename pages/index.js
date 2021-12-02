import styles from './Home/styles.module.css'

export default function Home() {
    return (
        <>
            <header className="main">
                <div className="topbar">
                    <div className="container">
                        <div className="pull-right lang">
                            <a href="?lang=en" className="en ">
                                <font style={{
                                    " verticalAlign": "inherit",
                                }}/>
                            </a>

                            <font style={{
                                " verticalAlign": "inherit",
                            }}>
                                <a href="?lang=es" className="es selected">
                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}>Español </font>
                                </a>

                                <a href="?lang=en" className="en ">
                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}>inglés</font>
                                </a></font>

                            <a href="?lang=es" className="es selected">
                                <font style={{
                                    " verticalAlign": "inherit",
                                }}/>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-default navbar-main" role="navigation">
                        <div className="container">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">
                                <font style={{
                                    " verticalAlign": "inherit",
                                }}>
                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}>Navegación de palanca</font>
                                </font>
                            </span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <div className="logo-container">
                                    <a className="navbar-brand logo" href="https://www.alfa.srolatino-servers.com/"/>
                                </div>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <a href="https://www.alfa.srolatino-servers.com/blog">Noticias</a>
                                    </li>
                                    <li>
                                        <a href="https://www.alfa.srolatino-servers.com/register">Registro</a>
                                    </li>
                                    <li>
                                        <a href="https://www.alfa.srolatino-servers.com/community">Comunidad</a>
                                    </li>
                                    <li>
                                        <a href="https://www.alfa.srolatino-servers.com/download">Descargas</a>
                                    </li>
                                    <li>
                                        <a href="https://sro-latino.com/">Foro</a>
                                    </li>
                                    <li>
                                        <a href="http://wiki.srolatino-servers.com/">
                                            <font
                                                style={{
                                                    " verticalAlign": "inherit",
                                                }}

                                            >
                                                <font style={{
                                                    " verticalAlign": "inherit",
                                                }}>Wiki</font>
                                            </font>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="container page-container">
                <div id="fb-root" className=" fb_reset">
                    <div
                        style={{
                            "position": "absolute",
                            "top": "-10000px",
                            "width": "0px",
                            "height": "0px",
                        }}>
                        <div></div>
                    </div>
                </div>


                <div className="container">
                    <div className="row"
                         style={{
                             "marginTop": "-40px"
                         }}>
                        <div className="col-md-9 home-slider">
                            <div className="bx-wrapper"
                                 style={{
                                     "maxWidth": "100%",
                                     "margin": "0px auto",
                                 }}>
                                <div className="bx-viewport"
                                     style={{
                                         "width": "100%",
                                         "overflow": "hidden",
                                         "position": "relative",
                                         "height": "320px",
                                     }}>
                                    <div className="bxslider"
                                         style={{
                                             "width": "auto",
                                             "position": "relative",
                                         }}>
                                        <div

                                            style={{
                                                "float": "none",
                                                "listStyle": "none",
                                                "position": "absolute",
                                                "display": "none",
                                                "width": "848px",
                                                "zIndex": "0",
                                            }}>
                                            <a href="https://www.alfa.srolatino-servers.com/download">
                                                <img className="" data-src="/assets/images/slide-1-min.png"
                                                     src="/assets/img/slide-1-min.png"/>
                                            </a>
                                        </div>

                                        <div style={{
                                            "float": "none",
                                            "listStyle": "none",
                                            "position": "absolute",
                                            "display": "none",
                                            "width": "848px",
                                            "zIndex": "0",
                                        }}>
                                            <a href="https://www.alfa.srolatino-servers.com/download">
                                                <img className="" data-src="/assets/images/slide-2-min.png"
                                                     src="/assets/img/slide-2-min.png"/>
                                            </a>
                                        </div>

                                        <div style={{
                                            "float": "none",
                                            "listStyle": "none",
                                            "position": "absolute",
                                            "display": "none",
                                            "width": "848px",
                                            "zIndex": "0",
                                        }}>
                                            <a href="https://www.alfa.srolatino-servers.com/download">
                                                <img className="" data-src="/assets/images/slide-3-min.png"
                                                     src="/assets/img/slide-3-min.png"/>
                                            </a>
                                        </div>

                                        <div style={{
                                            "float": "none",
                                            "listStyle": "none",
                                            "position": "absolute",
                                            "display": "none",
                                            "width": "848px",
                                            "zIndex": "0",
                                        }}>
                                            <a href="https://www.alfa.srolatino-servers.com/download">
                                                <img className="" data-src="/assets/images/slide-4-min.png"
                                                     src="/assets/img/slide-4-min.png"/>
                                            </a>
                                        </div>
                                        <div
                                            style={{
                                                "float": "none",
                                                "listStyle": "none",
                                                "position": "absolute",
                                                "display": "block",
                                                "width": "848px",
                                                "zIndex": "50",
                                            }}>
                                            <a href="https://www.alfa.srolatino-servers.com/register">
                                                <img className="" data-src="/assets/images/slide-5-min.png"
                                                     src="/assets/img/slide-5-min.png"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bx-controls bx-has-controls-direction">
                                    <div className="bx-controls-direction">
                                        <a className="bx-prev" href="">
                                            <font style={{
                                                " verticalAlign": "inherit",
                                            }}>
                                                <font style={{
                                                    " verticalAlign": "inherit",
                                                }}>Anterior</font>
                                            </font>
                                        </a>
                                        <a className="bx-next" href="">
                                            <font style={{
                                                " verticalAlign": "inherit",
                                            }}>
                                                <font style={{
                                                    " verticalAlign": "inherit",
                                                }}>próximo</font>
                                            </font>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 spot-right">
                            <a href="https://www.alfa.srolatino-servers.com/download" className="download-button">
                                <span className="glyphicon glyphicon-cloud-download"></span>
                                <span className="hidden-md">descarga gratis</span>
                            </a>

                            <div className="login-cont col-md-12 frame">
                                <div className="frame-inner">
                                    <div role="form" id="loginForm">
                                        <div className="form-group narrow">
                                            <input type="username" className="form-control grunge" id="username"
                                                   placeholder="IDENTIFICACIÓN"/>
                                            <span className="endbtn"></span>
                                        </div>
                                        <div className="form-group narrow">
                                            <input type="password" className="form-control grunge" id="password"
                                                   placeholder="Contraseña"/>
                                        </div>
                                        <button type="button" className="btn btn-block btn-grunge">Iniciar Sesion
                                        </button>
                                    </div>

                                    <h5 className="login-reg-link">
                                        <a href="https://www.alfa.srolatino-servers.com/register">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                            Crear Una Cuenta!
                                        </a>
                                        <br/>
                                        <a href="https://www.alfa.srolatino-servers.com/register/recoveryPassword">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                            Recuperar clave
                                        </a>
                                        <br/>
                                        <a href="https://www.alfa.srolatino-servers.com/register/recoveryID">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                            Recuperar ID
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

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

                            <div className="col-md-3 no-padding-all time">
                                <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                                    <li className="sub-spot-title">
                                        <h4>TIEMPO DEL SERVIDOR</h4>
                                    </li>
                                </ul>

                                <p id="servertime">
                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}>
                                        <font style={{
                                            " verticalAlign": "inherit",
                                        }}>21:28:41 (UTC-5)</font>
                                    </font>
                                </p>
                            </div>


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

                            <div className="col-md-3 no-padding-all">
                                <div className="subspot-link-bg">
                                    <a
                                        href="https://www.alfa.srolatino-servers.com/profile/charge"
                                        className="subspot-link-image donate-link"
                                        data-bg="url(/assets/img/donate-link.png)"
                                        style={{
                                            "backgroundImage": "url(/assets/img/donate-link.png;)",
                                        }}>
                                        Dona!
                                        <br/>
                                        <small>Obtene Creditos! </small>
                                        <br/>
                                        <small>Y Disfruta!</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 no-padding-left">
                        <div className="list-group lg-grunge">
                            <a href="https://www.alfa.srolatino-servers.com/blog/news"
                               className="list-group-item">Noticias</a>
                            <a href="https://www.alfa.srolatino-servers.com/blog/updates"
                               className="list-group-item">Actualizaciones</a>
                            <a href="https://www.alfa.srolatino-servers.com/blog/events"
                               className="list-group-item">Eventos</a>
                        </div>

                        <div className="sidebar-imgbox fortress-war gms-online">
                            <p><strong>GMs</strong> En Linea</p>
                            <div className="fortress">
                                <p>
								<span className="green-circle"

                                      style={{
                                          "backgroundColor": "#A7A7A7"
                                      }}></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] xMileZ</font>
									</font>
								</span>
                                </p>

                                <p>
								<span className="green-circle" style={{
                                    "backgroundColor": "#A7A7A7"
                                }}></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] Grito</font>
									</font>
								</span>
                                </p>

                                <p>
                                    <span className="green-circle"></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] Rubia</font>
									</font>
								</span>
                                </p>

                                <p>
                                    <span className="green-circle"></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] No</font>
									</font>
								</span>
                                </p>

                                <p>
								<span className="green-circle" style={{
                                    "backgroundColor": "#A7A7A7"
                                }}></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] Celes</font>
									</font>
								</span>
                                </p>

                                <p>
                                    <span className="green-circle"></span>
                                    <span className="gms-name">
									<font style={{
                                        " verticalAlign": "inherit",
                                    }}>
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>[GM] Keila</font>
									</font>
								</span>
                                </p>
                            </div>
                        </div>


                        <div className="frame" id="discordapp"
                             style={{
                                 "overflow": "hidden",
                                 "margin": "5px auto",
                             }}>
                            <iframe src="https://discordapp.com/widget?id=408379216862773248&amp;theme=dark"
                                    width="100%"
                                    height="200px" allowTransparency="true" frameBorder="0"/>
                        </div>
                    </div>

                    <div className="col-md-7 no-padding-left">
                        <div className="list-group news">
                            <div className="col-md-10 col-md-offset-2 no-padding-all">

                                <a href="https://www.alfa.srolatino-servers.com/blog/updates/06012021-INSPECCION-COMPLETADA-96"
                                   className="list-group-item">
                                    <div
                                        className="col-md-12 image"
                                        data-bg="url(/assets/img/2.png)"
                                        style={{
                                            "backgroundImage": "url(/assets/img/2.png"
                                        }}></div>
                                    <h3 className="list-group-item-heading">[06/01/2021] INSPECCION COMPLETADA</h3>
                                    <p className="list-group-item-text text-left">
                                        Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                                        estabilidad en nuestros servidores realizamos la siguiente inspección.
                                        [Actualizaciones] - [EVENTO] El evento de navidad ha finalizado.- [IM] Los
                                        descuentos por navidad...
                                    </p>
                                    <div className="col-md-2 news-meta">
                                        <span className="publish-date">2021-01-06</span>
                                        <span className="publish-tag pull-right badge lv">Actualizaciones</span>
                                    </div>
                                </a>

                                <a href="https://www.alfa.srolatino-servers.com/blog/updates/11122020-INSPECCION-COMPLETADA-95"
                                   className="list-group-item">
                                    <div
                                        className="col-md-12 image"
                                        data-bg="url(/assets/img/navidad2020.png)"
                                        style={{
                                            "backgroundImage": "url(/assets/img/navidad2020.png"
                                        }}></div>
                                    <h3 className="list-group-item-heading">[11/12/2020] INSPECCION COMPLETADA</h3>
                                    <p className="list-group-item-text text-left">
                                        Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                                        estabilidad en nuestros servidores realizamos la siguiente inspección.
                                        [Actualizaciones] - [EVENTO] Evento Navidad: White Knight, Princess Miyene y
                                        Snow
                                        Flakes invaden ...
                                    </p>
                                    <div className="col-md-2 news-meta">
                                        <span className="publish-date">2020-12-11</span>
                                        <span className="publish-tag pull-right badge lv">
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>
											<font style={{
                                                " verticalAlign": "inherit",
                                            }}>Actualizaciones</font>
										</font>
									</span>
                                    </div>
                                </a>

                                <a href="https://www.alfa.srolatino-servers.com/blog/updates/241120-INSPECCION-COMPLETADA-94"
                                   className="list-group-item">
                                    <div
                                        className="col-md-12 image"
                                        data-bg="url(/assets/img/7.jpg)"
                                        style={{
                                            "backgroundImage": "url(/assets/img/7.jpg"
                                        }}></div>
                                    <h3 className="list-group-item-heading">[24/11/20] INSPECCION COMPLETADA</h3>
                                    <p className="list-group-item-text text-left">
                                        Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                                        estabilidad en nuestros servidores realizamos la siguiente inspección.
                                        [Actualizaciones] - [IM] Nuevo avatar: Black Fantasy Knight- [IM] Los descuentos
                                        de
                                        aniversario f...
                                    </p>
                                    <div className="col-md-2 news-meta">
                                        <span className="publish-date">2020-11-24</span>
                                        <span className="publish-tag pull-right badge lv">
										<font style={{
                                            " verticalAlign": "inherit",
                                        }}>
											<font style={{
                                                " verticalAlign": "inherit",
                                            }}>Actualizaciones</font>
										</font>
									</span>
                                    </div>
                                </a>

                                <a href="https://www.alfa.srolatino-servers.com/blog/updates/021120-INSPECCION-COMPLETADA-93"
                                   className="list-group-item">
                                    <div
                                        className="col-md-12 image" d
                                        ata-bg="url(/assets/img/1.jpg)"
                                        style={{
                                            "backgroundImage": "url(/assets/img/1.jpg"
                                        }}></div>
                                    <h3 className="list-group-item-heading">[02/11/20] INSPECCION COMPLETADA</h3>
                                    <p className="list-group-item-text text-left">
                                        Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                                        estabilidad en nuestros servidores realizamos la siguiente inspección.
                                        [Actualizaciones] - [EVENTO] Se soluciono problema de equipamiento de modo pvp
                                        al
                                        ingresar al eve...
                                    </p>
                                    <div className="col-md-2 news-meta">
                                        <span className="publish-date">2020-11-02</span>
                                        <span className="publish-tag pull-right badge lv">Actualizaciones</span>
                                    </div>
                                </a>
                            </div>

                            <div className="clearfix"></div>
                        </div>

                        <div className="col-md-12 no-padding-all">
                            <a href="https://www.alfa.srolatino-servers.com/blog"
                               className="btn btn-block btn-grunge-simple" role="button">Mas</a>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12 no-padding-all">
                                <div className="sidebar-imgbox fortress-war">
                                    <p>Fortress War<br/> Miercoles / Domingo 17:30</p>
                                    <div className="fortress">
                                        <p>
                                            <span className="icon-fortress hotan">B</span> <span
                                            className="fortress-name">Hotan:</span>
                                            <span className="pull-right"><a
                                                href="https://www.alfa.srolatino-servers.com/guild/UnitedBrooS">UnitedBrooS</a> (10%)</span>
                                        </p>
                                        <p>
                                            <span className="icon-fortress bandit">H</span> <span
                                            className="fortress-name">Bandit:</span>
                                            <span className="pull-right"><a
                                                href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">AnGeLs_DeMoN</a> (10%)</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="event-times">
                                    <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                                        <li className="sub-spot-title">
                                            <h4>Siguiente evento</h4>
                                        </li>
                                    </ul>
                                    <ul className="times list-unstyled" id="next-events">
                                        <li className="live">
                                            <span className="badge">En vivo</span>
                                            <span className="circle"/>
                                            <span className="name">Evento Medusa</span>
                                        </li>

                                        <li className="live">
											<span className="badge">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>En vivo</font>
												</font>
											</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Arena de batalla</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">00:01</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Job War / Templo de Job</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">00:02</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Seth / Engendro de Haroeris</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">00:32</span>
                                            <span className="circle"></span>
                                            <span className="name">Guerra PvP</span>
                                        </li>

                                        <li>
                                            <span className="badge">01:02</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>BA 115/125</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">01:33</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Captura la bandera</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">02:32</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>CTF 115/125</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">03:34</span>
                                            <span className="circle"></span>
                                            <span className="name">Evento Unique Low</span>
                                        </li>

                                        <li>
                                            <span className="badge">05:38</span>
                                            <span className="circle"></span>
                                            <span className="name">Evento Roc</span>
                                        </li>

                                        <li>
                                            <span className="badge">11:02</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Engendro de Isis / Anubis</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">17:02</span>
                                            <span className="circle"></span>
                                            <span className="name">
												<font style={{
                                                    " verticalAlign": "inherit",
                                                }}>
													<font style={{
                                                        " verticalAlign": "inherit",
                                                    }}>Engendro de Neith / Selket</font>
												</font>
											</span>
                                        </li>

                                        <li>
                                            <span className="badge">73:02</span>
                                            <span className="circle"></span>
                                            <span className="name">Loteria Semanal Advanced</span>
                                        </li>

                                        <li>
                                            <span className="badge">73:32</span>
                                            <span className="circle"></span>
                                            <span className="name">Loteria</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="screenshots-home">
                                <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                                    <li className="sub-spot-title">
                                        <h4>IMAGEN DE LA SEMANA</h4>
                                    </li>
                                </ul>

                                <div
                                    className="sidebar-imgbox screenshots"
                                    style={{
                                        "backgroundImage": "url(https://www.alfa.srolatino-servers.com//uploads/pictures/2021/46/9e1104218cbc80b06a325f882f4c93913514e6ad.jpg)",
                                    }}>
                                    <a href="https://www.alfa.srolatino-servers.com//pictures/pic/2021/46"
                                       className="link"></a>
                                    <br/>
                                    <div className="links">
									<span className="pull-left">
										<a href="https://www.alfa.srolatino-servers.com/pictures/upload">
											<span className="glyphicon glyphicon-cloud-upload"></span>Enviar Imagen
										</a>
									</span>

                                        <span className="pull-right">
										<a href="https://www.alfa.srolatino-servers.com/pictures">
											Todas Las Imagenes
											<span className="glyphicon glyphicon-arrow-right"></span>
										</a>
									</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="main">
                <div className="container">
                    <div className="row">
                        <div className="footer-nav col-md-3">
                            <h4><span className="glyphicon glyphicon-tower"></span> Silkroad Latino</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.alfa.srolatino-servers.com/">Inicio</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/blog/news">Noticias</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/blog/updates"><font style={{
                                    " verticalAlign": "inherit",
                                }}><font style={{
                                    " verticalAlign": "inherit",
                                }}>Actualizaciones</font></font></a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/blog/events">Eventos</a></li>
                            </ul>
                        </div>
                        <div className="footer-nav col-md-3">
                            <h4><span className="glyphicon glyphicon-user"></span> Cuenta</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.alfa.srolatino-servers.com/register">Crear una cuenta</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/register/recoveryPassword">Recuperar
                                    clave</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/register/recoveryID">Recuperar
                                    ID</a>
                                </li>
                                <li><a
                                    href="http://wiki.srolatino-servers.com/faq/srolatino-serversrecuperacion-de-respuesta-secreta/">Recuperar
                                    RS</a></li>
                            </ul>
                        </div>

                        <div className="footer-nav col-md-3">
                            <h4><span className="glyphicon glyphicon-globe"/> Comunidad</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://sro-latino.com/">Foro</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/download">Descargas</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/screenshots">Imagenes</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/community/rankings"><font style={{
                                    " verticalAlign": "inherit",
                                }}><font style={{
                                    " verticalAlign": "inherit",
                                }}>Clasificaciones</font></font></a></li>
                            </ul>
                        </div>
                        <div className="footer-nav col-md-3">
                            <h4><span className="glyphicon glyphicon-cog"/> Informacion</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.alfa.srolatino-servers.com/support/info">Informacion y
                                    Reglas</a>
                                </li>
                                <li><a href="https://www.alfa.srolatino-servers.com/support/faq">Preguntas
                                    frecuentes</a>
                                </li>
                                <li><a href="https://www.alfa.srolatino-servers.com/support/privacy">Politica de
                                    privacidad</a></li>
                                <li><a href="https://www.alfa.srolatino-servers.com/support/tos">Terminos y
                                    condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-text">
                        <div className="col-md-8 text-left no-padding-left">
                            <p>Copyright © 2011-2021 Sro-Latino.com. Todos los derechos reservados a sus respectivos
                                propietarios.<br/><strong>Silkroad Latino</strong> Es absolutamente libre de jugar.<br/>Los
                                servidores se mantienen con generosas donaciones de jugadores y administradores.</p>
                            <p>

                                <font style={{
                                    " verticalAlign": "inherit",
                                }}>
                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}> / </font>

                                </font>

                                <a target="_blank" href="https://www.facebook.com/ZitorWerdna" rel="noreferrer">

                                    <font style={{
                                        " verticalAlign": "inherit",
                                    }}>

                                        <font style={{
                                            " verticalAlign": "inherit",
                                        }}>Andrew Ortiz</font>

                                    </font>

                                </a>

                            </p>
                        </div>

                        <div className="col-md-4 text-right no-padding-right">

                        </div>

                    </div>
                </div>
            </footer>

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
