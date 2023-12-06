import ItemListContainer from "../components/ItemListContainer";


export default function Productos() {
  return (
    <main className='w-full h-full'>
    <section className='w-full'>
      <div className='absolute w-full h-[300px] bg-gradient-to-b from-black/80 to-black/30'></div>

      <img
        src='https://i.ibb.co/hWndVHc/istockphoto-985041468-612x612.jpg'
        alt='Imagen fondo Todos los productos'
        className='w-full h-[300px] object-cover'
        />

      <div className='absolute top-40 lg:left-28'>
        <h2 className="text-5xl lg:text-6xl font-bold text-red-300 p-10" data-aos="fade-right">Todos los productos</h2>
      </div>
    </section>
    
    <ItemListContainer categoriaId=''/>


  </main>
  )
}
