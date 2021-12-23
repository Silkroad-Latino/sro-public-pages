import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useRankingPlayers = (limit = 5) => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getPlayerRanking = async () => {
      const {data} = await srlApiClient(`/ranking-players?limit=${limit}`);
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

export default useRankingPlayers;