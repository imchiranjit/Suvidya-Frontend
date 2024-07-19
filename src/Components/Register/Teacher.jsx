/* eslint-disable react/prop-types */
import { NextButton, BackButton } from "./Register";
import { useState } from "react";

function Student({
  sectionNum,
  isValid,
  handleBack,
  handleNext,
  register,
  errors,
}) {
  const [age, setAge] = useState("");
  function calcAge(e) {
    const today = new Date();
    const birthDate = new Date(e.target.value);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
    }
    if (today.getDate() < birthDate.getDate()) {
      months--;
    }
    setAge(`${years} years ${months} months`);
  }
  return (
    <>
      {/*SECTION 0 Contact info */}

      {sectionNum == 1 && (
        <div className="form-section  grid grid-2-col">
          <h2 className="form-section--heading">Contact Details</h2>
          <div
            className="input-field"
            style={{ gridColumn: "1/-1", justifySelf: "center" }}
          >
            <label htmlFor="email">Teacher ID</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email ID is required",
                },
              })}
              id="email"
            ></input>
            <p className="error">{errors.email?.message}</p>
          </div>
          <div
            className="input-field"
            style={{ gridColumn: "1/-1", justifySelf: "center" }}
          >
            <label htmlFor="phone">Phone No</label>
            <input
              type="text"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone Number is required",
                },
                minLength: {
                  value: 10,
                  message: "Minimum length should be 10",
                },
              })}
              id="phone"
            ></input>
            <p className="error">{errors.phone?.message}</p>
          </div>
          <NextButton
            isValid={isValid}
            handleNext={handleNext}
            isLast={false}
          />
          <BackButton handleBack={handleBack} />
        </div>
      )}

      {/*SECTION 1  Personel info */}

      {sectionNum == 2 && (
        <div className="form-section  grid grid-2-col">
          <h2 className="form-section--heading">Personel Info</h2>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "First Name is required",
                },
              })}
              id="firstname"
            ></input>
            <p className="error">{errors.firstname?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="middlename">Middle Name</label>
            <input type="text" name="middlename" id="middlename"></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname"></input>
          </div>
          <div className="input-field">
            <label htmlFor="dob">D.O.B</label>
            <input
              type="date"
              {...register("dob", {
                required: {
                  value: true,
                  message: "D.O.B is required",
                },
              })}
              id="dob"
              onChange={(e) => calcAge(e)}
            ></input>
            <p className="error">{errors.dob?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="age">Age</label>
            <input type="text" disabled value={age} id="age"></input>
          </div>
          <div className="input-field">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              {...register("gender", {
                required: {
                  value: true,
                  message: "gender is required",
                },
              })}
            >
              <option value="" disabled selected>
                Select you gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="error">{errors.gender?.message}</p>
          </div>
          <NextButton
            isValid={isValid}
            handleNext={handleNext}
            isLast={false}
          />
          <BackButton handleBack={handleBack} />
        </div>
      )}

      {/*SECTION 2  Academic info */}
      {sectionNum == 3 && (
        <div className="form-section grid grid-2-col">
          <h2 className="form-section--heading">Academic Info</h2>

          <div className="input-field">
            <label htmlFor="collegeroll">College Roll No</label>
            <input
              type="text"
              id="collegeroll"
              {...register("collegeroll", {
                required: {
                  value: true,
                  message: "Roll No. is required",
                },
              })}
            ></input>
            <p className="error">{errors.collegeroll?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="enrollment">Enrollment/Admission No</label>
            <input
              type="text"
              id="enrollment"
              {...register("enrollment", {
                required: {
                  value: true,
                  message: "Enrollment No. is required",
                },
              })}
            ></input>
            <p className="error">{errors.enrollment?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              {...register("course", {
                required: {
                  value: true,
                  message: "course is required",
                },
              })}
            >
              <option value="" disabled selected>
                select course
              </option>
              <option name="cs">CS</option>
              <option name="electro">Electronics</option>
              <option name="bms">BMS</option>
            </select>
            <p className="error">{errors.course?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="year">Acedemic Year</label>
            <input
              type="text"
              id="year"
              {...register("year", {
                required: {
                  value: true,
                  message: "year is required",
                },
              })}
            ></input>
            <p className="error">{errors.year?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="subject">Subject</label>
            <select id="subject" {...register("subject")}>
              <option value="" disabled selected>
                select subject
              </option>
              <option name="cs">DSA</option>
              <option name="electro">Semiconductors</option>
              <option name="bms">Human Physiology</option>
            </select>
          </div>
          <NextButton
            isValid={isValid}
            handleNext={handleNext}
            isLast={false}
          />
          <BackButton handleBack={handleBack} />
        </div>
      )}

      {/*SECTION 3 Address  */}
      {sectionNum == 4 && (
        <div className="form-section grid grid-2-col">
          <h2 className="form-section--heading">Permanent Address</h2>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              {...register("address", {
                required: {
                  value: true,
                  message: "address is required",
                },
              })}
            ></input>
            <p className="error">{errors.address?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="state">State</label>
            <select
              id="state"
              {...register("state", {
                required: {
                  value: true,
                  message: "state is required",
                },
              })}
            >
              <option value="" disabled selected>
                Select State
              </option>
              <option value="">Haryana</option>
              <option value="">Rajasthan</option>
              <option value="">Delhi</option>
            </select>
            {/* <p className="error">{errors.state?.message}</p> */}
          </div>
          <div className="input-field">
            <label htmlFor="district">District</label>
            <select
              id="district"
              {...register("district", {
                required: {
                  value: true,
                  message: "district is required",
                },
              })}
            >
              <option value="" disabled selected>
                select district
              </option>
              <option value="">Faridabad</option>
              <option value="">Jhajhar</option>
            </select>
            {/* <p className="error">{errors.district?.message}</p> */}
          </div>
          <div className="input-field">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              id="pincode"
              {...register("pincode", {
                required: {
                  value: true,
                  message: "pincode is required",
                },
              })}
            ></input>
            <p className="error">{errors.pincode?.message}</p>
          </div>

          <NextButton
            isValid={isValid}
            handleNext={handleNext}
            isLast={false}
          />
          <BackButton handleBack={handleBack} />
        </div>
      )}

      {/* SECTION 4 Additional info */}
      {sectionNum == 5 && (
        <div className="form-section grid grid-2-col">
          <h2 className="form-section--heading">Additional Info</h2>
          <div className="input-field">
            <label htmlFor="address">Upload Photo</label>
            <input type="file" name="photo" id="photo"></input>
          </div>
          <div className="input-field">
            <label htmlFor="bloodgroup">Blood Group</label>
            <select name="bloodgroup" id="bloodgroup">
              <option>select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <NextButton isValid={isValid} handleNext={handleNext} isLast={true} />
          <BackButton handleBack={handleBack} />
        </div>
      )}
    </>
  );
}

export default Student;
