import MainLayout from '../layouts/mainLayout'
import RankingComponent from "../components/ranking";
import SeekerComponent from "../components/seeker";
import StatusComponent from "../components/status";
import HourComponent from "../components/hour";
import LogActivities from "../components/log";
import DonationComponent from "../components/donation";
import ListGroup from "../components/list_group";
import GmsComponent from "../components/gms";
import DiscordComponent from "../components/discord";
import NewsComponent from "../components/news";
import FortressComponent from "../components/fortress";
import EventsComponent from "../components/events";
import ScreenComponent from "../components/screenshots";
import React from "react";
import SliderComponent from "../components/slider";
import LoginHomeComponent from "../components/login_home";
import * as srlApiClient from "../config/axios";
import Link from "next/link";

function HomePage({
                      news,
                      playerRankings,
                      guildRankings
                  }) {

    return (
        <MainLayout>
            <div className="container">
                <SliderComponent/>
                <LoginHomeComponent/>
            </div>

            <div className="row">
                <div className="col-md-12 sub-spot">

                    <div className="col-md-4 col-lg-3 no-padding-all">

                        <RankingComponent
                            playerRankings={playerRankings}
                            guildRankings={guildRankings}
                        />

                    </div>

                    <div className="col-md-5 col-lg-6">

                        <SeekerComponent/>

                        <StatusComponent/>

                    </div>

                    <HourComponent/>

                    <LogActivities/>

                    <DonationComponent/>

                </div>
            </div>

            <div className="col-md-2 no-padding-left">
                <ListGroup/>
                <GmsComponent/>
                <DiscordComponent/>
            </div>
            <div className="col-md-7 no-padding-left">

                <NewsComponent news={news}/>

                <div className="col-md-12 no-padding-all">
                    <Link href="/blog">
                        <a className="btn btn-block btn-grunge-simple" >Mas</a>
                    </Link>
                </div>
            </div>
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-12 no-padding-all">
                        <FortressComponent/>
                        <EventsComponent/>
                    </div>
                    <ScreenComponent/>
                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const news = await srlApiClient.getNews(5)
        .catch((error) => {
            console.log("news error: ", error);
            return [];
        });

    const playerRankings = await srlApiClient.getPlayerRankings(5)
        .catch((error) => {
            console.log("playerRankings error: ", error);
            return [];
        });

    const guildRankings = await srlApiClient.getGuildRankings(5)
        .catch((error) => {
            console.log("getGuildRankings error: ", error);
            return [];
        });

    return {
        props: {
            news,
            playerRankings,
            guildRankings
        },
    }
}

export default HomePage