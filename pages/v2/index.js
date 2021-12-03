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

                    <div className="frame" id="discordapp"
                         style={{"overflow": "hidden","margin": "5px auto",}}>
                      <iframe src="https://discordapp.com/widget?id=408379216862773248&amp;theme=dark"
                              width="100%"
                              height="200px" allowTransparency="true" frameBorder="0"/>
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
