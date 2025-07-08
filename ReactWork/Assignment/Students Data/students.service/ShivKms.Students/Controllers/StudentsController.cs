using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace StudentsService.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class StudentsController : ControllerBase
    {
        private readonly StudentsDBContext _context;

        public StudentsController(StudentsDBContext context)
        {
            //Added comment line to StudentsController
            _context = context;
        }

        /// <summary>
        /// Retrieves all student records.
        /// </summary>
        /// <returns>A list of all students.</returns>
        [HttpGet("GetAllStudents", Name = "GetAllStudents")]
        public async Task<ActionResult<IEnumerable<StudentsInfo>>> GetStudents()
        {
            return await _context.Students.ToListAsync();
        }


        /// <summary>
        /// Retrieves a student by their unique ID.
        /// </summary>
        /// <param name="id">The ID of the student to retrieve.</param>
        /// <returns>The student record if found; otherwise, a 404 response.</returns>
        [HttpGet("GetStudent/{id}", Name = "GetStudentById")]
        public async Task<ActionResult<StudentsInfo>> GetStudentById(int id)
        {
            if (id <= 0)
                return BadRequest("ID must be a positive integer.");

            var student = await _context.Students.FirstOrDefaultAsync(s => s.Id == id);

            if (student == null)
                return NotFound();

            return Ok(student);
        }

        /// <summary>
        /// Creates a new student record.
        /// </summary>
        /// <param name="studentsInfo">The student information to create.</param>
        /// <returns>The created student record with a 201 Created response.</returns>
        [HttpPost("CreateStudent", Name = "CreateStudent")]
        public async Task<ActionResult<StudentsInfo>> CreateStudent([FromBody] StudentsInfo studentsInfo)
        {
            if (studentsInfo == null)
                return BadRequest("Student data must not be null.");

            _context.Students.Add(studentsInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(CreateStudent), new { id = studentsInfo.Id }, studentsInfo);
        }


        /// <summary>
        /// Updates the details of an existing student using the ID from the request body.
        /// </summary>
        /// <param name="studentsInfo">The updated student information containing the ID.</param>
        /// <returns>204 No Content if the update is successful; otherwise, an error response.</returns>
        [HttpPut("UpdateStudent", Name = "UpdateStudent")]
        public async Task<IActionResult> UpdateStudent([FromBody] StudentsInfo studentsInfo)
        {
            if (studentsInfo == null)
                return BadRequest("Student data must not be null.");

            if (studentsInfo.Id <= 0)
                return BadRequest("Invalid or missing student ID.");

            var existingStudent = await _context.Students.FindAsync(studentsInfo.Id);
            if (existingStudent == null)
                return NotFound($"No student found with ID {studentsInfo.Id}.");

            _context.Entry(existingStudent).CurrentValues.SetValues(studentsInfo);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "An error occurred while updating the student.");
            }

            return NoContent();
        }



        /// <summary>
        /// Deletes a student record based on the provided ID.
        /// </summary>
        /// <param name="id">The ID of the student to delete.</param>
        /// <returns>204 No Content if deletion is successful; otherwise, an error response.</returns>
        [HttpDelete("DeleteStudent/{id}", Name = "DeleteStudentById")]
        public async Task<IActionResult> DeleteStudentById(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid or missing student ID.");

            var student = await _context.Students.FindAsync(id);
            if (student == null)
                return NotFound($"No student found with ID {id}.");

            _context.Students.Remove(student);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "An error occurred while deleting the student.");
            }

            return NoContent();
        }
    }
}
