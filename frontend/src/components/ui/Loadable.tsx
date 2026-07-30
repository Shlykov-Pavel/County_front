import type { UseQueryResult } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface Props<T> {
  query: UseQueryResult<T>;
  children: (data: T) => ReactNode;
}

/**
 * Три состояния запроса в одном месте, чтобы секции не повторяли
 * проверки isPending/isError.
 */
export function Loadable<T>({ query, children }: Props<T>) {
  if (query.isPending) return <p className="state">Загружаем…</p>;
  if (query.isError) return <p className="state">Не удалось загрузить данные.</p>;

  return <>{children(query.data)}</>;
}
