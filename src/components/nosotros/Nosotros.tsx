import "../nosotros/Nosotros.scss";
import soldador from "../../assets/img/Soldador.jpeg";
import viejito from "../../assets/img/viejito.jpeg";
import taladroDeBanco from "../../assets/img/taladroDeBanco.jpeg";

function Nosotros() {
  return (
    <div className="boxNosotros">
      <div className="boxImg">
        <div className="imgColumna">
          <div className="img1">
            <img src={soldador} alt="" />
          </div>
          <div className="img2">
            <img src={viejito} alt="" />
          </div>
        </div>

        <div className="imgGrande">
          <div className="img3">
            <img src={taladroDeBanco} alt="" />
          </div>
        </div>
      </div>

      <div className="nosotrosCard">
        <h2 className="tituloNosotros"> Sobre nosotros</h2>
        <p>
          Somos una empresa con base en Villa Mercedes, San Luis, dedicada a la
          reparación, diseño y fabricación de equipos industriales.
        </p>
        <p>
          Con más de 30 años de experiencia en el rubro, nos destacamos por
          ofrecer soluciones de alta calidad, adaptadas a las necesidades de
          cada cliente.
        </p>
        <p>
          Nuestro compromiso con el profesionalismo y la excelencia nos ha
          convertido en un referente en el sector. Cada proyecto que abordamos
          lleva el sello de nuestra trayectoria, pasión y conocimiento técnico.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
