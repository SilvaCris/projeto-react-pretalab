import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./componentes/Footer"
import Menu from "./componentes/Menu"
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Comentarios from './pages/Comentarios'
import Contato from './pages/Contato'

function App() {
 
   

  return (     
   <BrowserRouter>

      <Menu/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/comentarios" element={<Comentarios />} />
      <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>

      </BrowserRouter>
      
      
  
  )
}

export default App
