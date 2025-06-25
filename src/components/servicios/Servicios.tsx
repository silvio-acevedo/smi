import { useEffect, useState } from "react";
import "../servicios/Servicios.scss";
import Servicios from "./ServiciosArray";
import type { Service } from "./ServiciosArray";

function ServiciosComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Servicios.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const irAlSlide = (nuevoIndex: number) => {
    setIndex(nuevoIndex);
  };

  return (
    <div className="boxServicios">
      <div className="carrousel">
        {Servicios.map((s: Service, i) => (
          <div className={`slide ${i === index ? "activo" : ""}`}>
            <img src={s.imagen} alt="{s.nombre}" />
            <div className="boxSlide">
              <h2>{s.nombre}</h2>
              <p>{s.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="indicadores">
        {Servicios.map((_, i) => (
          <span
            key={i}
            className={`punto ${i === index ? "activo" : ""}`}
            onClick={() => irAlSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ServiciosComponent;
