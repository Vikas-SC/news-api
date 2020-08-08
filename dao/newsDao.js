const axios = require('axios');
const config = require('../config')
const secrets = require('../secrets/secret')
const getNewsByKeyword = (query) => {
  return axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${secrets.apiKey}`);
}

module.exports = getNewsByKeyword;