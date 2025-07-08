import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./styles/StudentsStyle.css";

function EditStudent() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setvalidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    fetch("https://localhost:7202/Students/GetStudent/" + id)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPlace(data.place);
        setPhone(data.phone);
      })
      .catch((err) => console.log("Error while fetching student data : ", err.message));
  }, [id]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch("https://localhost:7202/Students/UpdateStudent", {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(() => {
        alert("Student data updated successfully");
        navigate("/"); 
      })
      .catch((err) => console.log(err.message));
  };
    return (
      <div className="Container">
        <h1>Edit Student Details</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            required
            value={id}
            disabled
          />

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
            <button className="btn btn-save">Update</button>
            <Link to="/" className="btn btn-Back">
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }


  export default EditStudent;