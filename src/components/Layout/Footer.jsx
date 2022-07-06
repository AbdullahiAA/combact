import React from "react";

function Footer() {
  return (
    <footer
      className="bg-darkBlue text-white text-center py-3 w-100 text-xs"
      id="footer"
    >
      <div className="container-fluid">
        <div className="row gy-2">
          <div className="col-sm-6 text-sm-start">
            <a
              href="https://www.instagram.com/abdullahi_tdc/"
              target="_blank"
              rel="noreferrer"
              className="mb-0 text-white"
            >
              Jelili Abdullahi Alagunfon &copy; 2022
            </a>
          </div>
          <div className="col-sm-6 text-sm-end">
            <p className="mb-0">
              Design by{" "}
              <a
                href="https://bootstrapious.com/p/admin-template"
                className="text-white text-decoration-none"
              >
                Bootstrapious
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
