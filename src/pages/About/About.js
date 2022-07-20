import React from "react";
import Layout from "../../components/Layout/Layout";

function About() {
  return (
    <Layout pageTitle="About COMBACT">
      <div className="about-content">
        <p>
          COMBACT is an online based Calculus platform which is aimed at
          teaching the senior secondary school learners the basics of Calculus.
        </p>

        <p>
          Basically, COMBACT consists of 5 main modules which are Dashboard,
          Lessons, Other Resources, Quizzes and the Certificate module.
        </p>

        <p>
          At the moment, COMBACT covers the basics of Limits and also the basics
          of Derivatives (More topics will be added in future). After the whole
          process, the learners will be able to earn their certificate.
        </p>

        <br />
        <br />

        <p>
          This project was created by <b>Jelili Abdullahi Alagunfon</b> in
          partiall fulfilment of the requirement for the award of{" "}
          <b>Bachelor's of Education in Mathematics</b> at the University of
          Ibadan - FCES affiliate.
        </p>
      </div>
    </Layout>
  );
}

export default About;
