import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles/CreateStudentStyle.css';

function CreateStudent() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Place, setPlace] = useState("");
  const [Phone, setPhone] = useState("");
  const [validation, setvalidation] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { Name, Place, Phone };
    fetch("https://localhost:7202/Students/CreateStudent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then(() => {
        alert("Student data saved successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
    return (
      <div className="Container">
        <h1>Add New Student</h1>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            required
            value={Name}
            onChange={(e) => setName(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {Name.length === 0 && validation && (
            <span className="errorMsg">Please Enter your name</span>
          )}

          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="Place"
            name="Place"
            required
            value={Place}
            onChange={(e) => setPlace(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {Place.length === 0 && validation && (
            <span className="errorMsg">Please Enter your place</span>
          )}

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="Phone"
            name="Phone"
            required
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {Phone.length === 0 && validation && (
            <span className="errorMsg">Please Enter your Mobile number</span>
          )}

          <div>
            <hr></hr>

            <button className="btn btn-save">Save</button>
            <Link to="/" className="btn btn-Back">
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }


export default CreateStudent