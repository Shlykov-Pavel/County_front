import type { Breed, PuppyStatus, Sex } from "../api/types";

/** Перевод значений API в текст интерфейса. */

export const breedLabel: Record<Breed, string> = {
  cavalier: "Кавалер кинг чарльз спаниель",
  poodle: "Пудель",
};

export const sexLabel: Record<Sex, string> = {
  male: "кобель",
  female: "сука",
};

export const puppyStatus: Record<PuppyStatus, { label: string; className: string }> = {
  free: { label: "Доступен", className: "badge badge--free" },
  hold: { label: "Забронирован", className: "badge badge--hold" },
  gone: { label: "Продан", className: "badge badge--gone" },
};

const dateFormat = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const formatDate = (iso: string) => dateFormat.format(new Date(iso));
