import { Link } from "react-router-dom";


export default function SectionHome({ titulo, descripcion, linkText, imagen, bgColor }) {
  return (
    <section className={`w-full ${ bgColor } py-16`}>

        <div className="md:flex items-center gap-10 w-5/6 mx-auto h-full">

          <div className="text-white md:w-1/2 space-y-3" data-aos="fade-right">
            <h4 className="text-5xl font-bold capitalize">{ titulo }</h4>
            <p className="xl:text-xl">{ descripcion }</p>

            <div className="pt-3">
              <Link
                to={`/${ titulo }`}
                className="px-3 py-2 rounded font-semibold bg-orange-50 text-red-800 hover:bg-orange-100 duration-200 ease-in-out">
                  { linkText }
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:py-0 pt-10">
            <img
              src={ imagen }
              alt={`Imagen correspondiente a ${ titulo }`}
              className='rounded-lg max-w-[400px] object-cover'
            />
          </div>
        </div>
      </section>
  )
}
