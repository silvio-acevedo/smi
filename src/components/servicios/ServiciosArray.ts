export type Service = {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
};

const Servicios: Service[] = [
  {
    id: 1,
    nombre: "Fabricación",
    descripcion:
      " Diseñamos, proyectamos y fabricamos diferentes equipos y máquinas para brindar soluciones innovadoras a nuestros clientes.",
    imagen:
      "https://i.pinimg.com/736x/32/29/54/3229548fbb7c0785bc718da5f64a54ca.jpg",
  },
  {
    id: 2,
    nombre: "Mantenimiento",
    descripcion:
      " Realizamos reparaciones y mantenimiento de equipamientos industriales. El equipo a reparar recorre un proceso donde la precisión y la calidad son fundamentales.",
    imagen:
      "https://i.pinimg.com/736x/e9/1e/be/e91ebe902a837700800fbdc36b1bf565.jpg",
  },
  {
    id: 3,
    nombre: "Diseño",
    descripcion:
      "Realizamos diseños 3D y fabricación de equipamientos y respuestos industriales.",
    imagen:
      "https://i.pinimg.com/736x/b7/39/aa/b739aad162f9700077e77817388927ba.jpg",
  },
  {
    id: 4,
    nombre: "Bombas SMI",
    descripcion:
      "Nuestra empresafabrica Bombas con el sello SMI, brindando calidad y garantía certificada.",
    imagen:
      "https://i.pinimg.com/736x/25/40/eb/2540eba10b62548c89e5f1068d76275e.jpg",
  },
];

export default Servicios;
