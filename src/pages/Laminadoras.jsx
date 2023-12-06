import { ItemListContainer } from "../components";


export default function Laminadoras() {
  return (
    <main className='w-full h-full'>
      <section className='w-full'>
        <div className='absolute w-full h-[300px] bg-gradient-to-b from-black/80 to-black/30'></div>

        <img
          src='https://i.ibb.co/jVDzBbp/pexels-quang-nguyen-vinh-2166456.jpg'
          alt='Imagen fondo Laminadoras'
          className='w-full h-[300px] object-cover'
          />

        <div className='absolute top-40 lg:left-28'>
          <h2 className="text-5xl lg:text-6xl font-bold text-red-300 p-10" data-aos="fade-right">Laminadoras</h2>
        </div>
      </section>
      
      <ItemListContainer categoriaId='laminadoras'/>


    </main>
  )
}
