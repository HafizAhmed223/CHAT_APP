import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
function Form({ isSignInPage = true }) {
  const [data, setData] = useState({
    ...(isSignInPage && { fullName: "" }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log("Data ==>", data);

  return (
    <div className="w-full h-screen flex justify-center items-center rounded-lg bg-secondary">
      <div className="flex flex-col justify-center items-center bg-white  w-[500px] h-[600px] shadow-lg rounded-[10px]">
        <div className="text-4xl font-extrabold mb-2">
          Welcome{isSignInPage && " Back"}
        </div>
        <div className="text-lg font-light mb-10">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign Up To Get Started Now!"}
        </div>
        <form
          className="w-1/2"
          onSubmit={() => {
            console.log("Submitted");
          }}
        >
          {!isSignInPage && (
            <Input
              className="mb-4 rounded-md"
              label="Full Name"
              placeholder="Enter Your Full Name"
              type="name"
              value={data.fullName}
              onChange={(e) => {
                setData({ ...data, fullName: e.target.value });
              }}
            />
          )}
          <Input
            className="mb-4 rounded-md"
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            className="mb-4 rounded-md"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            type="submit"
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="w-full my-2"
          />
          <div className="text-center text-sm font-semibold">
            {isSignInPage
              ? "Didn't have an account"
              : "Already have an account?"}{" "}
            <span
              className="text-primary cursor-pointer underline"
              onClick={() =>
                navigate(`/user/${isSignInPage ? "signup" : "signin"}`)
              }
            >
              {isSignInPage ? "Sign up" : "Sign in"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
