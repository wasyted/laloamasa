export default function PageSelection(){
  return(
    <nav className="max-w-sm mx-auto flex items-center justify-center">
      <a className="p-4" href="http://" target="_blank" rel="noopener noreferrer">{"<"}</a>
      <ul className="grid grid-cols-3 gap-x-4 place-items-center p-4">
        <a href="http://" target="_blank" rel="noopener noreferrer"><li className="bg-white h-12 w-12 flex items-center justify-center rounded-sm border border-neutral-500 font-bold">1</li></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><li className="bg-white h-12 w-12 flex items-center justify-center rounded-sm border">2</li></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><li className="bg-white h-12 w-12 flex items-center justify-center rounded-sm border">3</li></a>
      </ul>
      <a className="p-4" href="http://" target="_blank" rel="noopener noreferrer">{">"}</a>
    </nav>
  )
}