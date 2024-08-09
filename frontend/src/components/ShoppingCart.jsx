import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

function ShoppingCart({
  cartItems,
  deleteItemClick,
  sendItemClick,
  addSameItem,
  deleteSameItem,
  setShowSignupForm,
}) {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between ml-4 fixed right-10">
        <div className="nav-car flex flex-row justify-center items-center space-x-4 pb-10 text-2xl">
          <button
            className="font-normal text-gray-400 bg-red-900 border-[#d97706] border-solid border rounded-sm px-2 py-1 hover:text-white"
            title="Sign Up"
            onClick={(e) => {
              e.preventDefault();
              setShowSignupForm(true); // pasa el estado de false a true, entonces muestra el componete SignupForm
            }}
          >
            Sign up
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowCart((prev) => !prev); // Alterna el estao true a false o de false a true
            }}
            className="relative flex flex-column justify-between pt-3 pr-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-white"
            title="Carrito de compras"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="absolute top-0 right-0  mt-1 bg-[#d97706]/90 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {cartItems.reduce((acc, curr) => acc + curr.count, 0)}
            </span>
          </button>
          <button
            className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              const urlYoutube = "https://www.youtube.com/";
              window.open(urlYoutube, "_blank");
            }}
            title="Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} className="pt-3" />
          </button>
          <button
            className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-white"
            title="GitHub: Andrew Murcia"
            onClick={(e) => {
              e.preventDefault();
              const url = "https://github.com/Androsmurcia";
              window.open(url, "_blank");
            }}
          >
            <FontAwesomeIcon icon={faGithub} className="pt-3" />
          </button>
        </div>
      </div>
      {showCart && (
        <Cart
          items={cartItems}
          deleteItemClick={deleteItemClick}
          sendItemClick={sendItemClick}
          addSameItem={addSameItem}
          deleteSameItem={deleteSameItem}
          cartItems={cartItems}
        />
      )}
    </>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteItemClick: PropTypes.func,
  sendItemClick: PropTypes.func,
  addSameItem: PropTypes.func,
  deleteSameItem: PropTypes.func,
  setShowSignupForm: PropTypes.func.isRequired,
};

export default ShoppingCart;
