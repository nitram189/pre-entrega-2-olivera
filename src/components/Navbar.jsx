import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export default function Navbar() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias()
  }, [])

  const getCategorias = () => {
    const urlCateg = 'https://fakestoreapi.com/products/categories'
    return fetch(urlCateg)
            .then(res => res.json())
            .then(data => setCategorias(data))
  }

  return (
    <nav>

      <ul className="flex">
        { categorias?.map((categoria, index) => (
          <li
            key={ index }>
            <Link
              to={`/${ categoria }`}
              className={`text-red-300 text-lg font-medium hover:text-red-200 py-1 px-5`}>
                { categoria }
            </Link>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
