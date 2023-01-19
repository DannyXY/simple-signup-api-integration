import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ControlledInputs from "./4-forms/final/2-multiple-inputs";
import OtpScreen from "./4-forms/final/otp-screen";
function App() {
  return (
    <>
      <ControlledInputs />
      <OtpScreen />
    </>
  );
}

export default App
