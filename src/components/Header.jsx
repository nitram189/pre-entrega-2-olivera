import { Link } from "react-router-dom";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <header className="p-5 absolute w-full z-10">
      <div className="flex justify-between items-center gap-5 mx-auto max-w-[1440px]">
        <Link
          to='/'>
            <h1 className="text-3xl font-black text-red-300 text-center">feizer.</h1>
        </Link>

        <Navbar/>
      </div>
    </header>
  )
}
