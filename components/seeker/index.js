import React from 'react';
import styles from './styles.module.css'

const SeekerComponent = () => {
  return (
    <>
      <form method="POST" action="https://www.alfa.srolatino-servers.com/search">
        <div className={styles.inputGroup}>
          <span className={styles.inputGroupBtn}>
            <select rquired="" className={`btn ${styles.grunge}`} name="by">
              <option value="player">Jugador</option>
              <option value="guild">Clan</option>
            </select>
          </span>
          <input
            type="text"
            className={`form-control ${styles.grunge} search`}
            pattern=".{3,}"
            required
            title="Minimo 3 letras"
            name="s"
            placeholder="Buscar un jugador o clan"
          />
          <span className="input-group-btn">
              <button className={`btn ${styles.btnGrunge}`} type="submit">
                <span className="glyphicon glyphicon-search"></span>
              </button>
          </span>
        </div>
      </form>
    </>
  );
};

export default SeekerComponent;
