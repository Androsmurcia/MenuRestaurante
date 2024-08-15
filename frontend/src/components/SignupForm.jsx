import { useState } from "react";
import PropTypes from "prop-types";

function SignupForm({ setShowSignupForm, setUserInfo }) {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [celphone, setCelPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      name,
      address,
      description,
      celphone,
      mail,
    };

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUserInfo(data);
        setShowSignupForm(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setUserInfo(userInfo);
    setShowSignupForm(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col w-4/12 pl-3 py-4 items-center border-2 border-red-950 border-solid bg-red-900 text-white "
        >
          <div className="absolute top-0 right-4 mt-1">
            <button
              className="text-white"
              onClick={(e) => {
                e.preventDefault();
                setShowSignupForm(false);
              }}
            >
              x
            </button>
          </div>
          <h3 className="text-lg">Datos de usuario</h3>
          <label htmlFor="name">Name:</label>
          <input
            className={`w-4/5  focus:bg-blue-100 pl-2 text-black ${
              name ? "bg-green-100" : ""
            }`}
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="address">Address:</label>
          <input
            required
            className={`w-4/5  focus:bg-blue-100 pl-2 text-black ${
              address ? "bg-green-100" : ""
            }`}
            type="text"
            id="address"
            name="address"
            onChange={(e) => setAdress(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            required
            className={`p-3 w-4/5  focus:bg-blue-100 pl-2  resize-none text-black ${
              description ? "bg-green-100" : ""
            }`}
            name="description"
            id="description"
            rows="4"
            cols="40"
            placeholder="To ensure your order arrives smoothly, could you please describe your house? Details like the entrance or any landmarks would help a lot. Thanks! "
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="phone">Celphone:</label>
          <input
            required
            className={`w-4/5  focus:bg-blue-100 pl-2 text-black ${
              celphone ? "bg-green-100" : ""
            }`}
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setCelPhone(e.target.value)}
          />
          <label htmlFor="mail">Email:</label>
          <input
            required
            className={`w-4/5  focus:bg-blue-100 pl-2 text-black ${
              mail ? "bg-green-100" : ""
            }`}
            type="mail"
            id="mail"
            name="mail"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="submit"
            value="Save Info"
            className=" border-solid border-cyan-600 border-2 rounded mt-3 px-2 py-1 hover:bg-cyan-600 hover:text-white  "
          />
        </form>
      </div>
    </>
  );
}
SignupForm.propTypes = {
  setShowSignupForm: PropTypes.func.isRequired,
  setUserInfo: PropTypes.func.isRequired,
};

export default SignupForm;
