import React, { useState, useContext } from "react";
import axios from "axios";
// more components
// fix - context api, redux (for more complex cases)

const AppContext = React.createContext();
// two components - Provider, Consumer

const AppProvider = ({ children }) => {
  const [person, setPerson] = useState({
    accountName: "",
    email: "",
    phoneNumber: "",
    otp: "",
    seeVisualAd: false,
    password: "",
    role: "promoter",
    socialLink: "",
    reference_id: "",
  });
  const [people, setPeople] = useState([]);
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://52.21.78.11/api/v1/auth/signup",
        person
      );
      console.log(data);
      console.log(person);
      setMessage(data);
      return data;
    } catch (error) {
      console.error(error);
      setMessage(error.response.data);
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://52.21.78.11/api/v1/auth/send-otp",
        {
          phoneNumber: person.phoneNumber,
        }
      );
      console.log(data);
      person.reference_id = data.data.reference_id;
      console.log(person);
      setMessage(data);
      console.log(message);
      return data;
    } catch (error) {
      console.error(error);
      setMessage(error.response.data);
    }
  };
  return (
    <AppContext.Provider
      value={{ handleChange, createUser, sendOtp, person, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
