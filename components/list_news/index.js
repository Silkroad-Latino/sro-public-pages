import React from 'react';
import styles from './styles.module.css'

import useMainPageNews from "../../hooks/useMainPageNews"
import * as stringParserHelpers from "../../helpers/stringParserHelpers";
import * as dateHelpers from "../../helpers/dateHelpers";

const ListNewsComponent = ({limit = 5}) => {
    const news = useMainPageNews(limit);

    return (
        <>
            <div className={`${styles.cornerBox} ${styles.marginTop}`}>
                <h4>Notices recites:</h4>
                <ul className={`${styles.listUnStyled} ${styles.recentNews} ${styles.listGroup}`}>
                    {news.data.map((row, index) => (
                        <li className={styles.listGroupItem} key={`itemNews-${index}`}>

                            <a href={`/blog/updates/${stringParserHelpers.toNewsUrl(row.title, row.id)}`}>
                                {row.title}
                            </a>
                            <br/>
                            <small>{dateHelpers.getDifferenceOfCurrentDateWithOtherDate(row.datetime)} meses</small>
                        </li>
                    ))}
                </ul>
                <div className={styles.buttonNews}>
                    <a
                        href="/blog"
                        className={`${styles.btn} ${styles.btnBlock} ${styles.btnGrungeSimple}`}
                        role="button"> Mas
                    </a>
                </div>
            </div>
        </>
    );
};

export default ListNewsComponent;
