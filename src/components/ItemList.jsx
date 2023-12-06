import { Link } from "react-router-dom";

export default function ItemList({ producto }) {

  const { id, nombre, precio, descripcion, imagen, stock, modalidad } = producto;

  const formatPrice = precio.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})

  const formatDescription = descripcion.slice(0,100)

  return (
    <Link
      to={`/item/${ id }`}
      className="flex items-center gap-5 p-5 hover:scale-105 ease-in-out duration-300 shadow-md bg-orange-50 rounded">

      <div className="w-1/5 flex justify-center">
        <img
          src={ imagen }
          alt={`${nombre} imagen`}
          className=" max-h-[150px] rounded"
          /> 
      </div>

      <div className="w-4/5 space-y-2">
        <h5 className="text-xl font-semibold text-red-900">{ nombre }</h5>
        <p className="font-bold text-red-950 text-2xl">{ formatPrice }</p>
        <p className="text-gray-700">{ formatDescription }...</p>
        <h6 className="text-right text-sm text-gray-700 font-medium">Stock: {stock} unidades</h6>
      </div>
    </Link>
  )
}
