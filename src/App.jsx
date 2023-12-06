import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart, Footer, Header, ItemDetailContainer, NotFound } from './components'
import { Checkout, Home, Laminadoras, Nosotros, Productos, Tornetas } from './pages'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/tornetas' element={<Tornetas />}/>
        <Route path='/laminadoras' element={<Laminadoras />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
