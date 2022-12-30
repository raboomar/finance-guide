const pool = require("../../datebase/databaeConfig");

const fetchCategory = async (request, response) => {
  try {
    let DB = pool.pool;
    const [results] = await DB.query("SELECT * FROM category");
    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const categoryService = {
  fetchCategory,
};
module.exports = categoryService;
