/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./EditWindow.module.css";
import { useEffect, useState } from "react";
// import { Toaster, toast } from "sonner";
import Loader from "../../UI/Loader";
// const promise = () =>
//   new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

// toast.promise(promise, {
//   loading: "Loading...",
//   success: (data) => {
//     return `${data.name} toast has been added`;
//   },
//   error: "Error",
// });

const BASE_URL = "http://127.0.0.1:8000/api/v1/cms/";

function EditWindow({
  selectTab,
  setIsEdit,
  type,
  editId,
  data,
  columnNames,
  authToken,
  reloadData,
}) {
  const [curData, setCurrData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({ mode: "all" });
  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;
  const formData = new FormData();

  function handleClose() {
    setIsEdit(false);
  }

  useEffect(
    function () {
      if (type === "edit") {
        const cData = data
          .filter((item) => item[columnNames.current[0]] === editId)
          .at(0);
        setCurrData(cData);
      } else {
        return;
      }
    },
    [type, columnNames, data, editId, selectTab, authToken]
  );

  function onSubmit(data) {
    console.log(data);
    // console.log(data.vid[0]);
    if (type === "edit") updateData(editId, data);
    else updateData(null, data);
  }

  async function updateData(id, data) {
    setIsLoading(true);
    let apiUrl;
    let body;

    try {
      switch (selectTab) {
        case "universities":
          console.log(data.uni_code, data.uni_name);
          apiUrl = `uni/${id ? id : "add"}${id ? "/update" : ""}/`;
          body = {
            uni_name: data.uni_name,
            uni_code: data.uni_code,
          };
          break;
        case "colleges":
          apiUrl = `college/${id ? id : "add"}${id ? "/update" : ""}/`;
          body = {
            clg_name: data.clg_name,
            clg_code: data.clg_code,
          };
          break;
        case "courses":
          apiUrl = `course/${id ? id : "add"}${id ? "/update" : ""}/`;
          body = {
            course_name: data.course_name,
            course_code: data.course_code,
          };
          break;
        case "subjects":
          apiUrl = `subject/${id ? id : "add"}${id ? "/update" : ""}/`;
          body = {
            sub_name: data.sub_name,
            sub_code: data.sub_code,
            course: data.course,
          };
          break;
        case "videos":
          apiUrl = `video/${id ? id : "add"}${id ? "/update" : ""}/`;
          formData.append("video", data.vid[0]);
          formData.append("title", data.vid_title);
          body = formData;

          break;
        case "assignments":
          apiUrl = `assignment/${id ? id : "add"}${id ? "/update" : ""}/`;
          formData.append("title", data.assign_name);
          formData.append("assignment", data.assign_file[0]);
          body = formData;
          break;
        default:
          throw new Error("clear cache and retry or contact developer");
      }

      if (!authToken)
        throw new Error(
          "There is some problem at server. please clear cache and retry"
        );
      const res = await axios.post(`${BASE_URL}${apiUrl}`, body, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(res);

      // toast.promise(res, {
      //   loading: "Loading...",
      //   success: (res) => {
      //     return res.data.message;
      //   },
      //   error: "Error",
      // });
      reloadData();
    } catch (err) {
      console.log(err.message);
      // setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
      handleClose();
    }
  }

  return (
    <>
      {/* <Toaster /> */}
      <div className={`${styles.overlay}`} onClick={handleClose}></div>

      {isLoading && (
        <div className={`${styles.edit_window} ${styles.loading}`}>
          <Loader />
        </div>
      )}
      <div className={styles.edit_window}>
        <button className={`${styles.btn_close_window}`} onClick={handleClose}>
          <MdClose />
        </button>

        {/* COURSES FORM */}
        {selectTab === "courses" && (
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Course Name"
              id="course_name"
              name="course_name"
            />
            <input
              type="text"
              placeholder="Course code"
              id="course_code"
              name="course_code"
            />
            <input
              type="text"
              placeholder="Program Name"
              id="prog_id"
              name="prog_id"
            />
            <input type="submit" className={styles.filter_btn} />
          </form>
        )}

        {/* SUBJECTS FORM  */}
        {selectTab === "subjects" && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.input_box}`}>
              <label htmlFor="sub_name"> Name</label>
              <div className={styles.input_box}>
                <input
                  type="text"
                  placeholder="Subject Name"
                  id="sub_name"
                  defaultValue={curData.sub_name}
                  {...register("sub_name", {
                    required: {
                      value: true,
                      message: "please insert Subject name",
                    },
                  })}
                />
                <p className={`error`}>{errors.sub_name?.message}</p>
              </div>
            </div>

            <div className={`${styles.input_box}`}>
              <label htmlFor="sub_code">Code</label>
              <div>
                <input
                  type="text"
                  placeholder="subject code"
                  id="sub_code"
                  defaultValue={curData.sub_code}
                  {...register("sub_code", {
                    required: {
                      value: true,
                      message: "code is required",
                    },
                  })}
                />
                <p className="error">{errors.sub_code?.message}</p>
              </div>
            </div>
            <div className={`${styles.input_box}`}>
              <label htmlFor="course_id">Course Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Course Name"
                  id="course"
                  defaultValue={curData.course}
                  {...register("course", {})}
                />
                <p className="error">{errors.course?.message}</p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        )}

        {/* VIDEOS FORM  */}
        {selectTab === "videos" && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.input_box}`}>
              <label htmlFor="vid_title"> Title</label>
              <div>
                <input
                  type="text"
                  placeholder="Video title"
                  id="vid_title"
                  defaultValue={curData.vid_title}
                  {...register("vid_title", {
                    required: {
                      value: true,
                      message: "please insert University name",
                    },
                  })}
                />
                <p className={`error`}>{errors.vid_title?.message}</p>
              </div>
            </div>

            <div className={`${styles.input_box}`}>
              <label htmlFor="vid_desc">Description</label>
              <div>
                <input
                  type="textbox"
                  placeholder="please write something about this video"
                  id="vid_description"
                  defaultValue={curData.vid_desc}
                  {...register("vid_desc", {})}
                />
              </div>
            </div>
            <div className={`${styles.input_box}`}>
              <label htmlFor="vid">upload video</label>
              <div>
                <input
                  type="file"
                  placeholder="upload video"
                  id="vid"
                  value={curData.vid_desc}
                  {...register("vid", {
                    required: {
                      value: true,
                      message: "video file is required",
                    },
                  })}
                />
                <p className="error">{errors.vid?.message}</p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        )}

        {/* ASSIGNMENTS FORM  */}
        {selectTab === "assignments" && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.input_box}`}>
              <label htmlFor="assign_name"> Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Assignment Name"
                  id="assign_name"
                  defaultValue={curData.assign_name}
                  {...register("assign_name", {
                    required: {
                      value: true,
                      message: "please insert Assignment name",
                    },
                  })}
                />
                <p className={`error`}>{errors.assign_name?.message}</p>
              </div>
            </div>

            <div className={`${styles.input_box}`}>
              <label htmlFor="assign_file">Code</label>
              <div>
                <input
                  type="file"
                  placeholder="upload File"
                  id="assign_file"
                  defaultValue={curData.assign_file}
                  {...register("assign_file", {
                    required: {
                      value: true,
                      message: "File is required",
                    },
                  })}
                />
                <p className="error">{errors.assign_file?.message}</p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        )}

        {/* COLLEGES FORM  */}
        {selectTab === "colleges" && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.input_box}`}>
              <label htmlFor="clg_name"> Name</label>
              <div>
                <input
                  type="text"
                  placeholder="College Name"
                  id="clg_name"
                  defaultValue={curData.clg_name}
                  {...register("clg_name", {
                    required: {
                      value: true,
                      message: "please insert University name",
                    },
                  })}
                />
                <p className={`error`}>{errors.clg_name?.message}</p>
              </div>
            </div>

            <div className={`${styles.input_box}`}>
              <label htmlFor="clg_code">Code</label>
              <div>
                <input
                  type="text"
                  placeholder="College code"
                  id="clg_code"
                  defaultValue={curData.clg_code}
                  {...register("clg_code", {
                    required: {
                      value: true,
                      message: "code is required",
                    },
                  })}
                />
                <p className="error">{errors.clg_code?.message}</p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        )}

        {/* UNIVERSITIES FORM  */}
        {selectTab === "universities" && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles.input_box}`}>
              <label htmlFor="uni_name"> Name</label>
              <div>
                <input
                  type="text"
                  placeholder="University Name"
                  id="uni_name"
                  defaultValue={curData.uni_name}
                  {...register("uni_name", {
                    required: {
                      value: true,
                      message: "please insert University name",
                    },
                  })}
                />

                <p className={`error`}>{errors.uni_name?.message}</p>
              </div>
            </div>

            <div className={`${styles.input_box}`}>
              <label htmlFor="uni_code">Code</label>
              <div>
                <input
                  type="text"
                  placeholder="University code"
                  id="uni_code"
                  defaultValue={curData.uni_code}
                  {...register("uni_code", {
                    required: {
                      value: true,
                      message: "code is required",
                    },
                  })}
                />

                <p className="error">{errors.uni_code?.message}</p>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submit_btn}
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}
export default EditWindow;
