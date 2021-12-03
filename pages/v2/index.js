import styles from './styles.module.css'
import NavbarComponent from "../../components/navbar";
import FooterComponent from "../../components/footer";
import LoginComponent from "../../components/login";
import SliderComponent from "../../components/slider";
import DonationComponent from "../../components/donation";
import HourComponent from "../../components/hour";
import SeekerComponent from "../../components/seeker";
import StatusComponent from "../../components/status";
import RankingComponent from "../../components/ranking";
import LogActivities from "../../components/log";
import ListGroup from "../../components/list_group";
import GmsComponent from "../../components/gms";
import DiscordComponent from "../../components/discord";
import NewsComponent from "../../components/news";
import React from "react";
import FortressComponent from "../../components/fortress";

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

                        <RankingComponent/>

                      </div>

                      <div className="col-md-5 col-lg-6">

                        <SeekerComponent/>

                        <StatusComponent/>

                      </div>

                      <HourComponent/>

                      <LogActivities/>

                      <DonationComponent/>

                    </div>
                  </div>

                <div className="col-md-2 no-padding-left">
                  <ListGroup/>
                  <GmsComponent/>
                  <DiscordComponent/>
                </div>
                <div className="col-md-7 no-padding-left">
                  <div className="list-group news">
                    <NewsComponent/>
                  </div>
                  <div className="col-md-12 no-padding-all">
                    <a href="https://www.alfa.srolatino-servers.com/blog"
                       className="btn btn-block btn-grunge-simple" role="button">Mas</a>
                  </div>
                </div>
                <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12 no-padding-all">
                   <FortressComponent/>
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
