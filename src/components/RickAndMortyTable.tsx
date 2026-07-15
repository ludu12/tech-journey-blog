export default async function RickAndMortyTable(){
  const res = await fetch('https://rickandmortyapi.com/api/character')
  if (!res.ok) return <div>Failed to load characters</div>
  const data = await res.json()

  return (
      <table className={'table w-full'}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
        </tr>
        </thead>
        <tbody>
        {data.results.map((c: any) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.status}</td>
              <td>{c.species}</td>
            </tr>
        ))}
        </tbody>
      </table>
  )
}
