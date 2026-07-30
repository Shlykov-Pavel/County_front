/** Типы данных API. Договор с бэкендом описан в docs/design.md. */

export type Breed = "cavalier" | "poodle";
export type Sex = "male" | "female";
export type PuppyStatus = "free" | "hold" | "gone";
export type PostKind = "news" | "article";

export interface Image {
  url: string;
  alt: string;
}

export interface Dog {
  id: number;
  slug: string;
  /** Домашняя кличка. */
  name: string;
  /** Полное имя по родословной. */
  pedigreeName: string;
  breed: Breed;
  sex: Sex;
  bornYear: number;
  /** Высший титул, показываем бейджем на карточке. */
  title: string;
  photo: Image;
}

export interface Puppy {
  id: number;
  /** «Мальчик №1» — как щенка называют до выбора клички хозяином. */
  label: string;
  nickname: string;
  color: string;
  status: PuppyStatus;
  photo: Image;
}

export interface Post {
  id: number;
  slug: string;
  kind: PostKind;
  title: string;
  /** ISO 8601. */
  publishedAt: string;
  cover: Image;
}

/** Единый конверт для списков: пагинация не будет ломать контракт. */
export interface List<T> {
  items: T[];
  total: number;
  page: number;
}

export interface Health {
  status: string;
  time: string;
}

export interface ListParams {
  limit?: number;
  page?: number;
}

export interface DogsParams extends ListParams {
  breed?: Breed;
  sex?: Sex;
}

export interface PuppiesParams extends ListParams {
  status?: PuppyStatus;
}

export interface PostsParams extends ListParams {
  kind?: PostKind;
}

/** Контракт, который одинаково реализуют моки и настоящий HTTP-клиент. */
export interface Api {
  getDogs(params?: DogsParams): Promise<List<Dog>>;
  getPuppies(params?: PuppiesParams): Promise<List<Puppy>>;
  getPosts(params?: PostsParams): Promise<List<Post>>;
  getHealth(): Promise<Health>;
}
