/* eslint-disable no-useless-catch */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface FetchRequestOptions extends RequestInit {
  method: HttpMethod;
}

const fetchHelper = async <T>(
  url: RequestInfo,
  options: FetchRequestOptions,
): Promise<T> => {
  const {
    method, headers, body,
  } = options;

  const requestOptions: RequestInit = {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json() as T;
  } catch (error) {
    throw error;
  }
};

export default fetchHelper;
