export default function Footer({socialLinks}: {socialLinks: Record<string,string>}){
  return (
      <footer className={'w-full bg-base-300 py-6 mt-8'}>
        <div className={'max-w-6xl mx-auto px-4 text-sm'}>
          <div className={'flex justify-between'}>
            <div>© {new Date().getFullYear()} — {"Ava's Site"}</div>
            <div className={'flex gap-4'}>
              {Object.entries(socialLinks).map(([k,v])=> (
                  <a key={k} href={v} className={'capitalize'}>{k}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}
