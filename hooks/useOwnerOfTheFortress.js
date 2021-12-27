import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useOwnerOfTheFortress = (limit = 5) => {
  const [fortress, setFortress] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getFortress = async () => {
      const {data} = await srlApiClient(`/Fortress-siege`);
      setFortress(data);
    };

    if (!ignore)
      getFortress();

    return () => {
      ignore = true;
    }
  },[]);

  return fortress;
};

export default useOwnerOfTheFortress;