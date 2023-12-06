import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore';


export default function ItemListContainer({categoriaId}) {
  
  const [isLoading, setIsLoading] = useState(false)
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    const db = getFirestore()
    
    // GENERAMOS EL FILTRADO DE LOS PRODUCTOS
    const q = categoriaId
      ? query(
      collection(db,'productos'),
      where('categoria','==',categoriaId))

      : collection(db, 'productos')

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          return {id: doc.id, ...doc.data()}
        })
        setProductos(items)
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))

  }, [])

  return (
    <section className="bg-gray-800 py-10">

      <div className="w-5/6 mx-auto ">
        
        <ul className="py-5 space-y-4">
          { productos?.map((producto) => (
            <ItemList
              key={ producto.id }
              producto={ producto }
            />
          )) }
        </ul>
      </div>

    </section>
  )
}
