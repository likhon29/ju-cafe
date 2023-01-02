import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const [googleUserEmail, setGoogleUserEmail] = useState("");
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  
  const handleGoogleSIgnIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        setGoogleUserEmail(user.email);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          role: "buyer",
        };

        saveUser(userInfo);
        navigate(from, { replace: true });
        toast.success("Welcome to Ju Book Express...");
      })
      .catch((err) => console.error(err));
  };
  const saveUser = (user) => {
    fetch("https://ju-book-express-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        getUserToken(user.email);
      });
  };

  const getUserToken = (email) => {
    fetch(`https://ju-book-express-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          // setToken(data.accessToken);
        }
      });
  };
  return (
    <div className="btn btn-outline w-full">
      <p className="text-center">
        <button onClick={handleGoogleSIgnIn} className="btn btn-ghost">
          Continue with Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;