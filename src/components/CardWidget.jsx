import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function CartWidget() {

  return (
    <div className='flex items-center gap-2 text-red-400'>

      <AiOutlineShoppingCart
        size={23}
        className='text-cerise-red-200'/>

      <p className='text-lg font-semibold text-cerise-red-200'>4</p>
    
    </div>
  )
}
