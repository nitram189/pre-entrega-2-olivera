import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useTienda } from '../hooks/useTienda'
import { Link } from 'react-router-dom';

export default function CartWidget() {

  const { cartItemsNumber } = useTienda();
  
  return (
    <Link
      to='/cart'
      className='flex items-center gap-2 text-red-300'>

      <AiOutlineShoppingCart
        size={23}
        className='text-cerise-red-200'/>

      <p className='text-lg font-semibold text-cerise-red-200'>
        {cartItemsNumber}
      </p>
    
    </Link>
  )
}
