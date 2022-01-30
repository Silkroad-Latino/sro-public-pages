import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";
import NewsComponent from "../../components/news";
import ListNewsComponent from "../../components/list_news";

import styles from './styles.module.css'

export default function BlogPage() {
    return (
        <div>
            <NavbarComponent/>
            <div className="container">
                <div className={styles.titleNews}>
                    <h2>BLOG</h2>
                </div>
                <div className={`container ${styles.newsContainer}`}>
                    <div className="col-md-9">
                        <NewsComponent limit={15}/>
                    </div>
                    <div className={`col-md-3 ${styles.listGroupComponent}`}>
                        <ListGroup/>
                        <ListNewsComponent limit={15}/>
                    <div>

                        </div>
                    </div>

                </div>

            </div>
            <FooterComponent/>
        </div>
    )
}