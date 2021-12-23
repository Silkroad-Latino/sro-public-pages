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
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs2} `}/>
              <div className={`col-xs-4 ${styles.regStep} ${styles.rs3} ${styles.active}`}/>
            </div>
            <span className={styles.textCenter}>
              <div className={`page-header ${styles.phGrunge}`}>
                <div className={styles.checkImg}/>
                <h4>Congratulations<br/>
                  <small>Usted no es un bot!</small>
                </h4>
                <p>Completar el proceso de registro</p>
              </div>
            </span>

            <form role="form" method="POST">
              <div className="form-group col-md-6">
                <label htmlFor="regID">ID</label>
                <input
                  type="text"
                  value="prueba123"
                  readOnly="readonly"
                  className={`form-control ${styles.grunge}`}
                  id="regID"/>
                  <input
                    type="hidden"
                    name="codigo"
                    value="CDRZYRZ2TIKF8SW"/>
              </div>

              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regEmail">Email</label>
                <input
                  type="email"
                  value="prueba123@yopmail.com"
                  readOnly="readonly"
                  className={`form-control ${styles.grunge}`}
                  id="regEmail"
                />
              </div>

              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regName">Tu nombre</label>
                <input
                  required=""
                  type="text"
                  className={`form-control ${styles.grunge} popovers`}
                  id="regName"
                  placeholder="Tu nombre real"
                  name="regName"
                  data-original-title=""
                  title=""
                />
              </div>

              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regApodo">Apodo</label>
                <input
                  type="text"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regApodo"
                  name="regApodo"
                  placeholder="Your Nickname * Only for website events"
                  data-trigger="hover"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="For website Events"
                  data-original-title=""
                  title=""
                />
              </div>

              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regGender">Genero</label>
                <select required="" className={`form-control ${styles.grunge}`} name="regGender" id="regGender">
                  <option value="M">Chico</option>
                  <option value="F">Chica</option>
                </select>
              </div>
              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regSecretP">Pregunta secreta</label>
                <input
                  type="text"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regSecretP"
                  name="regSecretP"
                  placeholder="Pregunta secreta"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Pregunta secreta"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className={`${styles.formGroup} col-md-6`}>
                <label htmlFor="regSecret">Clave secreta</label>
                <input
                  type="text"
                  required=""
                  className={`form-control ${styles.grunge} popovers`}
                  id="regSecret"
                  name="regSecret"
                  placeholder="Clave secreta"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Clave secreta"
                  data-original-title=""
                  title=""
                />
              </div>
              <div className={`${styles.formGroup} col-md-12`}>
                <button type="submit" className={`btn  btn-block ${styles.btnGrunge}`}>Hecho!</button>
              </div>
              <div className="clearfix"/>
            </form>
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