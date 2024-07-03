import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function MenuItemList({ items, handleAddItemClick }) {
  return (
    <div
      className="section-center 
        w-screen 
        my-0 mx-auto max-w-6xl
        grid 
        gap-y-12 gap-x-8 
        justify-items-center
        xl:w-screen
        xl:grid-cols-4
        pt-52
        "
    >
      {items.map((item) => (
        <MenuItem
          item={item}
          key={item.id}
          handleAddItemClick={() => handleAddItemClick(item)}
          // deleteItemClick={deleteItemClick}
        />
      ))}
    </div>
  );
}
MenuItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  handleAddItemClick: PropTypes.func.isRequired,
};

export default MenuItemList;
