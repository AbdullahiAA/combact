import "./Login.css";
// import "../assets/js/scripts";
import FormInput from "../components/global/FormInput";

function Login() {
  // function handleCursonOn() {
  //   // ------------------------------------------------------- //
  //   // Material Inputs
  //   // ------------------------------------------------------ //

  //   let materialInputs = document.querySelectorAll("input.input-material");

  //   console.log(materialInputs);
  //   // let materialLabel = document.querySelectorAll("label.label-material");

  //   // activate labels for prefilled values
  //   let filledMaterialInputs = Array.from(materialInputs).filter(function (
  //     input
  //   ) {
  //     return input.value !== "";
  //   });
  //   filledMaterialInputs.forEach((input) =>
  //     input.parentElement.lastElementChild.setAttribute(
  //       "class",
  //       "label-material active"
  //     )
  //   );

  //   // move label on focus
  //   materialInputs.forEach((input) => {
  //     input.addEventListener("focus", function () {
  //       input.parentElement.lastElementChild.setAttribute(
  //         "class",
  //         "label-material active"
  //       );
  //     });
  //   });

  //   // remove/keep label on blur
  //   materialInputs.forEach((input) => {
  //     input.addEventListener("blur", function () {
  //       if (input.value !== "") {
  //         input.parentElement.lastElementChild.setAttribute(
  //           "class",
  //           "label-material active"
  //         );
  //       } else {
  //         input.parentElement.lastElementChild.setAttribute(
  //           "class",
  //           "label-material"
  //         );
  //       }
  //     });
  //   });

  //   function bsValidationBehavior(errorInputs, form) {
  //     function watchError() {
  //       errorInputs.forEach((input) => {
  //         if (input.classList.contains("js-validate-error-field")) {
  //           input.classList.add("is-invalid");
  //           input.classList.remove("is-valid");
  //         } else {
  //           input.classList.remove("is-invalid");
  //           input.classList.add("is-valid");
  //         }
  //       });
  //     }
  //     watchError();
  //   }

  //   // ------------------------------------------------------- //
  //   // Login Form Validation
  //   // ------------------------------------------------------ //
  //   let loginForm = document.querySelector(".login-form");
  //   if (loginForm) {
  //     new window.JustValidate(".login-form", {
  //       rules: {
  //         loginUsername: {
  //           required: true,
  //           email: true,
  //         },
  //         loginPassword: {
  //           required: true,
  //         },
  //       },
  //       messages: {
  //         loginUsername: "Please enter a valid email",
  //         loginPassword: "Please enter your password",
  //       },
  //       invalidFormCallback: function () {
  //         let errorInputs = document.querySelectorAll(
  //           ".login-form input[required]"
  //         );
  //         bsValidationBehavior(errorInputs, loginForm);
  //         loginForm.addEventListener("keyup", () =>
  //           bsValidationBehavior(errorInputs, loginForm)
  //         );
  //       },
  //     });
  //   }
  // }

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
                  <form className="login-form py-5 w-100">
                    <h2 className="display-6">LOG IN</h2>
                    <div className="input-material-group mb-3">
                      <FormInput />
                    </div>

                    <div className="input-material-group mb-3">
                      <input
                        className="input-material"
                        id="login-username"
                        type="text"
                        name="loginUsername"
                        autoComplete="off"
                        required
                        data-validate-field="loginUsername"
                        // onFocus={handleCursonOn}
                      />
                      <label
                        className="label-material"
                        htmlFor="login-username"
                      >
                        User Name
                      </label>
                    </div>
                    <div className="input-material-group mb-4">
                      <input
                        className="input-material"
                        id="login-password"
                        type="password"
                        name="loginPassword"
                        required
                        data-validate-field="loginPassword"
                      />
                      <label
                        className="label-material"
                        htmlFor="login-password"
                      >
                        Password
                      </label>
                    </div>
                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Login
                    </button>
                    <br />
                    <a className="text-sm text-paleBlue" href="/">
                      Forgot Password?
                    </a>
                    <br />
                    <small className="text-gray-500">
                      Do not have an account?{" "}
                    </small>
                    <a className="text-sm text-paleBlue" href="/">
                      Signup
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center position-absolute bottom-0 start-0 w-100 z-index-20">
        <p className="text-white">
          Design by{" "}
          <a
            className="external"
            href="https://bootstrapious.com/p/admin-template"
          >
            Bootstrapious
          </a>
          {/*  Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :) */}
        </p>
      </div>
    </div>
  );
}

export default Login;
