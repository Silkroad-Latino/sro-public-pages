import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";

import styles from './styles.module.css'
import ListNewsComponent from "../../components/list_news";
import SeekerComponent from "../../components/seeker";
import RankingComponent from "../../components/ranking";
import * as srlApiClient from "../../config/axios";
import {getUniqueKillRankings} from "../../config/axios";

export async function getServerSideProps() {

  const news = await srlApiClient.getNews(5)
    .catch((error) => {
      console.log("news error: ", error);
      return [];
    });

  const playerRankings = await srlApiClient.getPlayerRankings(5)
    .catch((error) => {
      console.log("playerRankings error: ", error);
      return [];
    });

  const guildRankings = await srlApiClient.getGuildRankings(5)
    .catch((error) => {
      console.log("getGuildRankings error: ", error);
      return [];
    });

  const uniqueKillRankings = await srlApiClient.getUniqueKillRankings(5)
    .catch((error) => {
      console.log("getUniqueKillRankings error: ", error);
      return [];
    });



  return {
    props: {
      news,
      playerRankings,
      guildRankings,
      uniqueKillRankings
    },
  }
}

 function CommunityPage ({
                           news,
                           playerRankings,
                           guildRankings,
                           uniqueKillRankings
                         }){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleCommunity}>
          <h2>COMUNIDAD</h2>
        </div>
        <div className={`container ${styles.newsCommunity}`}>
          <div className="col-md-9">
            <div className={`col-md-12 ${styles.normalContent}`}>
              <div className="row">
                <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                  <li><
                    a href="https://www.alfa.srolatino-servers.com/">Inicio</a>
                  </li>
                  <li className="active">Comunidad</li>
                </ol>
              </div>
              <div className="page-img">
                <img
                  src="https://www.alfa.srolatino-servers.com/assets/images/community.jpg"
                     className="img-responsive"/>
              </div>
              <h3 className={styles.pageSubtitle}>
                <span className="glyphicon glyphicon-chevron-right"/>
                Perfiles de jugadores y gremios
              </h3>
              <div className="row">
                <div className="col-md-8">
                  <SeekerComponent/>
                </div>

                <div className="col-md-4">
                  <div className={styles.socialLinkBg}>
                    <span>Mantente conectado:</span>
                    <div className="pull-right">
                        <a href="https://www.facebook.com/SilkroadLatino/">
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/social_fb.png" alt="Facebook"/>
                        </a>
                        <a href="#">
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/social_tw.png" alt="Twitter"/>
                        </a>
                        <a href="https://www.youtube.com/user/tazdingosrl/">
                          <img src="https://www.alfa.srolatino-servers.com/assets/images/social_yt.png"  alt="Youtube" />
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className={`col-md-12 ${styles.separator}`}>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-7">
                  <RankingComponent
                    playerRankings={playerRankings}
                    guildRankings={guildRankings}
                  />
                </div>

                <div className="col-sm-5">
                  <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
                    <li className={styles.subSpotTitle}>
                      <h4>Ultimos unicos asesinados</h4>
                    </li>
                    <li className={`${styles.link} pull-right`}>
                      <a href="https://www.alfa.srolatino-servers.com/community/rankings">Ver todo
                        <span
                        className={`${styles.glyphicon} glyphicon-chevron-right`}>
                        </span>
                      </a>
                    </li>
                  </ul>

                  <ul className={`mini-rank ${styles.listGroup}`}>
                    {uniqueKillRankings.map((row, index) => {
                      return(
                        <li className={styles.listGroupItem} key={`uniqueKillRankings-${index}`}>
                          <p className="">
                        <span
                          className="glyphicon glyphicon-fire">
                        </span>
                            <span className="badge lv">{row.unique}</span>
                            <strong>Asesinado por</strong>
                            {row.charName}
                          </p>
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-md-12 separator">
                </div>
              </div>
              <h3 className="page-subtitle">
                <span
                  className="glyphicon glyphicon-chevron-right">
                </span>
                Media
              </h3>

              <div className="row">
                <div className="col-sm-7">
                  <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                    <li className="sub-spot-title">
                      <h4>EL MAS GUSTADO</h4>
                    </li>
                    <li className="link pull-right">
                      <a href="https://www.alfa.srolatino-servers.com/pictures">
                        Todas Las Imagenes
                        <span
                        className="glyphicon glyphicon-chevron-right">
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="row">
                  </div>
                </div>

                <div className="col-sm-5">
                  <ul id="myTab" className="nav nav-pills sub-spot-title-list">
                    <li className="sub-spot-title">
                      <h4>Ultimas Imagenes</h4>
                    </li>
                    <li className="link pull-right">
                      <a href="https://www.alfa.srolatino-servers.com/pictures/upload">
                        Subir imagen
                        <span className="glyphicon glyphicon-open"/>
                      </a>
                    </li>
                  </ul>
                  <ul className="mini-rank list-group">
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className={`col-md-3 ${styles.listGroupComponent}`}>
            <ListGroup/>
            <ListNewsComponent
              news={news}
            />
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}



export default CommunityPage