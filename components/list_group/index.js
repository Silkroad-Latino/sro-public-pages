import React from 'react';
import Link from "next/link";

import styles from './styles.module.css'

const ListGroup = () => {
  return (
    <>
      <div className={`${styles.listGroup} ${styles.lgGrunge}`}>
        <Link href="/blog">
          <a className={styles.listGroupItem}>
            Noticias
          </a>
        </Link>

        <Link href="/blog/updates">
          <a className={styles.listGroupItem}>
            Actualizaciones
          </a>
        </Link>

        <Link href="/blog/events">
          <a className={styles.listGroupItem}>
            Eventos
          </a>
        </Link>
      </div>
    </>
  );
};

export default ListGroup;
