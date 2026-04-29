const getApiBaseUrl = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/+$/, '');

  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not configured');
  }

  return apiUrl;
};

export const apiPath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const apiPath = normalizedPath.startsWith('/api/') ? normalizedPath : `/api${normalizedPath}`;

  return `${getApiBaseUrl()}${apiPath}`;
};

export const apiFetch = (path: string, init?: RequestInit) => {
  return fetch(apiPath(path), init);
};

export const getApiErrorMessage = async (response: Response, fallback: string) => {
  try {
    const data = await response.json();
    return data?.error || data?.message || `${fallback} (status ${response.status})`;
  } catch {
    return `${fallback} (status ${response.status})`;
  }
};
