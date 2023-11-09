import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";


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
            <NavLink
              to={`/${ categoria }`}
              className={({ isActive }) => (`text-red-400 text-lg font-medium hover:text-red-200 py-1 px-5 ${isActive ? 'border rounded border-red-200 text-red-200' : ''}`)}>
                { categoria }
            </NavLink>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
