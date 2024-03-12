interface ProductsProps {
  productsLength: number;
}

export default function ProductQueryStats({productsLength} : ProductsProps){
  return(
    <div className="flex items-center justify-start">
      <p className="text-start hidden sm:block">
        Mostrando {productsLength} {productsLength > 1 ? "productos" : "producto"} de {productsLength}
      </p>
      <p className="text-start sm:hidden block">
        Viendo {productsLength} / {productsLength}
      </p>
    </div>
  )
}