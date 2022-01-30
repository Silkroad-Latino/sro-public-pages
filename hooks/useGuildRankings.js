import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useRankingPlayers = (limit = 5) => {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    success: true
  });

  useEffect(() => {
    let ignore = false;

    const getData = async () => {
      setState((prevState => ({
        ...prevState,
        isLoading: true,
        success: false
      })));


      const {data} = await srlApiClient(`/ranking-guilds?limit=${limit}`);
      setState((prevState => ({
        ...prevState,
        data,
        isLoading: false,
        success: true
      })));
    };

    if (!ignore)
      getData();

    return () => {
      ignore = true;
    }
  },[limit]);

  return state;
};

export default useRankingPlayers;