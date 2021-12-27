import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useGeneralManagerConnect = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getGeneralManager = async () => {
      const {data} = await srlApiClient(`/gms-online`);
      setState(data);
    };

    if (!ignore)
      getGeneralManager();

    return () => {
      ignore = true;
    }
  },[]);

  return state;
};

export default useGeneralManagerConnect;