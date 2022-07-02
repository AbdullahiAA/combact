import FormInput from "../components/global/FormInput";
import FormLabel from "../components/global/FormLabel";

import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/dashboard");
  }
  return (
    <div className="login-page">
      <div className="container d-flex align-items-center position-relative py-5">
        <div className="card shadow-sm w-100 rounded overflow-hidden bg-none">
          <div className="card-body p-0">
            <div className="row gx-0 align-items-stretch">
              {/* Logo & Information Panel */}
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

              {/* Form Panel */}
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
                        name="loginUsername"
                        data-validate-field="loginUsername"
                      />
                      <FormLabel htmlFor="login-username">Username</FormLabel>
                    </div>

                    <div className="input-material-group mb-4">
                      <FormInput
                        id="login-password"
                        type="password"
                        name="loginPassword"
                        data-validate-field="loginPassword"
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
