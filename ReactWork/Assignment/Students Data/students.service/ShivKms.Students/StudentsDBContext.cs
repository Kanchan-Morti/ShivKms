using Microsoft.EntityFrameworkCore;

namespace StudentsService
{

    public class StudentsDBContext : DbContext
    {
        public StudentsDBContext(DbContextOptions<StudentsDBContext> options) : base(options) { }

        public DbSet<StudentsInfo> Students { get; set; }
    }
}
