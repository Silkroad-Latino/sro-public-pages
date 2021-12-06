import React from 'react';
import styles from './styles.module.css'

const NewsComponent = () => {
    return (
        <>
            <div className="col-md-10 col-md-offset-2 no-padding-all">
                <a
                    href="https://www.alfa.srolatino-servers.com/blog/updates/06012021-INSPECCION-COMPLETADA-96"
                   className={`list-group-item ${styles.listGroupItem}`}
                >
                    <div
                        className="col-md-12 image"
                        data-bg="url(/assets/img/2.png)"
                        style={{
                            "backgroundImage": "url(/assets/img/2.png"
                        }}/>
                    <h3 className="list-group-item-heading">[06/01/2021] INSPECCION COMPLETADA</h3>
                    <p className="list-group-item-text text-left">
                        Hola, usuarios de SroLatino Servers, Para mantener una mejor jugabilidad y
                        estabilidad en nuestros servidores realizamos la siguiente inspección.
                        [Actualizaciones] - [EVENTO] El evento de navidad ha finalizado.- [IM] Los
                        descuentos por navidad...
                    </p>
                    <div className="col-md-2 news-meta">
                        <span className="publish-date">2021-01-06</span>
                        <span className="publish-tag pull-right badge lv">Actualizaciones</span>
                    </div>
                </a>
            </div>
            <div className="clearfix" />
            <div className="clearfix" />
        </>
    );
};

export default NewsComponent;
