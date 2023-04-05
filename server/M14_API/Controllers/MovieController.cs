using M14_API.Models;
using M14_API.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace M14_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        public MovieController(IMovieRepository movieRepository)
        {
            _repo = movieRepository;
        }

        private readonly IMovieRepository _repo;

        //Get all movies
        [HttpGet]
        public IEnumerable<Movie> GetMovies()
        {
            return _repo.GetMovies();
        }

        //Get just edited movies
        [HttpGet("edited")]
        public IEnumerable<Movie> GetEditedMovies()
        {
            return _repo.GetEditedMovies();
        }
    }
}
