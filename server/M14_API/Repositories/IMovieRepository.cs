using M14_API.Models;

namespace M14_API.Repositories
{
    public interface IMovieRepository
    {
        IEnumerable<Movie> GetMovies();
        IEnumerable<Movie> GetEditedMovies();
    }
}
