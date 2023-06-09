export async function fetchApi(url: string, init?: RequestInit) {
  const res = await fetch(`${url}`, init);
  const data = await res.json();
  return data;
}
