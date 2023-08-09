import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Inicio from "./pages/Inicio";
import Nosotros from "./components/Nosotros";
import Error from "./components/Error";
import Contacto from "./components/Contacto";
import Venta from "./components/Venta";
import Productos from "./components/Productos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}>
            <Route path="/" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/venta" element={<Venta />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
