/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, useReducer, useCallback } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { MdEditSquare, MdDelete } from "react-icons/md";
import styles from "./CmsTableStyle.module.css";
import EditWindow from "../EditWindow/EditWindow";
// import Button from "../../UI/Button";
import Loader from "../../UI/Loader";

const BASE_URL = "http://127.0.0.1:8000";

const initialState = {
  data: [""],
  dataType: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "uni":
      return { ...state, data: action.data, dataType: action.type };
    case "college":
      return { ...state, data: action.data, dataType: action.type };
    case "video":
      return { ...state, data: action.data, dataType: action.type };
    case "assign":
      return { ...state, data: action.data, dataType: action.type };
    case "course":
      return { ...state, data: action.data, dataType: action.type };
    case "empty":
      return initialState;
    default:
      throw new Error("action is not defined in reducer method");
  }
}

function CmsTable({ selectTab, cls, authToken }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [dataId, setDataId] = useState(null);
  const [editType, setEditType] = useState("edit");
  const [errMsg, setErrMsg] = useState("");
  const [{ data, dataType }, dispatch] = useReducer(reducer, initialState);
  const columnNames = useRef(null);
  const apiURL = useRef("");

  // getting data from api
  const getData = useCallback(
    async function (curType) {
      setIsLoading(true);
      setErrMsg("");
      try {
        if (!authToken)
          throw new Error(
            "There is some problem at server. please clear cache and retry"
          );
        else {
          const res = await axios.get(`${BASE_URL}${apiURL.current}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          const fetchedData = res.data;
          dispatch({ type: curType, data: fetchedData });
        }
      } catch (err) {
        console.log(err.message);
        setErrMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [authToken]
  );

  useEffect(
    function () {
      setPage(0);
      dispatch({ type: "empty" });
      setIsLoading(true);
      switch (selectTab) {
        case "universities":
          apiURL.current = "/api/v1/cms/uni/get";
          getData("uni");
          break;
        case "colleges":
          apiURL.current = "/api/v1/cms/college/get";
          getData("college");
          break;
        case "videos":
          apiURL.current = "/api/v1/cms/video/get";
          getData("video");
          break;
        case "assignments":
          apiURL.current = "/api/v1/cms/assignment/get/";
          getData("assign");
          break;
        case "courses":
          apiURL.current = "/api/v1/cms/course/get";
          getData("course");
          break;
        case "subjects":
          apiURL.current = "/api/v1/cms/subject/get";
          getData("course");
          break;
        default:
          console.log("please contact developer for this");
      }
    },
    [selectTab, apiURL, getData]
  );

  // column names
  if (data.length) {
    columnNames.current = Object.keys(data[0]);
  }

  // handling pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // adding data into table
  function handleAdd() {
    setEditType("add");
    setIsEdit(true);
  }

  // handling edition of data of table
  function handleEdit(isEdit, id) {
    setEditType("edit");
    setIsEdit(true);
    setDataId(id);
  }

  // reload table data
  function reloadData() {
    getData(dataType);
  }

  // handling delete
  async function handleDeleteRow(id) {
    const confirm = window.prompt(
      `Are you sure you want to delete ${selectTab}: with id ${id} \n if yes type 'y' otherwise 'n' `
    );
    if (confirm != "y" && confirm != "Y") return;
    setIsLoading(true);
    const startLink =
      selectTab != "universities" ? selectTab.slice(0, -1) : "uni";
    console.log(startLink);

    try {
      if (authToken) {
        const res = await axios.post(
          `${BASE_URL}/api/v1/cms/${startLink}/${id}/delete/`,
          null,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        console.log(res);
        console.log(data.type);
        reloadData();
      } else throw new Error("Please clear cache & retry.");
    } catch (err) {
      console.log("✨" + err);
      setErrMsg(err.message);
    } finally {
      setIsLoading(false);
    }
    // console.log(res.data);
  }

  return (
    <>
      <div className={`${cls} table_box`} style={{ margin: "4rem 8rem" }}>
        {!isLoading ? (
          <div>
            {errMsg.length && (
              <div className={styles.error_box}>
                <p className={styles.error}>Something went wrong!!! {errMsg}</p>
              </div>
            )}
            {data.length >= 1 && (
              <>
                <div className={`${styles.table_header}`}>
                  <h3 className={styles.table_heading}> {selectTab}</h3>
                  <button
                    className={`btn ${styles.btn_add}`}
                    onClick={() => handleAdd()}
                  >
                    ADD {selectTab.toUpperCase()}
                  </button>
                </div>
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columnNames.current.map((column) => (
                            <TableCell
                              key={column}
                              style={{
                                minWidth: column.minWidth,
                                fontFamily: "inherit",
                                fontWeight: "600",
                                fontSize: "1.6rem",
                              }}
                            >
                              {column}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                {columnNames.current.map((cell, j) => {
                                  const value = row[cell];
                                  return (
                                    <TableCell
                                      key={j}
                                      // align={column.align}
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: "1.4rem",
                                      }}
                                    >
                                      {value}
                                    </TableCell>
                                  );
                                })}
                                <div className={`${styles.edit_options_box} `}>
                                  <MdEditSquare
                                    className={`${styles.icon} ${styles.icon_edit}`}
                                    onClick={() =>
                                      handleEdit(
                                        true,
                                        row[columnNames.current[0]]
                                      )
                                    }
                                  />
                                  <MdDelete
                                    className={`${styles.icon_delete} ${styles.icon}`}
                                    onClick={() =>
                                      handleDeleteRow(
                                        row[columnNames.current[0]]
                                      )
                                    }
                                  />
                                </div>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className={styles.pagination_box}
                  />
                </Paper>
              </>
            )}
            {data.length < 1 && !errMsg && (
              <>
                <div className={`${styles.table_header}`}>
                  <h3 className={styles.table_heading}> {selectTab}</h3>
                  <button
                    className={`btn ${styles.btn_add}`}
                    onClick={() => handleAdd()}
                  >
                    ADD {selectTab.toUpperCase()}
                  </button>
                </div>
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columnNames.current.map((column) => (
                            <TableCell
                              key={column}
                              style={{
                                minWidth: column.minWidth,
                                fontFamily: "inherit",
                                fontWeight: "600",
                                fontSize: "1.6rem",
                              }}
                            >
                              {column}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, i) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={i}
                              >
                                {columnNames.current.map((cell, j) => {
                                  const value = row[cell];
                                  return (
                                    <TableCell
                                      key={j}
                                      // align={column.align}
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: "1.4rem",
                                      }}
                                    >
                                      {value}
                                    </TableCell>
                                  );
                                })}
                                <div className={`${styles.edit_options_box} `}>
                                  <MdEditSquare
                                    className={`${styles.icon} ${styles.icon_edit}`}
                                    onClick={() =>
                                      handleEdit(
                                        true,
                                        row[columnNames.current[0]]
                                      )
                                    }
                                  />
                                  <MdDelete
                                    className={`${styles.icon_delete} ${styles.icon}`}
                                    onClick={() =>
                                      handleDeleteRow(
                                        row[columnNames.current[0]]
                                      )
                                    }
                                  />
                                </div>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className={styles.pagination_box}
                  />
                </Paper>
                <div className={styles.error_box}>
                  <p className={styles.error}>There is no data added yet</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </Box>
        )}
      </div>
      {isEdit && (
        <EditWindow
          selectTab={selectTab}
          setIsEdit={setIsEdit}
          editId={dataId}
          type={editType}
          data={data}
          columnNames={columnNames}
          authToken={authToken}
          reloadData={reloadData}
          reloadURL={apiURL}
        />
      )}
    </>
  );
}

export default CmsTable;
