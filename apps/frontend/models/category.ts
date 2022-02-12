export interface CategoryObject {
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
  name: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}