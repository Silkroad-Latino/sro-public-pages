import React from "react";

import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";
import ListGroup from "../../../components/list_group";

import styles from './styles.module.css'
import ListNewsComponent from "../../../components/list_news";
import * as srlApiClient from "../../../config/axios";

export async function getServerSideProps() {

  const news = await srlApiClient.getNews(5)
    .catch((error) => {
      console.log("news error: ", error);
      return [];
    });

  const playerRankings = await srlApiClient.getPlayerRankings(30)
    .catch((error) => {
      console.log("playerRankings error: ", error);
      return [];
    });


  return {
    props: {
      news,
      playerRankings,
    },
  }
}

function CommunityPage ({
                          news,
                          playerRankings,
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
            <div className={`col-md-12 ${styles.normalContent} rankings-content}`}>
              <div className="row">
                <ol className={`${styles.breadcrumb} ${styles.grunge}`}>
                  <li>
                    <a href="https://www.alfa.srolatino-servers.com/">Home</a>
                  </li>
                  <li>
                    <a href="https://www.alfa.srolatino-servers.com/community">Community</a>
                  </li>
                  <li className={styles.active}>
                    Rankings
                  </li>
                </ol>
              </div>
              <ul className="rankings-nav">
                <li className="active">
                  <a
                    href="https://www.alfa.srolatino-servers.com/community/rankings/characters">
                    <span className="img char">c</span>
                    Personajes</a>
                </li>

                <li className="">
                  <a
                    href="https://www.alfa.srolatino-servers.com/community/rankings/guilds">
                    <span className="img guild">g</span>
                    Clanes
                  </a>
                </li>

                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/uniques">
                    <span className="img unique">u</span>
                    Unicos
                  </a>
                </li>

                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/jobs-hunters">
                    <span className="img job">j</span>
                    Hunters
                  </a>
                </li>

                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/jobs-traders">
                    <span className="img job">j</span>
                    Traders
                  </a>
                </li>

                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/jobs-thief">
                    <span className="img job">j</span>
                    Thief
                  </a>
                </li>

              </ul>
              <div className="rank-img rank-img-chars">
                <h3>Personajes</h3>
              </div>

              <div className="container-tab rankings-cont">

                <table className={`${styles.table} ${styles.tableRankings}`}>
                  <thead>
                  <tr>
                    <td className={styles.textCenter}>#</td>
                    <td>Nombre</td>
                    <td className={styles.textCenter}>Nivel</td>
                    <td className={styles.textCenter}>PvPKills</td>
                    <td className={styles.textCenter}>Clan</td>
                    <td className={styles.textCenter}>Items Points</td>
                  </tr>
                  </thead>
                  {playerRankings.map((row, index) =>{
                    const iconClass = index < 3 ? styles[`rank${index + 1}`] : ""
                    return(
                      <tbody key={`playerRankings-${index}`}>
                      <tr>
                        <td
                          className={styles.textCenter}>
                          <span className={`${styles.badgeRank} ${iconClass}`}>{index + 1}</span>
                        </td>

                        <td>
                          <a href="https://www.alfa.srolatino-servers.com/guild/UnitedBrooS/Valkyrium">
                            <strong>{row.charName}</strong>
                          </a>
                        </td>
                        <td className={styles.textCenter}>{row.curLevel}</td>
                        <td className={styles.textCenter}>{row.pvpKills}</td>
                        <td className={styles.textCenter}>
                          <a
                            href="https://www.alfa.srolatino-servers.com/guild/UnitedBrooS">
                            <strong>{row.guildName}</strong>
                          </a>
                        </td>
                        <td className={styles.textCenter}>{row.score}</td>
                      </tr>
                      </tbody>
                    )
                  })}
                </table>
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