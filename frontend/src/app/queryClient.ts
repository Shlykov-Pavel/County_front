import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Контент питомника меняется редко: минуту можно показывать из кеша,
      // не дёргая сервер при каждом возврате на страницу.
      staleTime: 60_000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
