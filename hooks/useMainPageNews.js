import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useMainPageNews = (limit = 5) => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getMainNews = async () => {
      const {data} = await srlApiClient(`/blog/?limit=${limit}`);
      setRankings(data);
    };

    if (!ignore)
      getMainNews();

    return () => {
      ignore = true;
    }
  },[]);

  return rankings;
};

export default useMainPageNews;