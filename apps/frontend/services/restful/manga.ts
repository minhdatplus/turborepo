import { axios } from "../../libs/rest";
import qs from 'qs';


// await request(`/api/books?${query}`);

export const getMangaByCategory = async (category: string) => {
  const query = qs.stringify({
    sort: ['title:asc'],
    // filters: {
    //   title: {
    //     $eq: 'hello',
    //   },
    // },
    populate: `categories=${category}`,
    fields: ['*'],
    pagination: {
      pageSize: 16,
      page: 1,
    },
    publicationState: 'live',
    locale: ['*'],
  }, {
    encodeValuesOnly: true, // prettify url
  });


  const response = await axios
    .get(`http://localhost:1337/api/manga-plural?${query}`);
  return response.data.data;
}