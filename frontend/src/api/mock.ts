import type { Api, Dog, List, Post, Puppy } from "./types";

/**
 * Моки на время, пока в Go-бэкенде есть только /api/health.
 * Реализуют тот же интерфейс Api, поэтому переключение на настоящие
 * эндпоинты не потребует правок в компонентах.
 */

const dogs: Dog[] = [
  {
    id: 1,
    slug: "aurora",
    name: "Аврора",
    pedigreeName: "Northern County Aurora Borealis",
    breed: "cavalier",
    sex: "female",
    bornYear: 2022,
    title: "Юный чемпион РКФ",
    photo: { url: "/img/nc-dog-ckcs.jpg", alt: "Кавалер кинг чарльз спаниель Аврора" },
  },
  {
    id: 2,
    slug: "chester",
    name: "Честер",
    pedigreeName: "Snowlight Chester Gold",
    breed: "poodle",
    sex: "male",
    bornYear: 2021,
    title: "Чемпион России",
    photo: { url: "/img/nc-dog-poodle.jpg", alt: "Пудель Честер" },
  },
  {
    id: 3,
    slug: "martha",
    name: "Марта",
    pedigreeName: "Northern County Martha Snow",
    breed: "cavalier",
    sex: "female",
    bornYear: 2023,
    title: "Юниор",
    photo: { url: "/img/nc-dog-ckcs.jpg", alt: "Кавалер кинг чарльз спаниель Марта" },
  },
  {
    id: 4,
    slug: "perseus",
    name: "Персей",
    pedigreeName: "Golden Vale Perseus",
    breed: "poodle",
    sex: "male",
    bornYear: 2020,
    title: "Гранд чемпион",
    photo: { url: "/img/nc-dog-poodle.jpg", alt: "Пудель Персей" },
  },
];

const puppies: Puppy[] = [
  {
    id: 1,
    label: "Мальчик №1",
    nickname: "«Ариэль»",
    color: "бленхейм",
    status: "free",
    photo: { url: "/img/nc-puppies.jpg", alt: "Щенок кавалера, мальчик №1" },
  },
  {
    id: 2,
    label: "Девочка №2",
    nickname: "«Аделия»",
    color: "триколор",
    status: "hold",
    photo: { url: "/img/nc-dog-ckcs.jpg", alt: "Щенок кавалера, девочка №2" },
  },
  {
    id: 3,
    label: "Девочка №3",
    nickname: "«Аврелия»",
    color: "бленхейм",
    status: "free",
    photo: { url: "/img/nc-hero.jpg", alt: "Щенок кавалера, девочка №3" },
  },
  {
    id: 4,
    label: "Девочка №1",
    nickname: "«Вивьен»",
    color: "абрикос",
    status: "free",
    photo: { url: "/img/nc-dog-poodle.jpg", alt: "Щенок пуделя, девочка №1" },
  },
];

const posts: Post[] = [
  {
    id: 1,
    slug: "litter-a",
    kind: "news",
    title: "Родился помёт «А» от Авроры и Честера",
    publishedAt: "2026-01-12",
    cover: { url: "/img/nc-puppies.jpg", alt: "Новорождённые щенки" },
  },
  {
    id: 2,
    slug: "winter-crown",
    kind: "news",
    title: "Аврора — Лучший представитель породы на «Зимней короне»",
    publishedAt: "2025-12-28",
    cover: { url: "/img/nc-dog-ckcs.jpg", alt: "Аврора на выставке" },
  },
  {
    id: 3,
    slug: "how-to-choose",
    kind: "article",
    title: "Как выбрать щенка: семь вопросов заводчику",
    publishedAt: "2025-12-07",
    cover: { url: "/img/nc-dog-poodle.jpg", alt: "Пудель зимой" },
  },
];

/** Небольшая задержка, чтобы состояния загрузки были видны в разработке. */
const delay = <T,>(data: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), 400));

const list = <T,>(items: T[], limit?: number): Promise<List<T>> =>
  delay({ items: limit ? items.slice(0, limit) : items, total: items.length, page: 1 });

export const mockApi: Api = {
  getDogs: (params) =>
    list(
      dogs.filter((dog) => !params?.breed || dog.breed === params.breed),
      params?.limit,
    ),
  getPuppies: (params) =>
    list(
      puppies.filter((puppy) => !params?.status || puppy.status === params.status),
      params?.limit,
    ),
  getPosts: (params) =>
    list(
      posts.filter((post) => !params?.kind || post.kind === params.kind),
      params?.limit,
    ),
  getHealth: () => delay({ status: "ok (мок)", time: new Date().toISOString() }),
};
