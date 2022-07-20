import FormInput from "../components/global/FormInput";
import FormLabel from "../components/global/FormLabel";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "../components/axios/axios";
import { toast } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { updateUserData, saveToken } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      toast.error("All fields are required.");
    } else {
      axios
        .post("/login", { username, password })
        .then((res) => {
          if (res?.data?.status) {
            toast.success(res?.data?.message);

            saveToken(res?.data?.token);

            updateUserData(res?.data);

            navigate("/dashboard");
          } else {
            setPassword("");
            toast.error(res?.data?.message);
          }
        })
        .catch((err) => {
          setPassword("");
          toast.error(err?.message);
        });
    }
  }
  return (
    <div className="login-page">
      <div className="container d-flex align-items-center position-relative py-5">
        <div className="card shadow-sm w-100 rounded overflow-hidden bg-none">
          <div className="card-body p-0">
            <div className="row gx-0 align-items-stretch">
              <div className="col-lg-6">
                <div className="info d-flex justify-content-center flex-column p-4 h-100">
                  <div className="py-5">
                    <h1 className="display-6 fw-bold">COMBACT</h1>
                    <p className="fw-light mb-0">
                      Computer Based Calculus Tutor
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 bg-white">
                <div className="d-flex align-items-center px-4 px-lg-5 h-100">
                  <form
                    className="login-form py-5 w-100"
                    onSubmit={handleSubmit}
                  >
                    <h2 className="display-6 fs-1">Welcome back, Champ!</h2>

                    <div className="input-material-group mb-3">
                      <FormInput
                        id="login-username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <FormLabel htmlFor="login-username">Username</FormLabel>
                    </div>

                    <div className="input-material-group mb-4">
                      <FormInput
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FormLabel htmlFor="login-password">Password</FormLabel>
                    </div>

                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Login
                    </button>
                    <br />
                    <Link className="text-sm text-paleBlue" to="/">
                      Forgot Password?
                    </Link>
                    <br />
                    <small className="text-gray-500">
                      Do you want to start learning with us today?{" "}
                    </small>
                    <Link className="text-sm text-paleBlue" to="/register">
                      Register here
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :) */}
      <div className="text-center position-absolute bottom-0 start-0 w-100 z-index-20">
        <p className="text-white">
          Design by{" "}
          <a
            className="external"
            href="https://bootstrapious.com/p/admin-template"
          >
            Bootstrapious
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
