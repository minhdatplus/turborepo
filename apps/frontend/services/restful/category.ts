import axios from "axios";

export const getCategory = () =>
  axios
    .get(`http://localhost:1337/api/categories-plural?fields=name, title, slug`)
    .then((response) => {
      return response.data;
    });