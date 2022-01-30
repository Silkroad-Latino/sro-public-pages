import React from "react";

import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ListGroup from "../../components/list_group";
import NewsComponent from "../../components/news";
import ListNewsComponent from "../../components/list_news";

import * as srlApiClient from "../../config/axios";

import styles from './styles.module.css'

function BlogPage({news}) {
    return (
        <div>
            <NavbarComponent/>
            <div className="container">
                <div className={styles.titleNews}>
                    <h2>BLOG</h2>
                </div>
                <div className={`container ${styles.newsContainer}`}>
                    <div className="col-md-9">
                        <NewsComponent news={news} />
                    </div>
                    <div className={`col-md-3 ${styles.listGroupComponent}`}>
                        <ListGroup/>
                        <ListNewsComponent news={news}/>
                    <div>

                        </div>
                    </div>

                </div>

            </div>
            <FooterComponent/>
        </div>
    )
}


export async function getServerSideProps() {
    const news = await srlApiClient.getNews(15)
            .catch((error) => {
                console.log("getNews error: ", error);
                return [];
            });

    return {
        props: {
            news
        },
    }
}

export default BlogPage;