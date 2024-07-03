import PropTypes from "prop-types";

function FilterButton({ category, setCurrFilter }) {
  return (
    <button
      onClick={() => setCurrFilter(category)}
      type="button"
      className="filter-btn text-[#E69980] rounded
                    bg-trasparent
                    border-[#d97706]
                    text-base
                    capitalize
                    margin
                    tracking-wider
                    py-1 px-3
                    pointer
                    ease-out duration-700
                    hover:bg-red-600 hover:text-white      
                    "
    >
      {category}
    </button>
  );
}
FilterButton.propTypes = {
  category: PropTypes.string,
  setCurrFilter: PropTypes.func,
};

FilterButton.defaultPros = {
  category: "default category",
};

export default FilterButton;
