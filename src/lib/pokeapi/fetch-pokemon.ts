import {ApiUrl, Queries} from './queries';

const TYPE_BADGE_URL = 'https://veekun.com/dex/media/types/en/';
const SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export type Pokemon = {
  id: number,
  genId: number,
  name: string,
  color: string,
  backgroundColor: string;
  sprite: string,
  types: { name: string, typeBadgeUrl: string }[]
}

/*
query colors {
  pokemon_v2_pokemoncolor {
    name
  }
}
 */
const colors: Record<string, [number, number, number]> = {
  black: [0, 0, 0],
  blue: [0, 0, 255],
  brown: [165, 42, 42],
  gray: [128, 128, 128],
  green: [0, 255, 0],
  pink: [255, 192, 203],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  white: [255, 255, 255],
  yellow: [255, 255, 0]
};

export const colorToRGBA = (color: string, opacity: number) => {
  return `rgba(${colors[color].join(',')}, ${opacity})`;
};


const mapper = (x: any): Pokemon => {
  // Don't care about alola...
  const pokemon = x.pokemon_v2_pokemons[0];
  return {
    id: x.id,
    genId: x.generation_id,
    name: pokemon.name,
    color: x.pokemon_v2_pokemoncolor.name,
    backgroundColor: colorToRGBA(x.pokemon_v2_pokemoncolor.name, 0.2),
    types: pokemon.pokemon_v2_pokemontypes?.map((t: any) => {
      const name = t.pokemon_v2_type.name;
      return {
        name: name,
        typeBadgeUrl: `${TYPE_BADGE_URL}${name}.png`
      };
    }),
    sprite: `${SPRITE_URL}${x.id}.png`
  };
};

export async function fetchPokemonByGen(genId: number[] | number): Promise<{ generation: number[] | null, errors: any[], pokemon: Pokemon[] }> {
  const generation = Array.isArray(genId) ? genId : [genId]
  try {
    const res = await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: Queries.fetchPokemonByGen,
        variables: {
          gen_ids: generation
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      errors: data.errors,
      pokemon: data.data?.pokemon_v2_pokemonspecies?.map?.(mapper) || [],
      generation
    };
  } catch (e) {
    console.error(e);
    return {errors: [e], pokemon: [], generation: null};
  }
}

export async function fetchPokemonByIds(id: string[] | string) {
  try {
    const res = await fetch(ApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: Queries.fetchPokemonById,
        variables: {
          ids: Array.isArray(id) ? id : [id]
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();

    return {
      errors: data.errors,
      pokemon: data.data?.pokemon_v2_pokemonspecies?.map?.(mapper) || []
    };
  } catch (e) {
    console.error(e);
    return {errors: [e], pokemon: []};
  }
}
