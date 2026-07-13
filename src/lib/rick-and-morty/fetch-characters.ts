import {ApiUrl, Queries} from './queries';

export type Character = {
  id: string,
  name: string,
  image: string,
  status: "Alive" | 'Dead',
  species: string
}

export type Info = {
  count: number;
  pages: number;

  next: null | number
  prev: null | number
}


export async function fetchCharacters(page: number, search: string): Promise<{ errors: any[], characters: Character[], info: Info | null }> {
  try {
    const res = await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: Queries.fetchCharacters,
        variables: {
          page: page,
          search: search
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      errors: data.errors,
      characters: data.data?.characters?.results,
      info: data.data?.characters?.info
    };
  } catch (e) {
    console.error(e);
    return {errors: [e], characters: [], info: null};
  }
}
