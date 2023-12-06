import { ItemListContainer } from '../components'

export default function Tornetas() {
  return (
    <main className='w-full h-full'>
      <section className='w-full'>
        <div className='absolute w-full h-[300px] bg-gradient-to-b from-black/80 to-black/30'></div>

        <img
          src='https://i.ibb.co/g9pycD8/torneta-feizer.jpg'
          alt='Imagen fondo Tornetas'
          className='w-full h-[300px] object-cover'
          />

        <div className='absolute top-40 lg:left-28'>
          <h2
            className="text-5xl lg:text-6xl font-bold text-red-300 p-10"
            data-aos="fade-right">Tornetas</h2>
        </div>
      </section>
      
      <ItemListContainer categoriaId='tornetas'/>

    </main>
  )
}
