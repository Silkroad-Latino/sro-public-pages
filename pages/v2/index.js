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
