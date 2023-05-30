export async function fetchApi(url: string, init?: RequestInit) {
  const res = await fetch(`${url}`, init);

  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();

  return data;
}
