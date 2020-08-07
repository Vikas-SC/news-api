const getNewsService = require('../services/newsService')
const getNewsController = async (req, res) => {
  try {
    const query = req.params.query;
    const response = await getNewsService(query);
    res.status(200).send(response.data);
  } catch (ex) {
    throw ex;
  }
}

module.exports = getNewsController;