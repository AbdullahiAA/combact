import React from "react";
import Layout from "../../components/Layout/Layout";

function OtherResources() {
  return (
    <Layout pageTitle="Other Learning Resources">
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0 text-dark fw-normal">
            Want to know more about Calculus? Here are some resources...
          </h3>
        </div>
        <div className="card-body">
          <ol className="text-palatinateBlue">
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://mysecretmathtutor.com/pre-calculus/"
                target="_blank"
                rel="noreferrer"
              >
                My Secret Math Tutor
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://www.mathsisfun.com/calculus/"
                target="_blank"
                rel="noreferrer"
              >
                Math Is Fun
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://www.numerade.com/courses/calculus-1-ab/?utm_campaign=google_intl_numerade_international-search&utm_term=google_intl_numerade_international-search_conversion_dynamic_dynamic-search-all&utm_content=google_intl_numerade_international-search_conversion_dynamic_dynamic-search-all_keyword_&utm_source=google&utm_medium=paidsearch&gclid=CjwKCAjwrNmWBhA4EiwAHbjEQMJzQYCXAm_dWJQ6Ir_zznJM1kqmkg7Y2PJbOyuseI7p--jz6Z2pdxoC9Y4QAvD_BwE"
                target="_blank"
                rel="noreferrer"
              >
                Numerade
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://www.youtube.com/watch?v=WsQQvHm4lSw"
                target="_blank"
                rel="noreferrer"
              >
                Understanding Calculus Is Fun (Video)
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://youtube.com/playlist?list=PL7HbxnIjedJvnxGd6FNeBVKzPAWHnXZAr"
                target="_blank"
                rel="noreferrer"
              >
                Calculus Full Video Tutorial (Playlist)
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://youtube.com/playlist?list=PLmdFyQYShrjd4Qn42rcBeFvF6Qs-b6e-L"
                target="_blank"
                rel="noreferrer"
              >
                Calculus Basics (Playlist)
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://theswissbay.ch/pdf/Gentoomen%20Library/Maths/Calculus/Calculus%20Know-It-All%20-%20Beginner%20to%20Advanced%2C%20and%20Everything%20in%20Between%20%28Malestrom%29.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Calculus Know It All - 813 pages (PDF)
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-palatinateBlue"
                href="https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Calculus by Gilbert Strang - 671 pages (PDF)
              </a>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default OtherResources;
