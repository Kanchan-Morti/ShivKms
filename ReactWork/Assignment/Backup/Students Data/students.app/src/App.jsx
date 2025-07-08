// src/App.js
import { Route, Routes } from "react-router-dom";
import CreateStudent from "./components/CreateStudent.jsx";
import EditStudent from "./components/EditStudent.jsx";
import StudentsTable from "./components/StudentsTable.jsx";
import ViewDetails from "./components/ViewDetails.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StudentsTable />} />
        <Route path="/student/create" element={<CreateStudent />} />
        <Route path="/student/edit/:id" element={<EditStudent />} />
        <Route path="/student/view/:id" element={<ViewDetails />} />
      </Routes>
    </div>
  );
}

export default App;
