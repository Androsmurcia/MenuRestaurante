function Footer() {
  return (
    <>
      <div className="flex flex-col items-center text-white bg-pink">
        <section className="my-8 w-full text-2xl flex justify-center ">
          <div className="first-letter:uppercase">
            descubre el sabor auténtico en cada bocado, ¡platos deliciosos y
            accesibles para todos!
          </div>
        </section>
        <nav className="m-8 w-full capitalize bg-[#d97706]  text-white">
          <ul className="flex flex-row justify-center my-3">
            <li className="mx-4  flex items-center">
              {" "}
              <a href="#">escribenos</a>{" "}
            </li>
            <li className="mx-4  flex items-center">
              <a href="#"></a>preguntas frecuentes
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
