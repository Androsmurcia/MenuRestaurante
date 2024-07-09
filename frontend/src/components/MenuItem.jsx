import PropTypes from "prop-types";

function MenuItem({ item, handleAddItemClick }) {
  return (
    <>
      <article
        className="menu-item 
      flex
      flex-col
      flex-grow
      flex-shrink
      basis-1/4
      w-full
      max-w-xs          
      gap-y-4
      md:max-w-md
      md:gap-y-5
      
      "
      >
        <img
          src={item.img}
          alt={item.title}
          className="photo
          w-full 
          object-cover 
          border-4 border-solid border-[#d97706] 
          rounded
          h-24
          md:h-44
          xl:h-36 xl:rounded-md"
        />

        <div className="item-info md:mt-3.5">
          <header
            className="flex 
            justify-between 
            flex-col
            border-b-2 
            border-dotted
             border-gray-300"
          >
            <div className="flex flex-row justify-between ">
              <h4 className="text-4x1 text-[#d97706] font-semibold mb-2 capitalize ">
                {item.title}
              </h4>
              <h4 className="price text-[#d97706] mb-2">${item.price}</h4>
            </div>

            <button
              onClick={() => handleAddItemClick(item)}
              name="addShoppingCart "
              type="button"
              className="inline-flex items-center capitalize bg-pink text-white rounded-lg px-2 py-1 my-2"
            >
              agregar al carrito
            </button>
          </header>
          <p className="item-text text-[#9c543c] text mb-0 pt-4 first-letter:uppercase">
            {item.desc}
          </p>
        </div>
      </article>
    </>
  );
}
MenuItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    desc: PropTypes.string.isRequired,
  }).isRequired,
  handleAddItemClick: PropTypes.func.isRequired,
};

export default MenuItem;
