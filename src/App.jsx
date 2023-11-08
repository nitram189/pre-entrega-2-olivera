import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, ItemDetailContainer, ItemListContainer, NotFound } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
