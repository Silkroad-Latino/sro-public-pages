import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useRankingKillUniques = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getPlayerRanking = async () => {
      const {data} = await srlApiClient(`/ranking/unique`);
      setRankings(data);
    };

    if (!ignore)
      getPlayerRanking();

    return () => {
      ignore = true;
    }
  },[]);

  return rankings;
};

export default useRankingKillUniques;