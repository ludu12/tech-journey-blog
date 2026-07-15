import Link from 'next/link'

export default function PokemonTabs({generations}:{generations:number[]}){
  return (
      <div className={'flex gap-2 flex-wrap justify-center py-4'}>
        {generations.map(g => (
            <Link key={g} href={`/pokemon/${g}`} className={'btn btn-sm'}>{`Gen ${g}`}</Link>
        ))}
      </div>
  )
}
