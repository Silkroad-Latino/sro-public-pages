import { createContext, useEffect, useReducer } from "react";
import axiosFetch from "../../config/axios";
import playersReducer from "./rankingPlayersReducer";

export const playersContext = createContext();

export const GET_USERS = "GET_USERS";

const rankingPlayers = () =>{
  const initialState = {
    users: [],
    user:{}
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(playersReducer, initialState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getPlayerRanking = async () => {
      const {data} = await axiosFetch("ranking-players?limit=5");
      if (Object.keys(data).length !== 0){
        dispatch({
          type:GET_USERS,
          payload: data.result
        });
      }
      console.log("result", data)
    };
    getPlayerRanking();
  },[]);

  return(
    <playersContext.Provider
      value={{
        users: state.users,
        user: state.user
      }}
    >
    </playersContext.Provider>
  )
}

export default rankingPlayers;
