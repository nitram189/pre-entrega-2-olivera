import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {

  const [ producto, setProducto ] = useState(null);
  const { productId } = useParams();


  useEffect(() => {
    getProductById(productId)
  }, [productId])

  const getProductById = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`
    try {
      const res = await fetch(url);
      const productoSeleccionado = await res.json();
      setProducto(productoSeleccionado);

    }
    catch (error) {
      return console.log(error);
    }
  }
  
  return (
    <main className="w-5/6 mx-auto py-10">
      <ItemDetail
        producto={ producto }/>
    </main>
  )
}
