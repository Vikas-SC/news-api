const getNewsService = require('../services/newsService')
const getNewsController = async (req, res) => {
  try {
    const query = req.params && req.params.query ? req.params.query : 'Latest news';
    const response = await getNewsService(query);
    res.status(200).send(response.data);
  } catch (ex) {
    throw ex;
  }
}

module.exports = getNewsController;