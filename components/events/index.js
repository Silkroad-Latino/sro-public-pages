import React from 'react';
import styles from './styles.module.css'

const EventsComponent = () => {
  return (
    <>
      <div className="event-times">
        <ul id="myTab" className={`nav nav-pills ${styles.subSpotTitleList}`}>
          <li className={styles.subSpotTitle}>
            <h4>Siguiente evento</h4>
          </li>
        </ul>
        <ul className={`${styles.times} ${styles.listUnStyled}`} id="next-events">
          <li>
            <span className={styles.badge}>00:00</span>
            <span className={styles.circle}/>
            <span className={styles.name}>Evento Medusa</span>
          </li>

          <li>
            <span className={styles.badge}>00:00</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>Arena de batalla</font>
              </font>
            </span>
          </li>

          <li>
            <span className={styles.badge}>00:01</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
              <font className={styles.verticalAlign}>
                <font className={styles.verticalAlign}>Job War / Templo de Job</font>
              </font>
            </span>
          </li>

          <li>
            <span className={styles.badge}>00:02</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>Seth / Engendro de Haroeris</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>00:32</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>Guerra PvP</span>
          </li>

          <li>
            <span className={styles.badge}>01:02</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>BA 115/125</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>01:33</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>Captura la bandera</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>02:32</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>CTF 115/125</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>03:34</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>Evento Unique Low</span>
          </li>

          <li>
            <span className={styles.badge}>05:38</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>Evento Roc</span>
          </li>

          <li>
            <span className={styles.badge}>11:02</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>Engendro de Isis / Anubis</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>17:02</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>
												<font className={styles.verticalAlign}>
													<font className={styles.verticalAlign}>Engendro de Neith / Selket</font>
												</font>
											</span>
          </li>

          <li>
            <span className={styles.badge}>73:02</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>Loteria Semanal Advanced</span>
          </li>

          <li>
            <span className={styles.badge}>73:32</span>
            <span className={styles.circle}></span>
            <span className={styles.name}>Loteria</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EventsComponent;
