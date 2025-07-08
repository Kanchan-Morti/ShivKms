import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from "./styles/ViewDetailsStyle.module.css";

function ViewDetails() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/students/" + id)
      .then((res) => res.json())
      .then((data) => setStudentData(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className={styles.viewContainer}>
      <h1>View Students Data</h1>
      <hr />
      {studentData && (
        <div className={styles.viewDetails}>
          <p>
            <strong>ID: </strong>
            {studentData.id}
          </p>
          <p>
            <strong>Name: </strong>
            {studentData.name}
          </p>
          <p>
            <strong>Place: </strong>
            {studentData.place}
          </p>
          <p>
            <strong>Phone: </strong>
            {studentData.phone}
          </p>
        </div>
      )}
      <Link to="/" className={`btn ${styles.btnBack}`}>
        Back
      </Link>
    </div>
  );
}

export default ViewDetails;