import React from "react";
import Layout from "../../components/Layout/Layout";

function Certificate() {
  return (
    <Layout pageTitle={"Certificate"}>
      <div className="card cursor-not-allowed">
        <div className="card-body d-flex gap-4 align-items-center justify-content-between">
          <p className="fw-normal text-sm mb-0">
            You are doing great champ, but you need to complete all your lessons
            and quizzes to unlock the certificate. Thank you...
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 svg-icon svg-icon-sm svg-icon-light text-gray-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
    </Layout>
  );
}

export default Certificate;
