import {useEffect, useState} from "react";

import srlApiClient from "../config/axios";

const useEventsList = (limit = 5) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getEventsList = async () => {
      const {data} = await srlApiClient(`/event-server`);
      setEvents(data);
    };

    if (!ignore)
      getEventsList();

    return () => {
      ignore = true;
    }
  },[]);

  return events;
};

export default useEventsList;