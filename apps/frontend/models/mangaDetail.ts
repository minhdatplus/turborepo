export interface MangaResponse {
  data: MangaInfo
}

export interface MangaInfo {
  data: Data;
  meta: Meta;
}

export interface Meta {
  page: string;
  pageSize: string;
  total: string;
}

export interface Data {
  mangaDetail: MangaDetail;
  chapters: Chapter[];
}

export interface Chapter {
  id: number;
  title: string;
  slug: string;
}

export interface MangaDetail {
  id: number;
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
  created_at: string;
  updated_at: string;
  published_at: string;
  created_by_id?: any;
  updated_by_id?: any;
}