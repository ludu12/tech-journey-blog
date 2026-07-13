import { ApiUrl, Queries } from './queries';

export async function fetchGenerations(): Promise<{ generations: { id: number}[], errors: any[] }> {
  try {
    const res = await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: Queries.fetchGenerations
      })
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      errors: data.errors,
      generations: data.data?.pokemon_v2_generation || []
    };
  } catch (e) {
    console.error(e);
    return { errors: [e], generations: [] };
  }
}
