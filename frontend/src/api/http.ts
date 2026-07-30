import type { Api, Dog, Health, List, Post, Puppy } from "./types";

/** Ошибка HTTP-слоя: TanStack Query покажет её как состояние isError. */
export class ApiError extends Error {
  constructor(readonly status: number) {
    super(`Запрос к API завершился со статусом ${status}`);
    this.name = "ApiError";
  }
}

type Params = Record<string, string | number | undefined>;

async function get<T>(path: string, params: Params = {}): Promise<T> {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value));
  }
  const query = search.size > 0 ? `?${search}` : "";

  // Относительный путь: в разработке его проксирует Vite на localhost:8080,
  // в проде фронт и API стоят за одним доменом.
  const response = await fetch(`/api${path}${query}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) throw new ApiError(response.status);

  return (await response.json()) as T;
}

export const httpApi: Api = {
  getDogs: (params) => get<List<Dog>>("/dogs", { ...params }),
  getPuppies: (params) => get<List<Puppy>>("/puppies", { ...params }),
  getPosts: (params) => get<List<Post>>("/posts", { ...params }),
  getHealth: () => get<Health>("/health"),
};
