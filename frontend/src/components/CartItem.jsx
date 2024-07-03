// CartItem.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CartItem = ({ item, addSameItem, deleteSameItem, deleteItemClick }) => {
  return (
    <div key={item.id} className=" overline mt-1 color text-amber-500">
      <h4 className="text-2xl text-white mb-2 capitalize">{item.title}</h4>
      <h4 className="text-white mb-2">{item.price}</h4>

      <div className="flex flex-row justify-between w-1/2 rounded items-center shadow-lg mb-2 text-white">
        <button
          className="p-1 px-2 rounded shadow-lg hover:shadow-white"
          onClick={() => addSameItem(item.id)}
          name="addSameItem"
          type="button"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>

        <p className="p-1 mx-2">{item.count}</p>
        <button
          className="p-1 px-2 rounded shadow-lg hover:shadow-white"
          onClick={() => deleteSameItem(item.id)}
          name="deleteSameItem"
          type="button"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>

      <button
        className="capitalize underline text-white"
        onClick={() => deleteItemClick(item.id)}
        name="deleteItem"
        type="button"
      >
        eliminar
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  addSameItem: PropTypes.func.isRequired,
  deleteSameItem: PropTypes.func.isRequired,
  deleteItemClick: PropTypes.func.isRequired,
};

export default CartItem;
