/* eslint-disable react/prop-types */
import { NextButton, BackButton } from "./Register";
import { useState } from "react";

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

// Example: Create an array of numbers from 1 to 10
const curYear = new Date().getFullYear();
const years = range(1950, curYear + 5);
// console.log(years);

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
      {/*SECTION 1 Contact info */}

      {sectionNum === 1 && (
        <div className="form-section  grid grid-2-col">
          <h2 className="form-section--heading">Contact Details</h2>
          <div
            className="input-field"
            style={{ gridColumn: "1/-1", justifySelf: "center" }}
          >
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email ID is required",
                },
                pattern: {
                  value: /[A-Za-z0-9]+[@]+[A-Za-z]+[.]+[A-Za-z]/,
                  message: "email address is invalid",
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
                pattern: {
                  value: /^[0-9]*$/,
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

      {/* SECTION 2  Personel info */}

      {sectionNum === 2 && (
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
                pattern: {
                  value: /^[A-Za-z]*$/,
                  message: "only alphabets are allowed",
                },
              })}
              id="firstname"
            ></input>
            <p className="error">{errors.firstname?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="middlename">Middle Name</label>
            <input
              type="text"
              {...register("middlename", {
                pattern: {
                  value: /^[A-Za-z]*$/,
                  message: "only alphabets are allowed",
                },
              })}
              id="middlename"
            ></input>
            <p className="error">{errors.middlename?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Last Name is required",
                },
                pattern: {
                  value: /^[A-Za-z.]*$/,
                  message: "Only alphabets are allowed",
                },
              })}
              id="lastname"
            ></input>
            <p className="error">{errors.lastname?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="dob">D.O.B</label>
            <input
              onKeyDown={(e) => e.preventDefault()}
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
              defaultValue={"select"}
              {...register("gender", {
                required: {
                  value: true,
                  message: "gender is required",
                },
              })}
            >
              <option>select</option>
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
      {sectionNum === 3 && (
        <div className="form-section grid grid-2-col">
          <h2 className="form-section--heading">Academic Info</h2>

          <div className="input-field">
            <label htmlFor="subject">University</label>
            <select id="university" {...register("university")}>
              <option value="" disabled selected>
                select university
              </option>
              <option name="du">University of Delhi</option>
              <option name="jnu">Jawahar Lal University</option>
              <option name="ipu">Indraprastha University</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="subject">College</label>
            <select id="college" {...register("college")}>
              <option value="" disabled selected>
                select college
              </option>
              <option name="hindu college">Hindu College</option>
              <option name="ramjas">Ramjas</option>
              <option name="bhaskaracharya">
                Bhaskarachary college of applied sciences
              </option>
            </select>
          </div>

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
          <div className="input-field">
            <label htmlFor="year">Acedemic Year</label>
            <select
              {...register("year", {
                required: {
                  value: true,
                  message: "Academic year is required",
                },
              })}
              id="year"
            >
              <option disabled selected>
                select
              </option>
              {years.map((year) => (
                <option name={`${year}`} value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
            <p className="error">{errors.year?.message}</p>
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
      {sectionNum === 4 && (
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
                pattern: {
                  value: /^[A-Za-z0-9,-]*$/,
                  message: "speacial characters not allowed except ',' & '-' ",
                },
              })}
            ></input>
            <p className="error">{errors.address?.message}</p>
          </div>
          <div className="input-field">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              {...register("area", {
                pattern: {
                  value: /^[A-Za-z0-9,-]*$/,
                  message: "speacial characters not allowed except ',' & '-' ",
                },
              })}
            ></input>
            <p className="error">{errors.area?.message}</p>
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
                minLength: {
                  value: 6,
                  message: "pincode must be of length 6",
                },
                maxLength: {
                  value: 6,
                  message: "pincode must be of length 6",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "pincode can't contain alphabets",
                },
              })}
            ></input>
            <p className="error">{errors.pincode?.message}</p>
          </div>

          <NextButton isValid={true} handleNext={handleNext} isLast={false} />
          <BackButton handleBack={handleBack} />
        </div>
      )}
      {
        // SECTION 4: PASSWORD CREATION
        sectionNum === 5 && (
          <div className="form-section grid grid-1-col">
            <h2 className="form-section--heading">Create Password</h2>
            <div className="input-field">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  pattern: {},
                })}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="password">Repeat Password</label>
              <input type="password"></input>
            </div>
            <NextButton isValid={true} handleNext={handleNext} isLast={true} />
            <BackButton handleBack={handleBack} />
          </div>
        )
      }
    </>
  );
}

export default Student;
