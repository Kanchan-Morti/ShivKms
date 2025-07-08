const BASE_URL = "https://localhost:7202";

const apiRoutes = {
  students: {
    getAllStudentsUrl: `${BASE_URL}/Students/GetAllStudents`,
    getStudentsByIdUrl: (id) =>
      `${BASE_URL}/https://localhost:7202/Students/GetStudent/${id}`,
    createStudentUrl: `${BASE_URL}/Students/CreateStudent`,
    updateStudentUrl: (id) => `${BASE_URL}/Students/UpdateStudent`,
    deleteStudentsByIdUrl: (id) => `${BASE_URL}/Students/DeleteStudent/${id}`,
  },
};

export default apiRoutes;
