import React from "react";

import FooterComponent from "../../../../components/footer";
import NavbarComponent from "../../../../components/navbar";
import ListGroup from "../../../../components/list_group";

import styles from './styles.module.css'
import ListNewsComponent from "../../../../components/list_news";
import * as srlApiClient from "../../../../config/axios";
import {getUniqueKillRankings} from "../../../../config/axios";

export async function getServerSideProps() {

  const news = await srlApiClient.getNews(5)
    .catch((error) => {
      console.log("news error: ", error);
      return [];
    });

  const uniqueKillRankings = await srlApiClient.getUniqueKillRankings(30)
    .catch((error) => {
      console.log("uniqueKillRankings error: ", error);
      return [];
    });


  return {
    props: {
      news,
      uniqueKillRankings,
    },
  }
}

function CommunityPage ({
                          news,
                          uniqueKillRankings,
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

                <li className="">
                  <a href="https://www.alfa.srolatino-servers.com/community/rankings/guilds">
                    <span className="img guild">g</span>
                    Clanes</a>
                </li>

                <li className="active">
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

              <div className="rank-img rank-img-uniques">
                <h3>Unicos</h3>
              </div>
              <div className="container-tab rankings-cont">
                <table className={`${styles.table} ${styles.tableRankings}`}>
                  <thead>
                  <tr>
                    <td>Unico</td>
                    <td>Personaje</td>
                    <td>Muertes</td>
                  </tr>
                  </thead>
                  {uniqueKillRankings.map((row, index) => {
                    return(
                      <tbody key={`uniqueKillRankings-${index}`}>
                      <tr>
                        <td>
                      <span
                        className="unique-icon mega"
                        style={{
                          backgroundImage : `url(/assets/img/uniques/${row.unique}.jpg)`,
                        }}
                        alt=""
                        width="24"
                        height="24">

                      </span>
                          <span className="unique-name">{row.unique}</span>
                        </td>
                        <td>
                          <strong>{row.charName}</strong>
                        </td>
                        <td>{row.fecha}</td>
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