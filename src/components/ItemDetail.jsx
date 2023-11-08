

export default function ItemDetail({ producto }) {

  const formatPrice = producto?.price?.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})

  return (
    <article className="bg-white rounded p-5">
        <div className="flex gap-10">
          <div className="w-2/3 flex justify-center">
            <img
              src={ producto?.image }
              alt={`${producto?.title} image`}
              className="rounded max-w-[400px]"/>
          </div>

          <div className="w-1/3 space-y-6">
            
            <h2 className="text-2xl font-bold text-red-900">{ producto?.title }</h2>
            
            <p className="text-3xl font-bold">{ formatPrice }</p>
            
            <button
              type="button"
              className="w-full bg-blue-900 text-white py-2 rounded font-semibold text-lg hover:bg-blue-700">
                Comprar
            </button>
          </div>
        </div>

        <div className="py-10">
          <h5 className="text-xl font-semibold pb-5">Descripción del producto</h5>
          <p>{ producto?.description }</p>
        </div>
      </article>
  )
}
