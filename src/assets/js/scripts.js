// ------------------------------------------------------- //
// Material Inputs
// ------------------------------------------------------ //

let materialInputs = document.querySelectorAll("input.input-material");
// let materialLabel = document.querySelectorAll("label.label-material");

// activate labels for prefilled values
let filledMaterialInputs = Array.from(materialInputs).filter(function (input) {
  return input.value !== "";
});
filledMaterialInputs.forEach((input) =>
  input.parentElement.lastElementChild.setAttribute(
    "class",
    "label-material active"
  )
);

// move label on focus
materialInputs.forEach((input) => {
  input.addEventListener("focus", function () {
    input.parentElement.lastElementChild.setAttribute(
      "class",
      "label-material active"
    );
  });
});

// remove/keep label on blur
materialInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (input.value !== "") {
      input.parentElement.lastElementChild.setAttribute(
        "class",
        "label-material active"
      );
    } else {
      input.parentElement.lastElementChild.setAttribute(
        "class",
        "label-material"
      );
    }
  });
});

function bsValidationBehavior(errorInputs, form) {
  function watchError() {
    errorInputs.forEach((input) => {
      if (input.classList.contains("js-validate-error-field")) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });
  }
  watchError();
}

// ------------------------------------------------------- //
// Login Form Validation
// ------------------------------------------------------ //
let loginForm = document.querySelector(".login-form");
if (loginForm) {
  new window.JustValidate(".login-form", {
    rules: {
      loginUsername: {
        required: true,
        email: true,
      },
      loginPassword: {
        required: true,
      },
    },
    messages: {
      loginUsername: "Please enter a valid email",
      loginPassword: "Please enter your password",
    },
    invalidFormCallback: function () {
      let errorInputs = document.querySelectorAll(
        ".login-form input[required]"
      );
      bsValidationBehavior(errorInputs, loginForm);
      loginForm.addEventListener("keyup", () =>
        bsValidationBehavior(errorInputs, loginForm)
      );
    },
  });
}
