import { axios } from "../../libs/rest";
import qs from 'qs';
import { MangaInfo, MangaResponse } from '../../models/mangaDetail';


// await request(`/api/books?${query}`);

export interface ChapterByMangaSlug {
  pageSize: number,
  page: number,
  mangaSlug: string
}

export const getChapterByMangaId_Old = async (params: ChapterByMangaSlug) => {
  const query = qs.stringify({
    sort: ['title:asc'],
    filters: {
      slug: {
        $eq: params.mangaSlug,
      },
    },
    populate: {
      chapters: {
        fields: ['title', 'slug'],
        pagination: {
          pageSize: 10,
          page: 1,
        }
      },
    },
    fields: ['title', 'slug'],
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: 'live',
    locale: ['*'],
  }, {
    encodeValuesOnly: true, // prettify url
  });
  console.log(query)


  const response = await axios
    .get(`http://localhost:1337/api/manga-plural/?${query}`);

  return response.data;
}

export const getChapterByMangaSlug = async (params: ChapterByMangaSlug) => {
  const mangaSlug = params.mangaSlug
  const page = params.page
  const pageSize = params.pageSize
  const response = await axios
    .get(`http://localhost:1337/api/comic/chapter/${mangaSlug}?page=${page}&pageSize=${pageSize}`);
  return response;
}