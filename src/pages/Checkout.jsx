import { useState } from "react";
import { CheckoutForm } from "../components";
import { useTienda } from "../hooks/useTienda";
import { addDoc, collection, updateDoc, doc, getDoc, getFirestore } from "firebase/firestore";


export default function Checkout() {

  const { total, cartItems, handleEmptyCart } = useTienda()

  const [userData, setUserData] = useState({
    nombre: '',
    tel: '',
    email: '',
    remail: '',
    numeros: '',
    vto: '',
    seg: ''
  });
  const [orderId, setOrderId] = useState('')

  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userData).includes('')) {
      return alert('Todos los campos deben estar completos')
    }
    if (userData.email !== userData.remail) {
      return alert('Las direcciones de email no coiciden')
    }
    // INSTACIAMOS LA BASE DE DATOS
    const db = getFirestore();

    // GENERAMOS EL OBJETO CORRESPONDIENTE A LA COMPRA
    const orden = {
      items: cartItems?.map((item) => ({
        id: item?.id,
        nombre: item?.nombre,
        cantidad: item?.quantity,
        stock: item?.stock
      })),
      total,
      fecha: new Date(),
      nombre: userData.nombre,
      telefono: userData.tel,
      email: userData.email
    }

    // GENERAMOS LA LOGICA PARA LA ORDEN Y CONTROL DEL STOCK
    Promise.all(
      orden.items.map(async (orderItem) => {
        const productoRef = doc(db,"productos",orderItem.id)
        const productoDoc = await getDoc(productoRef)
        const stockActual = productoDoc.data().stock

        await updateDoc(productoRef, {
          stock: stockActual - orderItem.cantidad
        })
      })
    )
    .then(() => {
      addDoc(collection(db,"ordenes"), orden)
        .then((docRef) => {
          setOrderId(docRef.id)
          handleEmptyCart()
          setUserData({
            nombre: '',
            tel: '',
            email: '',
            remail: '',
            numeros: '',
            vto: '',
            seg: ''
          })
        })
        .catch((error) => {
          alert('Hubo un error al crear la orden')
        })
    })
    .catch((error) => {
      alert(`No es posible actualizar el stock. Intente más tarde. ${error}`)
    })

  }

  return (
    <main className='w-full h-full'>
      <section className='w-full'>
        <div className='absolute w-full h-[300px] bg-gradient-to-b from-black/80 to-black/30'></div>

        <img
          src='https://i.ibb.co/4fGRkTQ/pexels-anete-lusina-4792073.jpg'
          alt='Imagen fondo Checkout'
          className='w-full h-[300px] object-cover'
        />

        <div className='absolute top-40 lg:left-28'>
          <h2 className="text-5xl lg:text-6xl font-bold text-red-300 p-10" data-aos="fade-right">Checkout</h2>
        </div>
      </section>

      <CheckoutForm
        userData={userData}
        orderId={orderId}
        handleUserData={handleUserData}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}
