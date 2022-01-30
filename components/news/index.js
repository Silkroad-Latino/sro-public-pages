import React from 'react';

import * as dateHelpers from "../../helpers/dateHelpers"
import * as stringParserHelpers from "../../helpers/stringParserHelpers"

import styles from './styles.module.css'
import useMainPageNews from "../../hooks/useMainPageNews"

const NewsComponent = ({limit = 5}) => {
    const mainNews = useMainPageNews(limit)
    return (
        <>
          {mainNews.data.map((row, index) => (
            <div className={`col-md-12 ${styles.listGroup} ${styles.news} `} key={`mainNews${index}`}>
              <div className={` col-md-2 ${styles.newsDateHour}`}>
                <span className={styles.publishDate}>{dateHelpers.toOnlyDate(row.datetime)}</span>
              </div>

              <div className={`col-md-12 ${styles.listGroupItem}`}>
                <div
                  className={`col-md-12 ${styles.image}`}
                  data-bg={`url(${row.cover})`}
                  style={{"backgroundImage": `url(${row.cover})`}}/>
                <a href={`/blog/updates/${stringParserHelpers.toNewsUrl(row.title, row.id)}`}>
                  <h3 className={styles.listGroupItemHeading}>{row.title}</h3>
                  <p className={`${styles.listGroupItemText} ${styles.textLeft}`}>
                      {stringParserHelpers.cutString(
                          stringParserHelpers.ignoreHtmlTags(row.content)
                      )}
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
