import axios from "axios";

import qs from 'qs';
const query = qs.stringify({
  sort: ['title:asc'],
  filters: {
    title: {
      $eq: 'hello',
    },
  },
  populate: '*',
  fields: ['title'],
  pagination: {
    pageSize: 10,
    page: 1,
  },
  publicationState: 'live',
  locale: ['en'],
}, {
  encodeValuesOnly: true, // prettify url
});

await request(`/api/books?${query}`);

export const getMangaByCategory = (category: string) =>
  axios
    .get(`http://localhost:1337/api/categories-plural?fields=name, title, slug`)
    .then((response) => {
      return response.data;
    });