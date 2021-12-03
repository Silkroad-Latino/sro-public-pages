import React from 'react';
import styles from './styles.module.css'

const ListGroup = () => {
  return (
    <>
      <div className={`${styles.listGroup} ${styles.lgGrunge}`}>
        <a href="https://www.alfa.srolatino-servers.com/blog/news"
           className={styles.listGroupItem}>
          Noticias
        </a>

        <a href="https://www.alfa.srolatino-servers.com/blog/updates"
           className={styles.listGroupItem}>
          Actualizaciones
        </a>

        <a href="https://www.alfa.srolatino-servers.com/blog/events"
           className={styles.listGroupItem}>
          Eventos
        </a>
      </div>
    </>
  );
};

export default ListGroup;
