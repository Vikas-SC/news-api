const getNewsByKeyword = require('../dao/newsDao');

const getNewsService = (query) => {
  return getNewsByKeyword(query);
}

module.exports = getNewsService;