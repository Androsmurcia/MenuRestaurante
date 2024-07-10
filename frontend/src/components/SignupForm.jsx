import { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  return (
    <>
      <form
        action=""
        className="flex flex-col w-4/12 pl-3 py-4 items-start border-2 border-white border-solid "
      >
        <h3 className="text-lg">Datos de usuario</h3>
        <label htmlFor="name">Name:</label>
        <input
          className={`w-4/5  focus:bg-blue-100 pl-2 ${
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
          className={`w-4/5  focus:bg-blue-100 pl-2 ${
            address ? "bg-green-100" : ""
          }`}
          type="text"
          id="address"
          name="address"
          onChange={(e) => setAdress(e.target.value)}
        />
        <label htmlFor="description">Descripción de lugar:</label>
        <textarea
          required
          className={`p-3 w-4/5  focus:bg-blue-100 pl-2  resize-none ${
            description ? "bg-green-100" : ""
          }`}
          name="description"
          id="description"
          rows="4"
          cols="40"
          placeholder="Si es casa describe brevemente como con el color para una entrega más pronta"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="phone">Celphone:</label>
        <input
          required
          className={`w-4/5  focus:bg-blue-100 pl-2 ${
            phone ? "bg-green-100" : ""
          }`}
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="mail">Email:</label>
        <input
          required
          className={`w-4/5  focus:bg-blue-100 pl-2 ${
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
          className=" border-solid border-cyan-900 border-2 rounded mt-3 px-2 py-1 hover:bg-cyan-600 hover:text-white "
        />
      </form>
    </>
  );
}

export default SignupForm;
