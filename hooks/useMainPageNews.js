import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useMainPageNews = (limit = 5) => {
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
      const {data} = await srlApiClient(`/blog/?limit=${limit}`);

      setState((prevState => ({
        ...prevState,
        isLoading: false,
        success: true,
        data
      })));
    };

    if (!ignore)
      getData();

    return () => {
      ignore = true;
    }
  },[]);

  return state;
};

export default useMainPageNews;