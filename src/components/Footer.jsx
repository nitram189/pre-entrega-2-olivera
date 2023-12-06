import { Link } from "react-router-dom";
import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-orange-50 w-full py-10">

      <div className="w-5/6 mx-auto sm:flex">

        <ul className="sm:flex gap-3 justify-evenly w-3/5">
          {footerLinks.map((link) => (

            <li
              key={link.title}
              className="flex flex-col gap-3">
              <h5 className="text-sm uppercase font-bold text-red-800">{link.title}</h5>
              {link.links.map((link) => (
                <Link
                  key={link.title}
                  to={link.url}
                  target="_blank"
                  className="text-xs font-medium uppercase text-red-600 hover:text-red-400 transition ease-in duration-200 last-of-type:mb-6"
                >
                  {link.title}
                </Link>
              ))}
            </li>
          ))}
        </ul>

        <div className="text-red-800 font-semibold sm:w-2/5 flex items-center justify-center flex-col gap-2 sm:pb-0 pb-5">
          <h4 className="text-xs uppercase text-center">
            © 2023 - Feizer
          </h4>
          <p className="text-xs uppercase text-center">Todos los derechos reservados</p>

        </div>
      </div>

      <div className="border-t border-red-900 w-5/6 mx-auto">
        <p className="text-xs text-center pt-5 text-red-800 font-medium">Sitio web desarrollado por {' '}
          <Link
            to='https://portfolio-martin-olivera.vercel.app/'
            target="_blank"
            className="text-red-950">
            Martin Olivera
          </Link>
      </p>
      </div>

    </footer>
  )
}
