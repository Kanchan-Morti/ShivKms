import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles/CreateStudentStyle.css';

function CreateStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setvalidation] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch("http://localhost:8000/students", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {name.length === 0 && validation && (
            <span className="errorMsg">Please Enter your name</span>
          )}

          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            required
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {place.length === 0 && validation && (
            <span className="errorMsg">Please Enter your place</span>
          )}

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onMouseDown={() => setvalidation(true)}
          />
          {phone.length === 0 && validation && (
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