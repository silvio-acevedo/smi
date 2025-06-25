import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logoSMI.jfif.png";
import { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const cerrarMenu = () => setMenuVisible(false);

  return (
    <>
      <div className="boxHeader">
        <div className="boxLogo">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="boxLogo" />
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className={`abrirBurger ${menuVisible ? "oculto" : ""}`}
        >
          <BsChevronDoubleLeft />
        </button>

        <div className={`navegacion ${menuVisible ? "visible" : ""}`}>
          <button onClick={cerrarMenu} className="cerrarBurger">
            <BsChevronDoubleRight />
          </button>
          <ul>
            <li>
              <Link to={"/nosotros"}>Nosotros</Link>
            </li>
            <li>
              <Link to={"/servicios"}>Servicios</Link>
            </li>
            <li>
              <Link to={"/proyectos"}>Proyectos</Link>
            </li>
            <li>
              <Link to={"/contactos"}>Contactos</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
