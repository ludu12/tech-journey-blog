type Generation = { id: number }

type GenerationsResponse = {
  generations: Generation[]
}

export async function fetchGenerations(): Promise<GenerationsResponse> {
  const res = await fetch('https://pokeapi.co/api/v2/generation/')
  if (!res.ok) throw new Error('Failed to fetch generations')
  const data = await res.json()
  return data as GenerationsResponse
}

export async function fetchPokemonByGen(gen: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`)
  if (!res.ok) throw new Error('Failed to fetch generation')
  const data = await res.json()

  const pokemon = (data.pokemon_species as any[]).map((p: any) => {
    const urlParts: string[] = p.url.split('/').filter(Boolean)
    const id = Number(urlParts[urlParts.length - 1])
    return {
      id,
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    }
  }).sort((a: any,b: any)=> a.id - b.id)

  return {pokemon}
}
