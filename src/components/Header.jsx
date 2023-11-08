import { Link } from "react-router-dom";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="p-5 flex flex-col items-center gap-5 border-b border-red-500 w-5/6 mx-auto">
      <Link
        to='/'>
          <h1 className="text-5xl font-black text-red-400 text-center">tiendapp.</h1>
      </Link>

      <Navbar/>
    </header>
  )
}
