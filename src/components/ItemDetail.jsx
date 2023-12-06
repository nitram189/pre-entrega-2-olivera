import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useTienda } from "../hooks/useTienda";
import { formattedPrice } from "../services";
import { Link } from "react-router-dom";


export default function ItemDetail({ producto }) {

  const [quantity, setQuantity] = useState(1)
  const { handleCartItems, cartItems } = useTienda()

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const incrementQuantity = () => {
    if (quantity < producto?.stock) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <article className="bg-orange-50 rounded px-5 py-10">
      <div className="md:flex gap-5 w-full">
        <div className="md:w-2/3 flex justify-center md:p-0 p-5">
          <img
            src={producto?.imagen}
            alt={`${producto?.nombre} image`}
            className="rounded max-w-[500px] w-full" />
        </div>

        <div className="md:w-1/3 space-y-4 md:p-0 p-5">

          <h2 className="text-2xl font-bold text-red-900">{producto?.nombre}</h2>

          <p className="text-3xl font-bold">{formattedPrice(producto?.precio)}</p>


          <h5 className="text-gray-600">Stock: {producto?.stock} unidades</h5>

          {!producto?.stock
            ? <p className="text-center font-semibold text-red-600 border-2 border-red-600 py-2 px-2 rounded">Producto no disponible</p>

            : <>
              <div className="flex gap-5">
                <button
                  type="button"
                  onClick={reduceQuantity}
                >
                  <AiOutlineMinusCircle size={30} />
                </button>

                <p className="font-semibold text-2xl">{quantity}</p>

                <button
                  type="button"
                  onClick={incrementQuantity}
                >
                  <AiOutlinePlusCircle size={30} />
                </button>

              </div>

              <button
                type="button"
                onClick={() => handleCartItems({
                  ...producto,
                  quantity
                })}
                className="w-full bg-blue-900 text-white py-2 rounded font-semibold text-lg hover:bg-blue-700">
                Agregar al carrito
              </button>
            </>

          }
          
          {cartItems?.length === 0
            ? null
            : <div className="w-full">
              <Link
                to='/cart'
                className="w-full block text-center bg-indigo-800 text-white py-2 rounded font-semibold text-lg hover:bg-indigo-700">
                Ir al carrito
              </Link>
            </div>
          }
        </div>
      </div>

      <div className="py-10 md:px-0 px-5">
        <h5 className="text-xl font-semibold">Descripción del producto</h5>
        <p>{producto?.descripcion}</p>
      </div>
    </article>
  )
}
