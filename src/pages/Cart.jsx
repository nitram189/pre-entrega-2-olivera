import { Link } from 'react-router-dom';
import { useTienda } from '../hooks/useTienda';
import { CartItem } from '../components';

export default function Cart() {

  const { cartItems, handleEmptyCart } = useTienda();

  return (
    <main className='w-full h-full bg-gray-800'>

      <section className='w-full'>
        <div className='absolute w-full h-[300px] bg-gradient-to-b from-black/70 to-black/60'></div>

        <img
          src='https://i.ibb.co/hC9XGgZ/pexels-cottonbro-studio-3094041.jpg'
          alt='Imagen fondo carrito de compras'
          className='w-full h-[300px] object-cover'
        />

        <div className='absolute top-40 lg:left-28'>
          <h2 className="text-5xl lg:text-6xl font-bold text-red-300 p-10" data-aos="fade-right">Carrito de compras</h2>
        </div>
      </section>

      <div className='w-5/6 mx-auto'>
        <section className='p-10'>

          {cartItems.length === 0
            ? <div className='flex flex-col gap-6 items-center p-10'>
              <p className='text-red-300 text-lg font-medium'>Ups! Tu carrito esta vacio :/</p>
              <Link
                to='/'
                className='bg-gray-700 text-red-100 py-2 px-5 rounded font-semibold text-lg hover:text-red-300 ease-in-out duration-300'
              >
                Volver al inicio
              </Link>
            </div>

            : <div className='space-y-5'>
              <ul className='space-y-4'>
                {cartItems?.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </ul>
              
              <div className='flex gap-10'>

                <button
                  type='button'
                  onClick={() => handleEmptyCart()}
                  className='bg-gray-700 text-red-100 py-2 px-5 rounded font-semibold text-lg hover:text-red-300 ease-in-out duration-300'
                >
                  Vaciar carrito
                </button>

                <Link
                  to='/checkout'
                  className={`px-10 py-2 text-lg  font-bold border border-gray-700 rounded bg-indigo-700 ${cartItems?.length === 0 ? 'text-gray-500' : 'text-white hover:bg-indigo-600 cursor-pointer ease-in-out duration-300'}`}
                  disabled={cartItems?.length === 0 ? false : true}
                >
                  Checkout
                </Link>
              </div>
            </div>
          }
        </section>
      </div>
    </main>
  )
}
