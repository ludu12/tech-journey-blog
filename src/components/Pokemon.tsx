import Image from 'next/image'

export default function Pokemon({pokemon}: {pokemon: {id:number;name:string;image?:string}}){
  return (
      <div className={'m-2 p-2 w-40 text-center'}>
        {pokemon.image && <Image src={pokemon.image} alt={pokemon.name} width={160} height={160}/>} 
        <div className={'capitalize mt-2'}>{pokemon.name}</div>
      </div>
  )
}
