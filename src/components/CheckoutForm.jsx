import { Link } from "react-router-dom";
import { useTienda } from "../hooks/useTienda"
import { formattedPrice } from "../services"

export default function Form({ handleSubmit, handleUserData, userData, orderId }) {

  const { cartItemsNumber, total } = useTienda();

  return (
    <section className="w-full bg-gray-800">

      <div className="pt-5 pb-16 w-5/6 mx-auto">

        <div className='flex'>

          <form
            onSubmit={handleSubmit}
            className="w-1/2 py-4">

            <div className="space-y-6">
              <div className='space-y-4'>
                <h5 className='text-xl font-semibold text-red-100 border-b'>Ingresá tus datos</h5>
                <input
                  type="text"
                  name='nombre'
                  value={userData.nombre}
                  onChange={(e) => { handleUserData(e) }}
                  placeholder="Nombre"
                  className="p-2 rounded w-full"
                  maxLength={20} />

                <input
                  type="tel"
                  name='tel'
                  value={userData.tel}
                  onChange={(e) => { handleUserData(e) }}
                  placeholder="Número de teléfono"
                  className="p-2 rounded w-full"
                  maxLength={16} />

                <input
                  type="email"
                  name='email'
                  value={userData.email}
                  onChange={(e) => { handleUserData(e) }}
                  placeholder="Email"
                  className="p-2 rounded w-full" />
                <input
                  type="email"
                  name='remail'
                  value={userData.remail}
                  onChange={(e) => { handleUserData(e) }}
                  placeholder="Confirma tu email"
                  className="p-2 rounded w-full" />
              </div>

              <div className='space-y-4'>
                <h5 className='text-xl font-semibold text-red-100 border-b'>Datos de la tarjeta</h5>

                <div className='flex flex-col'>
                  <label htmlFor="numeros" className='text-red-100 text-sm pb-1'>
                    Números de la tarjeta</label>

                  <input
                    type="text" id='numeros'
                    maxLength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={userData.numeros}
                    name='numeros'
                    onChange={(e) => { handleUserData(e) }}
                    className='p-2 rounded w-full'
                  />
                </div>

                <div className='flex gap-10'>

                  <div className='flex flex-col w-1/3'>

                    <label htmlFor="vto" className='text-red-100 text-sm pb-1'>Vencimiento</label>

                    <input type="text" id='vto' maxLength="7"
                      placeholder="xx / xx" className='p-2 rounded'
                      name='vto'
                      value={userData.vto}
                      onChange={(e) => { handleUserData(e) }}
                    />
                  </div>

                  <div className='flex flex-col w-1/3'>
                    <label htmlFor="seg" className='text-red-100 text-sm pb-1'>Cód. de seg</label>

                    <input type="text" id='seg'
                      maxLength="3" placeholder="xxx" className='p-2 rounded'
                      value={userData.seg}
                      name='seg'
                      onChange={(e) => { handleUserData(e) }}
                    />
                  </div>
                </div>

              </div>

              <button
                type='submit'
                className="py-2 w-full rounded font-bold text-lg bg-orange-50 text-red-800 hover:bg-orange-100 duration-200 ease-in-out"
              >
                Comprar
              </button>
            </div>
          </form>

          <div className='w-1/2 py-4 px-10'>
            {orderId

              ? <div className="space-y-10">
                
                  <div className="space-y-5">
                    <p className="text-red-100 text-xl font-medium">Muchas gracias por la compra!<br />Tu número de orden es:<br/></p>
                    <h5 className="font-semibold text-red-300 text-xl border border-red-200 text-center rounded-md py-2 w-full">{orderId}</h5>
                  </div>
                  
                  <div>
                    <Link
                      to='/'
                      className='bg-gray-700 text-red-100 py-2 px-5 rounded font-semibold text-lg hover:text-red-300 ease-in-out duration-300'
                    >
                      Volver al inicio
                    </Link>
                  </div>
                </div>

              : <aside className='border-b'>

                <h5 className='text-xl font-semibold text-red-100 border-b'>Resumen</h5>

                <p className='text-red-200 font-semibold text-xl py-5'>Cantidad de piezas:{' '}
                  <span>{cartItemsNumber}</span>
                </p>

                <p className='text-red-200 font-semibold text-xl pb-3'>Total a pagar:{' '}
                  <span>{formattedPrice(total)}</span>
                </p>
              </aside>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

