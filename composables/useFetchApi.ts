import { $fetch } from 'ofetch';
import type { FetchOptions, ResponseType } from 'ofetch';

const useFetchApi = async <T, R extends ResponseType = 'json'>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  opts: FetchOptions<R> = {},
): Promise<R extends 'json' ? T : unknown> => {
  const config = useRuntimeConfig();
  const token = useCookie('token');

  const result = await $fetch(url, {
    ...opts,
    baseURL: config.public.BASE_API,
    method,
    async onRequest({ options }) {
      if (token.value) {
        options.headers = new Headers({
          ...(options.headers instanceof Headers
            ? Object.fromEntries(options.headers.entries())
            : (options.headers as Record<string, string>)),
          Authorization: `Bearer ${token.value}`,
        });
      }
    },
    onRequestError({ error }) {
      return Promise.reject(error);
    },
    async onResponse({ response }) {
      return response._data;
    },
    onResponseError({ response }) {
      return Promise.reject(response._data);
    },
  });

  return result as R extends 'json' ? T : unknown;
};

export default useFetchApi;
