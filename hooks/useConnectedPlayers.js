import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useConnectedPlayers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getConnectedPlayers = async () => {
      const {data} = await srlApiClient(`/users-online`);
      setState(data);
    };

    if (!ignore)
      getConnectedPlayers();

    return () => {
      ignore = true;
    }
  },[]);

  return state;
};

export default useConnectedPlayers;