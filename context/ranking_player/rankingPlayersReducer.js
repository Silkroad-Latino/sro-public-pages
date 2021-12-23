import {GET_USERS} from './rankingPlayersContext'

const playersReducer = (state, action) =>{
  switch (action.type) {
    case GET_USERS:
      return{...state, users: action.payload}
    default:
      return state
  }
}

export default playersReducer;