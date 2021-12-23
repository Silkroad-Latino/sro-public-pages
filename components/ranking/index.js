import {useContext} from "react";
import styles from './styles.module.css'

import rankingPlayers from "../../context/ranking_player/rankingPlayersContext";
import getPlayerRanking from '../../context/ranking_player/rankingPlayersContext'

const RankingComponent = () => {

  getPlayerRanking();

  const users = useContext(rankingPlayers);

  return (
    <>
      <div className={styles.rankTabs}>
        <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
          <li className={styles.subSpotTitle}>
            <h4>
              Rankings
              <a href="https://www.alfa.srolatino-servers.com/community/rankings">
                <small>
                  <span className={`${styles.glyphicon} glyphicon-new-window`}/>
                </small>
              </a>
            </h4>
          </li>
          <ul className={`nav ${styles.navTabs} ${styles.navTabsGrunge}  pull-right`}>
            <li className={styles.active}>
              <a href="#rank1" data-toggle="tab" className={styles.a}>Jugadores</a>
            </li>
            <li>
              <a href="#rank2" data-toggle="tab">Clanes</a>
            </li>
          </ul>
        </ul>
        {/* RANK  CONTAINERS*/}
        <div id="myTabContent" className="tab-content">

          {/* RANK PLAYER*/}
          <div className="tab-pane active" id="rank1">
            <ul className={`${styles.miniRank} ${styles.listGroup}`}>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Puntos de artículos: 63926">
                  <span className={`${styles.badgeRank} ${styles.rank1}`}>1</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>Nivel 135</font>
                    </font>
                  </span>

                  <a href="https://www.alfa.srolatino-servers.com/guild/HellWalker/_TheZeger__">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}></font>
                    </font>
                  </a>

                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}>-</font>
                  </font>

                  <a href="https://www.alfa.srolatino-servers.com/guild/HellWalker">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}> HellWalker</font>
                    </font>
                  </a>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Puntos de artículos: 63923">
                  <span className={` ${styles.badgeRank} ${styles.rank2}`}>2</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font >
                                  <font className={styles.verticalAlign}>Nivel 135</font>
                                </font>
                              </span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild/Gus7Diaz">Gus7Diaz</a>
                  -
                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">InsertGuild</a>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Puntos de artículos: 63921">
                  <span className={` ${styles.badgeRank} ${styles.rank3}`}>3</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font className={styles.verticalAlign}>
                                  <font className={styles.verticalAlign}>Nivel 135</font>
                                </font>
                              </span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild/xMickey">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>xMickey</font>
                    </font>
                  </a>
                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}> - </font>
                  </font>
                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>InsertGuild</font>
                    </font>
                  </a>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Puntos de artículos: 63919">
                  <span className={` ${styles.badgeRank} ${styles.rank4}`}>4</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font className={styles.verticalAlign}>
                                  <font className={styles.verticalAlign}>Nivel 135</font>
                                </font>
                              </span>

                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life/Infiiniity">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>Infiniidad</font>
                    </font>
                  </a>

                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}> - </font>
                  </font>

                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>Thiefs4Life</font>
                    </font>
                  </a>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Puntos de artículos: 63919">
                  <span className={` ${styles.badgeRank} ${styles.rank5}`}>5</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font className={styles.verticalAlign}>
                                  <font className={styles.verticalAlign}>Nivel 135</font>
                                </font></span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN/_P1TUF1NA_">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>_P1TUF1NA_</font>
                    </font>
                  </a>

                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}> - </font>
                  </font>

                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>AnGeLs_DeMoN</font>
                    </font>
                  </a>
                </p>
              </li>
            </ul>
          </div>
          {/* RANK PLAYER*/}


          {/* RANK GUILD*/}
          <div className="tab-pane" id="rank2">
            <ul className={`${styles.miniRank} ${styles.listGroup}`}>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Total Points: 1,861,572">
                  <span className={`${styles.badgeRank} ${styles.rank1}`}>1</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>Nivel 5</font>
                    </font>
                  </span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/AnGeLs_DeMoN">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>AnGeLs_DeMoN</font>
                    </font>
                  </a>

                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}> (798,252,815)</font>
                  </font>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Total Points: 1,721,249">
                  <span className={`${styles.badgeRank} ${styles.rank2}`}>2</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font className={styles.verticalAlign}>
                                  <font className={styles.verticalAlign}>Nivel 5</font>
                                </font>
                              </span>

                  <a href="https://www.alfa.srolatino-servers.com/guild/InsertGuild">
                    <font className={styles.verticalAlign}>
                      <font className={styles.verticalAlign}>InsertGuild</font>
                    </font>
                  </a>
                  <font className={styles.verticalAlign}>
                    <font className={styles.verticalAlign}> (5.214.658)</font>
                  </font>
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Total Points: 1,541,862">
                  <span className={`${styles.badgeRank} ${styles.rank3}`}>3</span>
                  <span className={`${styles.badge} ${styles.lv}`}>
                                <font className={styles.verticalAlign}>
                                  <font className={styles.verticalAlign}>Nivel 5</font>
                                </font>
                              </span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/Thiefs4Life">Thiefs4Life</a>
                  (151,260,947)
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Total Points: 1,497,106">
                  <span className={`${styles.badgeRank} ${styles.rank4}`}>4</span>
                  <span className={`${styles.badge} ${styles.lv}`}>Lv 5</span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/WrathOfGods">WrathOfGods</a>
                  (793,424,909)
                </p>
              </li>
              <li className={styles.listGroupItem}>
                <p className={styles.listGroupItemHeading}
                   title="Total Points: 1,375,168">
                  <span className={`${styles.badgeRank} ${styles.rank5}`}>5</span>
                  <span className={`${styles.badge} ${styles.lv}`}>Lv 5</span>
                  <a href="https://www.alfa.srolatino-servers.com/guild/LatinNarcos">LatinNarcos</a>
                  (811,049,773)
                </p>
              </li>
            </ul>
          </div>
          {/* RANK GUILD*/}

        </div>
      </div>
    </>
  );
};

export default RankingComponent;
