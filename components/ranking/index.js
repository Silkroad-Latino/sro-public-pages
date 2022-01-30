import {useState} from 'react'

import styles from './styles.module.css'

import usePlayerRanking from "/hooks/usePlayerRanking";
import useGuildRankings from "/hooks/useGuildRankings";

const RankingComponent = () => {
    const [tab, setTab] = useState("players");

    const setTabHandler = (name = "players") => {
        if (tab === "players" || tab === "clans") {
            setTab(name);
        }
    }

    const playerRankings = usePlayerRanking(5);
    const guildRankings = useGuildRankings(5);

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
                            <a
                                onClick={() => setTabHandler("players")}
                                data-toggle="tab"
                                className={`${tab === "players" && styles.tabOption}`}
                            >
                                Jugadores
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${tab === "clans" && styles.tabOption}`}
                                onClick={() => setTabHandler("clans")}
                                data-toggle="tab"
                            >
                                Clanes
                            </a>
                        </li>
                    </ul>
                </ul>

                {/* RANK  CONTAINERS*/}
                <div id="myTabContent" className="tab-content">

                    {/* RANK PLAYER*/}
                    {tab === "players" && (
                        <div className="tab-pane active" id="rank1">
                            {playerRankings.isLoading && (
                                <div className={styles.rankingLoading}>
                                    Cargando...
                                </div>
                            )}

                            {playerRankings.success && (
                                <ul className={`${styles.miniRank} ${styles.listGroup}`}>
                                    {playerRankings.data.map((row, index) => (
                                        <li className={styles.listGroupItem} key={`rankingPlayers${index}`}>
                                            <p className={styles.listGroupItemHeading}>
                                                <span
                                                    className={`${styles.badgeRank} ${styles[`rank${index + 1}`]}`}>1</span>
                                                <span className={`${styles.badge} ${styles.lv}`}>
                                                    <font className={styles.verticalAlign}>
                                                      <font className={styles.verticalAlign}>{row.curLevel}</font>
                                                    </font>
                                                </span>

                                                <a href={`/guild/${row.guildName}/${row.charName}`}>
                                                    <font className={styles.verticalAlign}>{row.charName}</font>
                                                </a>

                                                <font className={styles.verticalAlign}>
                                                    <font className={styles.verticalAlign}>-</font>
                                                </font>

                                                <a href={`/guild/${row.guildName}`}>
                                                    <font className={styles.verticalAlign}>
                                                        <font className={styles.verticalAlign}>{row.guildName}</font>
                                                    </font>
                                                </a>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* RANK PLAYER*/}

                    {/* RANK GUILD*/}
                    {tab === "clans" && (
                        <div className="tab-pane active" id="rank2">
                            {guildRankings.isLoading && (
                                <div className={styles.rankingLoading}>
                                    Cargando...
                                </div>
                            )}

                            {guildRankings.success && (
                                <ul className={`${styles.miniRank} ${styles.listGroup}`}>
                                    {guildRankings.data.map((row, index) => (
                                        <li className={styles.listGroupItem} key={`guildRanking-${index}`}>
                                            <p className={styles.listGroupItemHeading}
                                               title={`Total Points: ${row.guildPoints}`}>
                                                <span className={`${styles.badgeRank} ${styles[`rank${index+1}`]}`}>1</span>
                                                <span className={`${styles.badge} ${styles.lv}`}>
                                                    <font className={styles.verticalAlign}>
                                                      <font className={styles.verticalAlign}>Lvl {row.level}</font>
                                                    </font>
                                                </span>
                                                <a href={`/guild/${row.name}`}>
                                                    <font className={styles.verticalAlign}>
                                                        <font className={styles.verticalAlign}>{row.name}</font>
                                                    </font>
                                                </a>

                                                <font className={styles.verticalAlign}>
                                                    <font className={styles.verticalAlign}> ({row.guildPoints})</font>
                                                </font>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                    {/* RANK GUILD*/}
                </div>
            </div>
        </>
    );
};

export default RankingComponent;
