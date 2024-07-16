import MenuItemList from "./components/MenuItemList";
import "./App.css";
import FilterButton from "./components/FilterButton";
import { useEffect, useState } from "react";
import Title from "./components/Title";
import ShoppingCart from "./components/ShoppingCart";
import ConfirmationMessage from "./components/ConfirmationMessage";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";

function App() {
  const [items, setItems] = useState([]);
  const [currFilter, setCurrFilter] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  // const stateActive = ()={}

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      setItems(data);
    }
    fetchItems();
  }, []);

  const addSameItem = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    });
  };

  const deleteSameItem = (id) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (item.count === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  };

  const sendItemClick = async () => {
    const response = await fetch("http://localhost:3000/orders", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cartItems),
    });

    if (!response.ok) {
      throw new Error("FAILED ORDER CREATION");
    }

    setCartItems([]);
    setShowConfirmation(true);
  };

  const handleAddItemClick = (item) => {
    setCartItems((prevItems) => {
      if (prevItems.filter((i) => i.id === item.id).length) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  const deleteItemClick = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const categories = items.reduce(
    (values, item) => {
      for (const c of item.category) {
        if (!values.includes(c)) {
          values.push(c);
        }
      }

      return values;
    },
    ["all"]
  );

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setCartItems([]);
  };

  return (
    <main className="font-sans bg-gray-600 text-gray-500 leading-6 text-sm min-h-screen">
      <section className="menu bg-orange pb-12 px-0 min-h-screen">
        <div className="bg-red-900 h-40 flex items-center flex-col space-y-2.5 fixed w-full z-10">
          <div>
            <Title />
          </div>

          <div className="btn-container hover:bg-opacity-50 mb-16 flex justify-center items-baseline flex-row">
            <div className="flex justify-center flex-grow">
              {categories.map((c, index) => (
                <FilterButton
                  category={c}
                  key={index}
                  setCurrFilter={setCurrFilter}
                />
              ))}
            </div>

            <ShoppingCart
              cartItems={cartItems}
              deleteItemClick={deleteItemClick}
              sendItemClick={sendItemClick}
              addSameItem={addSameItem}
              deleteSameItem={deleteSameItem}
              setShowSignupForm={setShowSignupForm}
            />
          </div>
        </div>

        <MenuItemList
          items={items.filter(
            (i) => i.category.includes(currFilter) || currFilter === "all"
          )}
          item={items}
          handleAddItemClick={handleAddItemClick}
        />
      </section>
      {showSignupForm && <SignupForm setShowSignupForm={setShowSignupForm} />}
      <ConfirmationMessage
        show={showConfirmation}
        onClose={handleCloseConfirmation}
      />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
