import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";

import styles from './styles.module.css'
import LoginComponent from "../../components/login";

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleSearch}>
          <h2>SEARCH PLAYER</h2>
        </div>
          <div className={`col-md-9 ${styles.normalContent}`}>
            <div className="row">
              <div className="col-md-3 left-separator char-info-left search-left" style={{height: '244px;'}}>
                <h2 className={styles.pageTitle}>Search</h2>
                <ul className="search">
                  <li className="active">
                    <h5>Players (2)</h5>
                  </li>
                </ul>
              </div>
              <div className="search-content col-md-9">
                <div className={styles.pageHeader}>
                  <form method="POST" action="https://www.alfa.srolatino-servers.com/search">
                    <div className={styles.inputGroup}>
                        <span className={styles.inputGroupBtn}>
                          <select
                            required=""
                            className={`${styles.btn} ${styles.grunge}`}
                            name="by">
                            <option value="player">Player</option>
                            <option value="guild">Guild</option>
                          </select>
                        </span>
                      <input
                        pattern=".{3,}"
                        value="werdna"
                        required=""
                        title="Min 3 letters"
                        type="text"
                        name="s"
                        className={` ${styles.formControl} ${styles.grunge} ${styles.search}`}
                        placeholder="Search a player or guild"
                      />
                      <span className={styles.inputGroupBtn}>
                          <button
                            className={`${styles.btn} ${styles.btnGrunge}`}
                            type="submit">
                            <span className={`${styles.glyphicon} glyphicon-search`}/>
                          </button>
                       </span>
                      </div>
                  </form>
                </div>
                  <h4>2 character results for " <strong>werdna</strong> "</h4>
                <table className="table table-searchresult">
                  <thead>
                  <tr>
                    <td>Name</td>
                    <td>Level</td>
                    <td>Guild</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/ch.png"
                        alt=""
                        width="16"
                        height="16"
                      />
                      <a href="https://www.alfa.srolatino-servers.com/guild/dummy/Werdnaa">
                        <strong>Werdnaa</strong>
                      </a>
                    </td>
                    <td>120</td>
                    <td>
                      <a href="https://www.alfa.srolatino-servers.com/guild/dummy">dummy</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://www.alfa.srolatino-servers.com/assets/images/eu.png"
                        alt="image"
                        width="16"
                        height="16"
                      />
                      <a href="https://www.alfa.srolatino-servers.com/guild/dummy/Werdna">
                        <strong>Werdna</strong>
                      </a>
                    </td>
                    <td>39</td>
                    <td>
                      <a href="https://www.alfa.srolatino-servers.com/guild/dummy">dummy</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <img
                  src="https://www.alfa.srolatino-servers.com/assets/images/divider.jpg"
                  alt=""
                  className="img-responsive center-block"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <LoginComponent/>
              <br/>
            <ListGroup/>
          </div>
      </div>
      <FooterComponent/>
    </div>
  )
}