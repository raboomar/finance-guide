import axios from "axios";

const fetchCategory = async () => {
  let res = await axios.get(
    "http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/category/get"
  );
  return res.data;
};

const categoryUtils = { fetchCategory };
export default categoryUtils;
