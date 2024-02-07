import { Button } from '../renderer/ui/button'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import NuevoProducto from './components/NuevoProducto'
import Start from './components/Start'
import Data from './components/Data'
function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Start />} />
        </Routes>
        <Routes>
          <Route path="/NuevoProducto" element={<NuevoProducto />} />
        </Routes>
        <Routes>
          <Route path="/Data" element={<Data />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

function NavBar() {
  return (
    <div className='flex flex-row justify-center gap-10 mt-5 mb-5'>
      <Link to="/">
        <Button>Inventario</Button>
      </Link>
      <Link to="/NuevoProducto">
        <Button>Nuevo Producto</Button>
      </Link>
      <Link to="/Data">
        <Button>Productos</Button>
      </Link>
    </div>
  )
}
