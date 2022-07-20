import FormCheckbox from "../components/global/FormCheckbox";
import FormCheckboxLabel from "../components/global/FormCheckboxLabel";
import FormInput from "../components/global/FormInput";
import FormLabel from "../components/global/FormLabel";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "../components/axios/axios";
import { toast } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";

function Register() {
  const navigate = useNavigate();
  const { updateUserData, saveToken } = useUserContext();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [schName, setSchName] = useState("");
  const [level, setLevel] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name ||
      !username ||
      !email ||
      !gender ||
      !password ||
      !confirmPassword ||
      !schName ||
      !level
    ) {
      toast.error("All fields are required");
    } else if (password !== confirmPassword) {
      toast.error("Password does not match");
    } else if (password.length < 4) {
      toast.error("Password must be at least 4 characters long");
    } else {
      axios
        .post("/register", {
          name,
          username,
          email,
          gender,
          password,
          level,
          confirm_password: confirmPassword,
          school_name: schName,
        })
        .then((res) => {
          if (res?.data?.status) {
            // Save data to context
            toast.success(res?.data?.message);

            saveToken(res?.data?.token);

            updateUserData(res?.data);

            navigate("/dashboard");
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((err) => {
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
                    className="register-form py-5 w-100"
                    onSubmit={handleSubmit}
                  >
                    <h2 className="display-6 fs-1">
                      Welcome to COMBACT, Champ!
                    </h2>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <FormLabel>Name</FormLabel>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <FormLabel>Username</FormLabel>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <FormLabel>Email Address</FormLabel>
                    </div>

                    <div className="d-flex input-material-group mb-3 border-bottom border-gray-400">
                      <FormLabel className="col-4 col-sm-3 form-label">
                        Gender
                      </FormLabel>

                      <div className="col-8 col-sm-9">
                        <div className="row">
                          <div className="form-check col-6">
                            <FormCheckbox
                              id="male"
                              type="radio"
                              name="gender"
                              value="Male"
                              onChange={(e) => setGender(e.target.value)}
                              selected={gender === "Male"}
                            />
                            <FormCheckboxLabel htmlFor="male">
                              Male
                            </FormCheckboxLabel>
                          </div>
                          <div className="form-check col-6">
                            <FormCheckbox
                              id="female"
                              type="radio"
                              name="gender"
                              value="Female"
                              onChange={(e) => setGender(e.target.value)}
                              selected={gender === "Feale"}
                            />
                            <FormCheckboxLabel htmlFor="female">
                              Female
                            </FormCheckboxLabel>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-md-flex">
                      <div className="input-material-group mb-3 col-md-6">
                        <FormInput
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormLabel>Password</FormLabel>
                      </div>

                      <div className="input-material-group mb-3 col-md-6">
                        <FormInput
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <FormLabel>Confirm Password</FormLabel>
                      </div>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="text"
                        value={schName}
                        onChange={(e) => setSchName(e.target.value)}
                      />
                      <FormLabel>School Name</FormLabel>
                    </div>

                    <div className="d-flex input-material-group mb-4 border-bottom border-gray-400">
                      <FormLabel className="col-3 form-label">Class</FormLabel>

                      <div className="col-9">
                        <div className="row">
                          <div className="form-check col-4">
                            <FormCheckbox
                              id="sss1"
                              type="radio"
                              name="level"
                              value="SSS 1"
                              onChange={(e) => setLevel(e.target.value)}
                            />
                            <FormCheckboxLabel htmlFor="sss1">
                              SSS 1
                            </FormCheckboxLabel>
                          </div>
                          <div className="form-check col-4">
                            <FormCheckbox
                              id="sss2"
                              type="radio"
                              name="level"
                              value="SSS 2"
                              onChange={(e) => setLevel(e.target.value)}
                            />
                            <FormCheckboxLabel htmlFor="sss2">
                              SSS 2
                            </FormCheckboxLabel>
                          </div>
                          <div className="form-check col-4">
                            <FormCheckbox
                              id="sss3"
                              type="radio"
                              name="level"
                              value="SSS 3"
                              onChange={(e) => setLevel(e.target.value)}
                            />
                            <FormCheckboxLabel htmlFor="sss3">
                              SSS 3
                            </FormCheckboxLabel>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Register
                    </button>

                    <br />

                    <small>Want to continue your fun with COMBACT? </small>
                    <Link className="text-sm text-palatinateBlue" to="/login">
                      Login here
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

export default Register;
