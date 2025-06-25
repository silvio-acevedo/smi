import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Nosotros from "./components/nosotros/Nosotros";
import Servicios from "./components/servicios/Servicios";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Nosotros />
      <Servicios />
    </BrowserRouter>
  );
}

export default App;
