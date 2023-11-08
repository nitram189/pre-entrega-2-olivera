import { Link } from "react-router-dom";

export default function ItemList({ producto }) {

  const { id, title, price, description, category, image } = producto;

  const formatPrice = price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})

  const formatDescription = description.slice(0,100)

  return (
    <Link
      to={`/item/${ id }`}
      className="bg-white flex items-center gap-5 p-5 border-b border-red-300">

      <div className="w-1/5 flex justify-center">
        <img
          src={ image }
          alt={`${title} image`}
          className=" max-h-[150px]"
          /> 
      </div>

      <div className="w-4/5 space-y-2">
        <h5 className="text-xl font-semibold text-red-900">{ title }</h5>
        <p className="font-bold text-2xl">{ formatPrice }</p>
        <p className="text-gray-700">{ formatDescription }...</p>
        <h6 className="text-sm text-gray-900">Category: { category }</h6>
      </div>
    </Link>
  )
}
