import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTienda } from "../hooks/useTienda";
import { formattedPrice } from "../services";


export default function CartItem({ item }) {

  const { handleDelete } = useTienda();

  return (
    <li className="flex gap-5 py-5 bg-orange-50 rounded w-5/6">
      <div className="w-1/6 pl-4 flex justify-center">
        <img
          src={item?.imagen}
          alt={`Imagen relacionada a ${item?.nombre}`}
          className="max-w-20 max-h-20 rounded"
        />
      </div>

      <div className="w-4/6">

        <h5 className="font-semibold text-sm md:text-lg text-red-900">{ item.nombre }</h5>
        
        <p className="font-bold text-red-950 text-lg">{ formattedPrice(item?.precio) }</p>
        
        <p className="text-sm text-gray-700 font-medium">
          Cantidad: { item?.quantity } - 
          Subtotal: { formattedPrice(item?.quantity * item?.precio) }
        </p>
      </div>

      <div className="w-1/6 flex justify-center items-start">
        <button
          type="button"
          onClick={() => handleDelete(item?.id)}
        >
          <AiOutlineCloseCircle size={28} />
        </button>
      </div>
      

    </li>
  )
}
