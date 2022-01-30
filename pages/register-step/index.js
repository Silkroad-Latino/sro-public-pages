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
        <div className={styles.titleNews}>
          <h2>REGISTRO</h2>
        </div>
        <div className={`container ${styles.newsContainer}`}>
          <div className="col-md-9 register-content">
            <div className={`row ${styles.regSteps}`}>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs1}`}/>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs2} ${styles.active}`}/>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs3} `}/>
            </div>
            <span className="text-center">
              <div className="page-header ph-grunge">
                <h2>Comprueba tu bandeja de entrada de correo electronico</h2>
              </div>
                <div className={styles.emailImg}/>
            </span>
          </div>

          <div className="col-md-3">

            <LoginComponent/>
            <br/>
            <ListGroup/>
          </div>
        </div>

      </div>
      <FooterComponent/>
    </div>
  )
}