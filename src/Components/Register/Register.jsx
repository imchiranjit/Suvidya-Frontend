/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./RegisterStyle.css";
import Student from "./Student";
// import axios from "axios";

// const BASE_URL = "http://127.0.0.1/api/v1/";

// {
//   "email": "example3@example.com",
//   "phone_no": "12345678903",
//   "first_name": "John",
//   "last_name": "Smith",
//   "d_o_b": "1990-01-01",
//   "age": 31,
//   "gender": "Male",
//   "uni_name": "Delhi University",
//   "clg_name": "College of Vocational Studies",
//   "clg": 75,
//   "clg_roll_no": 12345,
//   "enroll_no": 67890,
//   "course": "Computer Science",
//   "subject": "JAVA Programming",
//   "academic_year": 2022,
//   "address": "123 Example Street",
//   "area": "Example Area",
//   "state": "Example State",
//   "district": "Example District",
//   "pincode": "123456",
//   "password": "examplepassword",
//   "user_role": "admin",
//   "state_dist": 1046927
// }

function StudentRegister() {
  const [sectionNum, setSectionNum] = useState(0);
  const navigate = useNavigate();

  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState, watch } = form;
  const { errors, isValid } = formState;

  // async function postRegistration(data) {
  //   const res = await axios.post(`${BASE_URL}register`, data);
  // }

  function onSubmit(data) {
    console.log(data);
  }
  function handleBack() {
    setSectionNum((curr) => curr - 1);
  }
  function handleNext() {
    if (watch("identity") == "teacher") {
      navigate("/login");
      return;
    }
    setSectionNum((curr) => curr + 1);
  }

  return (
    <div className="signup-box">
      <div className="signup-form-container">
        <div className="form-innerbox">
          <form onSubmit={handleSubmit(onSubmit)} className="form-signup">
            {/* IDENTITY VERIFICATION */}
            {sectionNum == 0 && (
              <div className="form-section grid grid-2-col">
                <h2 className="form-section--heading">YOU ARE:</h2>
                <div className="input-field align-center">
                  <input
                    type="radio"
                    id="identity"
                    value="student"
                    {...register("identity", {
                      required: {
                        value: true,
                        message: "please select your identity",
                      },
                    })}
                  ></input>
                  <label value="student">Student</label>
                </div>
                <div className="input-field align-center">
                  <input
                    type="radio"
                    id="identity"
                    value="teacher"
                    {...register("identity", {
                      required: {
                        value: true,
                        message: "please select your identity",
                      },
                    })}
                  ></input>
                  <label value="teacher">Teacher</label>
                </div>
                <NextButton
                  isLast={false}
                  isValid={isValid}
                  handleNext={handleNext}
                />
              </div>
            )}

            {watch("identity") === "student" && (
              <Student
                sectionNum={sectionNum}
                isValid={isValid}
                handleBack={handleBack}
                handleNext={handleNext}
                register={register}
                errors={errors}
              />
            )}
            {/* {watch("identity") === "teacher" && navigate("/login")} */}
          </form>
        </div>
      </div>
    </div>
  );
}

export function NextButton({ handleNext, isLast, isValid }) {
  return (
    <button
      disabled={!isValid}
      type={`${isLast ? "submit" : "button"}`}
      className={`btn-form btn-submit ${isValid ? "" : "disabled"}`}
      onClick={handleNext}
    >
      {isLast ? "Submit" : "Next"}
    </button>
  );
}
export function BackButton({ handleBack }) {
  return (
    <button type="button" onClick={handleBack} className="btn-form btn-back">
      Back
    </button>
  );
}

export default StudentRegister;
