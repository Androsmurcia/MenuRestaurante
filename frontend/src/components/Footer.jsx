function Footer() {
  return (
    <>
      <div className="flex flex-col items-center text-white bg-pink">
        <section className="relative py-8 w-full bg-cover bg-center h-56 text-2xl flex justify-center items-center bg-restauranteImg">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 first-letter:uppercase text-white">
            descubre el sabor auténtico en cada bocado, ¡platos deliciosos y
            accesibles para todos!
          </div>
        </section>
        <nav className="m-10 w-full capitalize bg-[#d97706]  text-white">
          <ul className="flex flex-row justify-center my-3">
            <li className="mx-4  flex items-center">
              <a href="#">escribenos</a>
            </li>
            <li className="mx-4  flex items-center">
              <a href="#">preguntas frecuentes</a>
            </li>
            <li className="mx-4  flex items-center">
              <a href="#">trabaja con nosotros</a>
            </li>
            <li className="mx-4  flex items-center">
              <a href="#">información de interés</a>
            </li>
            <li className="mx-4  flex items-center">
              <a href="#">facturacion electronica</a>
            </li>
            <li className="mx-4  flex items-center">
              <a href="#">contactanos</a>
            </li>
          </ul>
        </nav>
        <div className="mb-5 px-2 w-full flex justify-center">
          <div>©2024 </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
