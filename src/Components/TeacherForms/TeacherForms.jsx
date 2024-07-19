function TeacherForms() {
  return (
    <div className="form_box">
      <form></form>
    </div>
  );
}

function Form({ formFor }) {
  return (
    <div className="form_box">
      {
        // for vidoes
        formFor === "videos" ? (
          <form>
            <input />
          </form>
        ) : formFor === "assignments" ? (
          // for assignments uploading
          <form></form>
        ) : (
          // for notes
          <form></form>
        )
      }
    </div>
  );
}

export default TeacherForms;
