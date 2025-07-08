import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; //importing link is more important//
import "./styles/StudentsStyle.css";

function StudentsTable() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const DisplyDetails = (id) => {
    navigate("/student/view/"+ id);
  }
  const EditDetails = (id) => {
    navigate("/student/edit/" + id);
  };
  const DeleteDetails = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch("https://localhost:7202/Students/DeleteStudent/" + id, {
        method: "DELETE",
      })
        .then(() => {
          alert("Student data Deleted successfully");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    };
    };
    
    
  useEffect(() => {
    fetch("https://localhost:7202/Students/GetAllStudents")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err.message));
        },[])

  return (
    <div className="container">
      <h1>Student Records</h1>
      <hr />
      <div className="button-wrapper">
        <Link to={"/student/create"} className="btn btn-add">
          Add new student
        </Link>
      </div>
      <hr />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      onClick={() => DisplyDetails(item.id)}
                      className="btn btn-info">
                      View
                    </button>
                    <button
                      onClick={() => EditDetails(item.id)}
                      className="btn btn-primary">
                      Edit
                    </button>
                    <button
                      onClick={() => DeleteDetails(item.id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsTable;