import { toast } from "react-hot-toast";
import React, { useState } from "react";

function QuestionCard({ serialNumber, question }) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedOption) {
      toast.error("Please choose an option for question " + serialNumber);
    } else {
      if (selectedOption === question.correctAnswer) {
        toast.success("Amazing Champ! You got the answer right");
      } else {
        toast.error("Oops! You chosed a wrong option");
      }
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <p className="mb-0">
          {serialNumber}. {question?.question}
        </p>
      </div>
      <div className="card-body p-0">
        <div className="p-3">
          <div className="form-check mb-0 py-1">
            <input
              className="form-check-input"
              type="radio"
              name={`selected_option_for_${serialNumber}`}
              id={`option_a_for_${serialNumber}`}
              value="a"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label
              className="form-check-label text-gray-600 text-sm"
              htmlFor={`option_a_for_${serialNumber}`}
            >
              {question.a}
            </label>
          </div>
        </div>
        <div className="p-3 bg-light">
          <div className="form-check mb-0 py-1">
            <input
              className="form-check-input"
              type="radio"
              name={`selected_option_for_${serialNumber}`}
              id={`option_b_for_${serialNumber}`}
              value="b"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label
              className="form-check-label text-gray-600 text-sm"
              htmlFor={`option_b_for_${serialNumber}`}
            >
              {question.b}
            </label>
          </div>
        </div>
        <div className="p-3">
          <div className="form-check mb-0 py-1">
            <input
              className="form-check-input"
              type="radio"
              name={`selected_option_for_${serialNumber}`}
              id={`option_c_for_${serialNumber}`}
              value="c"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label
              className="form-check-label text-gray-600 text-sm"
              htmlFor={`option_c_for_${serialNumber}`}
            >
              {question.c}
            </label>
          </div>
        </div>
        <div className="p-3 bg-light">
          <div className="form-check mb-0 py-1">
            <input
              className="form-check-input"
              type="radio"
              name={`selected_option_for_${serialNumber}`}
              id={`option_d_for_${serialNumber}`}
              value="d"
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label
              className="form-check-label text-gray-600 text-sm"
              htmlFor={`option_d_for_${serialNumber}`}
            >
              {question.d}
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer justify-content-start">
        <button className="btn btn-outline-success" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default QuestionCard;
