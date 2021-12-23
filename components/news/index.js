import React from 'react';

import styles from './styles.module.css'

const NewsComponent = () => {
    return (
        <>
            <div className={`col-md-12 ${styles.listGroup} ${styles.news}`}>
                    <div className={` col-md-2 ${styles.newsDateHour}`}>
                        <span className={styles.publishDate}>2021-01-06</span>
                        <span className={`publish-tag ${styles.textUp}`}>Actualizaciones</span>
                    </div>


                    <div className={`col-md-10 ${styles.listGroupItem}`}>
                      <div
                        className={`col-md-12 ${styles.image}`}
                        data-bg="url(/assets/img/2.png)"
                        style={{
                          "backgroundImage": "url(/assets/img/2.png"
                        }}/>

                        <a
                          href="https://www.alfa.srolatino-servers.com/blog/updates/06012021-INSPECCION-COMPLETADA-96"
                          >
                              <h3 className={styles.listGroupItemHeading}>[06/01/2021] INSPECCION COMPLETADA</h3>
                              <p className={`${styles.listGroupItemText} ${styles.textLeft}`}>
                                  Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                                  estabilidad en nuestros servidores realizamos la siguiente inspección.
                                  [Actualizaciones] - [EVENTO] El evento de navidad ha finalizado.- [IM] Los
                                  descuentos por navidad...
                              </p>
                        </a>
                    </div>

            </div>

            <div className="clearfix" />
            <div className="clearfix" />
        </>
    );
};

export default NewsComponent;
