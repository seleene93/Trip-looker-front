import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { IniciarSesion } from "./components/views/iniciarSesion";
import { Login } from "./components/views/login";
import { Registro } from "./components/views/registro";
import { Experiencias } from "./components/views/experiencias";
import { NotFound } from "./components/notFound";
import { About } from "./components/views/conocenos";
import { Detalle } from "./components/views/detalle";
import { ExperienciasUsuario } from "./components/views/experienciasUsuario";
import { Publicar } from "./components/views/publicar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nuevo-post" element={<Publicar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/post/:id" element={<Detalle />} />
        <Route path="/mis-experiencias/:id" element={<ExperienciasUsuario />} />
        <Route path="/conocenos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
