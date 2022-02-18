interface ChapterObject {
  data: MangaData[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface MangaData {
  id: number;
  attributes: MangaItem;
}

interface MangaItem {
  image: string;
  status: number;
  description: string;
  source: string;
  view?: any;
  rate?: any;
  title: string;
  slug: string;
  author: string;
  author_slug: string;
  rate_score?: any;
  rate_total?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  chapters: Chapters;
}

interface Chapters {
  data: ChapterData[];
}

interface ChapterData {
  id: number;
  attributes: ChapterItem;
}

interface ChapterItem {
  title: string;
  slug: string;
}