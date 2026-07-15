import {fetchGenerations} from "@/lib/pokeapi";
import PokemonTabs from "@/components/PokemonTabs";

export default async function PokemonLayout(props: { children: React.ReactNode }) {
  const generations = await fetchGenerations()
  const gens = generations && (generations as any).generations ? (generations as any).generations : [{id: 1}]
  const validGenerations = gens.map((x: any) => x.id);

  return (
      <div className={'w-full flex flex-col items-center'}>
        <PokemonTabs generations={validGenerations}/>
        <div className={'py-4'}>
          {props.children}
        </div>
      </div>
  )
}
