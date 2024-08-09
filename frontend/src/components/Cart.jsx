import CartItem from "./CartItem";
import PropTypes from "prop-types";

function Cart({
  items,
  deleteItemClick,
  sendItemClick,
  addSameItem,
  deleteSameItem,
  cartItems,
}) {
  return (
    <div className="flex flex-col justify-start items-center bg-red-900 rounded-md mt-3 p-1 pb-2  overflow-y-scroll h-96 custom-scrollbar fixed right-10 top-40 shadow-md border-amber-600 border-2">
      <h3 className=" text-amber-400 font-bold text-lg  first-letter:uppercase mt-2">
        carrito de compras
      </h3>

      {items.length === 0 ? (
        <div className="emptyCart flex flex-col ml-1  mt-2 text-sm mb-2">
          <h2 className=" text-amber-600 first-letter:uppercase mb-2">
            tu carrito está vacío.
          </h2>
          <p className="text-xs text-amber-500 first-letter:uppercase">
            no tienes productos agregados a tu carrito de compras.
          </p>
        </div>
      ) : (
        <div className="fullCart  w-4/5 mx-4  ">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              deleteItemClick={deleteItemClick}
              addSameItem={addSameItem}
              deleteSameItem={deleteSameItem}
              // Pasa las funciones addSameItem, deleteSameItem, deleteItemClick y sendItemClick aquí
            />
          ))}
          <div className="finalProduct flex justify-around font-medium items-start ">
            <div>
              <p className="text-white  bg-red-950 rounded-md py-1 px-1 mr-1 text-center">
                Total productos:
              </p>
              <p className="bg-white rounded-md text-center mr-1 mt-1 text-black">
                {cartItems.reduce((acc, curr) => acc + curr.count, 0)}
              </p>
            </div>

            <button
              className="first-letter:uppercase text-white bg-red-950 rounded-md px-1 py-1 "
              name="buyItem"
              type="button"
              onClick={sendItemClick}
            >
              realizar pedido:
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteItemClick: PropTypes.func.isRequired,
  sendItemClick: PropTypes.func.isRequired,
  addSameItem: PropTypes.func.isRequired,
  deleteSameItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cart;
