import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { Experiencias } from "./components/views/experiencias";
import { NotFound } from "./components/notFound";
import { About } from "./components/views/conocenos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/conocenos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
