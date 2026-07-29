import { useQuery } from "@tanstack/react-query";

import { api } from "./index";
import type { DogsParams, PostsParams, PuppiesParams } from "./types";

/**
 * Ключи запросов в одном месте: по ним TanStack Query кеширует ответы
 * и по ним же потом инвалидирует их после мутаций.
 */
export const queryKeys = {
  dogs: (params: DogsParams) => ["dogs", params] as const,
  puppies: (params: PuppiesParams) => ["puppies", params] as const,
  posts: (params: PostsParams) => ["posts", params] as const,
  health: () => ["health"] as const,
};

export function useDogs(params: DogsParams = {}) {
  return useQuery({
    queryKey: queryKeys.dogs(params),
    queryFn: () => api.getDogs(params),
    select: (data) => data.items,
  });
}

export function usePuppies(params: PuppiesParams = {}) {
  return useQuery({
    queryKey: queryKeys.puppies(params),
    queryFn: () => api.getPuppies(params),
    select: (data) => data.items,
  });
}

export function usePosts(params: PostsParams = {}) {
  return useQuery({
    queryKey: queryKeys.posts(params),
    queryFn: () => api.getPosts(params),
    select: (data) => data.items,
  });
}

/** Используется индикатором состояния API в подвале (только в разработке). */
export function useHealth() {
  return useQuery({
    queryKey: queryKeys.health(),
    queryFn: () => api.getHealth(),
    retry: false,
    staleTime: 30_000,
  });
}
