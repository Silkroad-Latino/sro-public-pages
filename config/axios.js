import axios from 'axios'

const srlApiClient = axios.create({
  baseURL: 'http://localhost:3030',
  headers: {
    'content-type': 'application/json',
  }
})


export const getNews = (limit = 5) => srlApiClient(`/blog/?limit=${limit}`)
    .then(response => response?.data || []);

export const getPlayerRankings = (limit = 30) => srlApiClient(`/ranking-players?limit=${limit}`)
    .then(response => response?.data || [])

export const getGuildRankings = (limit = 5) => srlApiClient(`/ranking-guilds?limit=${limit}`)
    .then(response => response?.data || []);

export const getUniqueKillRankings = (limit = 5) => srlApiClient(`/ranking/unique?limit=${limit}`)
  .then(response => response?.data || []);



export default srlApiClient;
