import React from 'react';

import styles from './styles.module.css'
import useMainPageNews from "../../hooks/useMainPageNews"

const NewsComponent = () => {
  const mainNews = useMainPageNews(5)
    return (
        <>
          {mainNews.map((row, index) => (
            <div className={`col-md-12 ${styles.listGroup} ${styles.news} `} key={`mainNews${index}`}>
              <div className={` col-md-2 ${styles.newsDateHour}`}>
                <span className={styles.publishDate}>{row.datetime}</span>
                <span className={`publish-tag ${styles.textUp}`}>Actualizaciones</span>
              </div>


              <div className={`col-md-10 ${styles.listGroupItem}`}>
                <div
                  className={`col-md-12 ${styles.image}`}
                  data-bg="url(/assets/img/2.png)"
                  style={{
                    "backgroundImage": "url(/assets/img/2.png"
                  }}/>
                <a href="https://www.alfa.srolatino-servers.com/blog/updates/06012021-INSPECCION-COMPLETADA-96">
                  <h3 className={styles.listGroupItemHeading}>{row.title}</h3>
                  <p className={`${styles.listGroupItemText} ${styles.textLeft}`}>{row.content}
                  </p>
                </a>
              </div>
            </div>
          ))}


            <div className="clearfix" />
            <div className="clearfix" />
        </>
    );
};

export default NewsComponent;
