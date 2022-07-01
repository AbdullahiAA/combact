import FormCheckbox from "../components/global/FormCheckbox";
import FormCheckboxLabel from "../components/global/FormCheckboxLabel";
import FormInput from "../components/global/FormInput";
import FormLabel from "../components/global/FormLabel";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/login");
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
                        name="registerName"
                        data-validate-field="registerName"
                      />
                      <FormLabel htmlFor="register-name">Name</FormLabel>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="text"
                        name="registerUsername"
                        data-validate-field="registerUsername"
                      />
                      <FormLabel htmlFor="register-username">
                        Username
                      </FormLabel>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="email"
                        name="registerEmail"
                        data-validate-field="registerEmail"
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
                          name="registerPassword"
                          data-validate-field="registerPassword"
                        />
                        <FormLabel>Password</FormLabel>
                      </div>

                      <div className="input-material-group mb-3 col-md-6">
                        <FormInput
                          type="password"
                          name="cPassword"
                          data-validate-field="cPassword"
                        />
                        <FormLabel>Confirm Password</FormLabel>
                      </div>
                    </div>

                    <div className="input-material-group mb-3">
                      <FormInput
                        type="text"
                        name="schName"
                        data-validate-field="schName"
                      />
                      <FormLabel htmlFor="sch-name">School Name</FormLabel>
                    </div>

                    <div className="d-flex input-material-group mb-4 border-bottom border-gray-400">
                      <FormLabel className="col-3 form-label">Class</FormLabel>

                      <div className="col-9">
                        <div className="row">
                          <div className="form-check col-4">
                            <FormCheckbox id="sss1" type="radio" name="class" />
                            <FormCheckboxLabel htmlFor="sss1">
                              SSS 1
                            </FormCheckboxLabel>
                          </div>
                          <div className="form-check col-4">
                            <FormCheckbox id="sss2" type="radio" name="class" />
                            <FormCheckboxLabel htmlFor="sss2">
                              SSS 2
                            </FormCheckboxLabel>
                          </div>
                          <div className="form-check col-4">
                            <FormCheckbox id="sss3" type="radio" name="class" />
                            <FormCheckboxLabel htmlFor="sss3">
                              SSS 3
                            </FormCheckboxLabel>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-check mb-4">
                      <FormCheckbox
                        id="register-agree"
                        name="registerAgree"
                        value="1"
                        data-validate-field="registerAgree"
                      />
                      <FormCheckboxLabel htmlFor="register-agree">
                        I agree with the terms and policy
                      </FormCheckboxLabel>
                    </div>

                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Register
                    </button>

                    <br />

                    <small className="text-gray-500">
                      Want to continue with your learning?{" "}
                    </small>
                    <a className="text-sm text-paleBlue" href="/login">
                      Login here
                    </a>
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
