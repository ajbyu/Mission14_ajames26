using M14_API.Contexts;
using M14_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace M14_API.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        public MovieRepository(MovieDbContext context)
        {
            _context = context;
        }

        public MovieDbContext _context { get; }

        public IEnumerable<Movie> GetMovies()
        {
            return _context.Movies.ToList();
        }

        public IEnumerable<Movie> GetEditedMovies()
        {
            var movies = _context
                .Set<Movie>()
                .Where(Movie => Movie.Edited == "Yes")
                .OrderBy(movie => movie.Title)
                .ToList();

            return movies;
        }
    }
}
