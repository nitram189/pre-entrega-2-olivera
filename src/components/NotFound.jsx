import { Link } from "react-router-dom";


export default function NotFound() {

  return (
    <main className="h-screen">
      <h5>Pagina no encontrada</h5>
      <Link to='/'>
        Volver al inicio
      </Link>
    </main>
  )
}
