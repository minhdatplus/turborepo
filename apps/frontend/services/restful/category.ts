import { axios } from "../../libs/rest";
export const getCategory = () =>
  axios
    .get(`categories-plural?fields=name, title, slug`)
    .then((response) => {
      return response.data.data;
    });