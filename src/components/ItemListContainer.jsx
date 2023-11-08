import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
  
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductos()
  }, [categoryId]);

  const getProductos = async () => {
    const url = 'https://fakestoreapi.com/products'
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (categoryId) {
        const productosFiltrados = data.filter((producto) => producto.category === categoryId);
        setProductos(productosFiltrados);
      }
      else {
        setProductos(data);
      }

    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <main className="w-5/6 mx-auto py-5">

      <h3
        className="text-2xl font-bold text-red-100 capitalize">
        { categoryId === undefined ? 'Todos los productos' : categoryId }
      </h3>
      
      <ul className="py-5">
        { productos?.map((producto) => (
          <ItemList
            key={ producto.id }
            producto={ producto }/>
        )) }
      </ul>
    </main>
  )
}
