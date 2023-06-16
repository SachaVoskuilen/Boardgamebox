export async function fetchApi(url: string, init?: RequestInit) {
  const res = await fetch(`${url}`, init);
  console.log(res);
  const data = await res.json();
  return data;
}
