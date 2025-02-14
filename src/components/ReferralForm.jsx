import axios from "axios";
import { useEffect, useState } from "react";
let myapi = import.meta.env.VITE_MY_API

const ReferralForm = ({ onClose }) => {
  const [Data, setData] = useState({
    userName: "",
    Mobileno: "",
    YourEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Data.userName || !/^\d{10}$/.test(Data.Mobileno) || (!Data.YourEmail) || !Data.refereeName || !Data.refereeEmail ){
      alert("Fill the form correctly")
    }
    try {
      const res = await axios.post(myapi,Data)
      console.log("res", res.data)
    } catch (error) {
      console.error("Error", error)
    }
    console.log("Form Submitted:");
    setData({
      userName: "",
      Mobileno: "",
      YourEmail: "",
      refereeName: "",
      refereeEmail: "",
    })
    ;
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-[#2D2D2D5B]">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
        <h2 className="text-xl font-semibold text-center mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={Data.userName}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="text"
            name="Mobileno"
            value={Data.Mobileno}
            onChange={handleChange}
            placeholder="Mobile No."
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="email"
            name="YourEmail"
            value={Data.YourEmail}
            onChange={handleChange}
            placeholder="Your Email"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="text"
            name="refereeName"
            value={Data.refereeName}
            onChange={handleChange}
            placeholder="Referee Name"
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="email"
            name="refereeEmail"
            value={Data.refereeEmail}
            onChange={handleChange}
            placeholder="Referee Email"
            className="border p-2 w-full mb-4"
            required
          />

          <button type="submit" className="bg-[#1A73E8] text-white w-full py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
