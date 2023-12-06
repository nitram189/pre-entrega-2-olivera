import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import CartWidget from "./CardWidget";
import { useTienda } from "../hooks/useTienda";

const ENLACES = [
  { id: 1, link: 'productos' },
  { id: 2, link: 'tornetas' },
  { id: 3, link: 'laminadoras' },
  { id: 4, link: 'nosotros' },
]

export default function Navbar() {

  const { cartItems } = useTienda();

  return (
    <nav>

      <ul className="flex gap-5">
        { ENLACES?.map(({id, link}) => (
          <li
            key={ id }>
            <NavLink
              to={`/${ link }`}
              className={({ isActive }) => (`text-red-300 text-lg font-medium hover:text-red-200 py-1 ${isActive ? 'border-b border-red-200 text-red-200' : ''}`)}>
                { link }
            </NavLink>
          </li>
        ))
        }
        { cartItems.length === 0 
          ? null 
          : <CartWidget />}
      </ul>
    </nav>
  )
}
