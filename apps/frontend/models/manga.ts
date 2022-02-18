export interface MangaObject {
  data: Datum[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
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
}