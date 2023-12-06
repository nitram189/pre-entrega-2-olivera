import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function ItemDetailContainer() {
  
  const { productId } = useParams();
  const [ producto, setProducto ] = useState(null);

  useEffect(() => {

    const db = getFirestore()
    
    const productoRef = doc(db, 'productos', productId )
    
    getDoc(productoRef)
      .then((snapshot) => {
        const item = {id: snapshot.id, ...snapshot.data()}
        setProducto(item)
      })
      .catch((error) => console.log(error))

  }, [ productId ])
  
  return (
    <main className="pt-24 pb-20 bg-gray-800">
      <section className="md:w-5/6 w-10/12 mx-auto">
        <ItemDetail
          producto={ producto }/>
      </section>
      
    </main>
  )
}
