import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";

import styles from './styles.module.css'
import VersionDownloadComponent from "../../components/version_download";

export default  function  news(){
  return(
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className={styles.titleNews}>
          <h2>DESCARGAS</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-9">
            <VersionDownloadComponent/>
          </div>
          <div className={`col-md-3 ${styles.listGroupComponent}`}>
            <ListGroup/>
            <div>

            </div>
          </div>

        </div>

      </div>
      <FooterComponent/>
    </div>
  )
}