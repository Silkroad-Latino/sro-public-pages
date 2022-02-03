import React from "react";

import FooterComponent from "../../../../components/footer";
import NavbarComponent from "../../../../components/navbar";
import ListGroup from "../../../../components/list_group";

import styles from './styles.module.css'
import ListNewsComponent from "../../../../components/list_news";
import * as srlApiClient from "../../../../config/axios";

export async function getServerSideProps() {

  const news = await srlApiClient.getNews(5)
    .catch((error) => {
      console.log("news error: ", error);
      return [];
    });

  const guildRankings = await srlApiClient.getGuildRankings(30)
    .catch((error) => {
      console.log("uniqueKillRankings error: ", error);
      return [];
    });


  return {
    props: {
      news,
      guildRankings,
    },
  }
}

function CommunityPage ({
                          news,
                          guildRankings,
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
                  <li className="active">Rankings</li>
                </ol>
              </div>
              <ul className="rankings-nav">
                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/characters">
                    <span className="img char">c</span>
                    Personajes
                  </a>
                </li>

                <li className="active">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/guilds">
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

              <div className="rank-img rank-img-guilds">
                <h3>Clanes</h3>
              </div>
              <div className="container-tab rankings-cont">
                <table className={`${styles.table} ${styles.tableRankings}`}>
                  <thead>
                  <tr>
                    <td className={styles.textCenter}>#</td>
                    <td>Nombre</td>
                    <td>Nivel</td>
                    <td>GuildPoints</td>
                    <td>Gano Guild Wars</td>
                    <td>Guild Wars Kills</td>
                    <td>Total Points</td>
                  </tr>
                  </thead>
                  {guildRankings.map((row, index) =>{
                    const iconClass = index < 3 ? styles[`rank${index + 1}`] : ""
                    return(
                      <tbody key={`guildRankings-${index}`}>
                      <tr>
                        <td className={styles.textCenter}>
                          <span className={`${styles.badgeRank} ${iconClass}`}>{index + 1}</span>
                        </td>
                        <td>
                          <img
                            src="https://www.alfa.srolatino-servers.com/assets/images/guild.png"
                            alt=""
                            width="20"
                            height="20"/>
                          <a
                            href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">
                            {row.name}
                          </a>
                        </td>
                        <td>{row.level}</td>
                        <td>{row.guildPoints}</td>
                        <td>{row.wonGuildWars}</td>
                        <td>{row.guildWarsKill}</td>
                        <td>{row.puntajeTotal}</td>
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