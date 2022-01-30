import axios from 'axios'

const srlApiClient = axios.create({
  baseURL: 'http://7f32-181-170-232-176.ngrok.io/',
  headers: {
    'content-type': 'application/json',
  }
})


export const getNews = (limit = 5) => srlApiClient(`/blog/?limit=${limit}`)
    .then(response => response?.data || []);

export const getPlayerRankings = (limit = 5) => srlApiClient(`/ranking-players?limit=${limit}`)
    .then(response => response?.data || [])

export const getGuildRankings = (limit = 5) => srlApiClient(`/ranking-guilds?limit=${limit}`)
    .then(response => response?.data || []);

export const getUniqueKillRankings = (limit = 5) => srlApiClient(`/ranking/unique?limit=${limit}`)
  .then(response => response?.data || []);


export default srlApiClient;
