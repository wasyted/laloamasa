export default function FilterProducts(){
  return(
    <select name="filter" id="filter" className="border px-2 py-1.5">
      <option value="newest">
        Más nuevo
      </option>
      <option value="cheapest">
        Más barato
      </option>
      <option value="popular">
        Más comprado
      </option>
    </select>
  )
}