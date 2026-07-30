import { httpApi } from "./http";
import { mockApi } from "./mock";
import type { Api } from "./types";

/**
 * Пока в Go реализован только /api/health, по умолчанию работаем на моках.
 * Чтобы ходить в настоящий бэкенд, положите в frontend/.env.local строку
 * VITE_USE_MOCKS=false и запустите сервер на localhost:8080.
 */
const useMocks = import.meta.env.VITE_USE_MOCKS !== "false";

export const api: Api = useMocks ? mockApi : httpApi;
export const isMockApi = useMocks;
