

export default function Hero() {
  return (
    <section className="w-full h-[700px]">
      <div className="w-full h-full">

        <div className="absolute bg-black/60 w-full h-[700px]"></div>
        <img
          src='https://i.ibb.co/XS2Js5m/15122021-DSC0054.jpg'
          alt='torneta fondo hero'
          className='w-full h-[700px] object-cover object-left'
        />
        
        <div className="absolute top-[35%] xl:left-20 w-full md:w-3/5 xl:w-2/5 p-10" data-aos="fade-right">
          
          <h2
            className="text-red-400 text-5xl xl:text-6xl font-bold py-5">
              Tornetas,<br/>laminadoras,<br/>y mucho más.</h2>
          
          <p className="text-lg xl:text-xl font-medium text-red-50">Ya seas principiante o experto en alfareria, en Feizer ofrecemos una gran variedad de productos para que lleves tu pasión por la ceramica al siguiente nivel.</p>
        </div>

      </div>
    </section>
  )
}
