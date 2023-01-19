import { useGlobalContext } from "./context";
import React from "react";

const OtpScreen = () => {
  const props = useGlobalContext();
  return (
    <>
      <article className="form">
        <form action="send-otp" onSubmit={props.sendOtp}>
          <div className="form-control">
            <label htmlFor="socialLink">OTP : </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={props.person.otp}
              onChange={props.handleChange}
            />

            <button type="submit" onClick={(e) => props.createUser(e)}>
              Verify
            </button>
          </div>
        </form>
        <button onClick={(e) => props.sendOtp(e)}>Resend OTP</button>
      </article>
    </>
  );
};

export default OtpScreen;
