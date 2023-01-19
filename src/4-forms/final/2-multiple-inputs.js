import React, { useState } from 'react';
import { Link, redirect } from "react-router-dom";
import { useGlobalContext } from "./context";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

/**
 * 
 * @todo
 * {
  "phoneNumber": "09043976827"
  }
  {
  "reference_id": "a3c44888-de9a-4503-bc4f-b3d9e9954204",
  "otp": "6254",
  "phoneNumber": "09043976827",
  "accountName": "Rashfraud",
  "socialLink": "twitter.com/rash",
  "seeVisualAd": true,
  "email": "rashfraud@gmail.com",
  "password": "november14,2002",
  "role": "placer"
}


 */

const ControlledInputs = () => {
  const { handleChange, createUser, sendOtp, person, message } =
    useGlobalContext();
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="accountName">Name : </label>
            <input
              type="text"
              id="accountName"
              name="accountName"
              value={person.accountName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="socialLink">Social Link : </label>
            <input
              type="text"
              id="socialLink"
              name="socialLink"
              value={person.socialLink}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="role">Role : </label>
            <input
              type="text"
              id="role"
              name="role"
              value={person.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">password : </label>
            <input
              type="text"
              id="password"
              name="password"
              value={person.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number : </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={person.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={(e) => sendOtp(e)}>
            next
          </button>
        </form>
        {message ? (
          <p
            style={{
              background: `${message?.success ? "green" : "red"}`,
              color: "black",
            }}
          >
            {message?.msg}
          </p>
        ) : (
          ""
        )}
      </article>
    </>
  );
};

export default ControlledInputs;
