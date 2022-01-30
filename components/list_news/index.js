import React from 'react';
import Link from 'next/link'

import styles from './styles.module.css'

import * as stringParserHelpers from "../../helpers/stringParserHelpers";
import * as dateHelpers from "../../helpers/dateHelpers";

const ListNewsComponent = ({
                               news = []
                           }) => {
    return (
        <>
            <div className={`${styles.cornerBox} ${styles.marginTop}`}>
                <h4>Notices recites:</h4>
                <ul className={`${styles.listUnStyled} ${styles.recentNews} ${styles.listGroup}`}>
                    {news.map((row, index) => (
                        <li className={styles.listGroupItem} key={`itemNews-${index}`}>

                            <Link href={`/blog/updates/${stringParserHelpers.toNewsUrl(row.title, row.id)}`}>
                                <a>{row.title}</a>
                            </Link>

                            <br/>
                            <small>{dateHelpers.getDifferenceOfCurrentDateWithOtherDate(row.datetime)} meses</small>
                        </li>
                    ))}
                </ul>
                <div className={styles.buttonNews}>
                    <Link href="/blog">
                        <a className={`${styles.btn} ${styles.btnBlock} ${styles.btnGrungeSimple}`} role="button">
                            Mas
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ListNewsComponent;
