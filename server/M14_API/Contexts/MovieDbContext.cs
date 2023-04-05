using M14_API.Models;
using Microsoft.EntityFrameworkCore;

namespace M14_API.Contexts
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }
    }
}
