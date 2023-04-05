import { useEffect, useState } from "react";
import { Movie } from "../models/movie";

function MovieList() {

    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect( () => {
        const getMovieData = async () => {
            const movieTask = await fetch('https://localhost:4000/api/movie/edited');
            const movieJson = await movieTask.json();

            setMovieData(movieJson);
        };
        getMovieData();
    },
        []
    );

    return (
        <>
            <h3>Movie Collection</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Edited</th>
                    </tr>
                </thead>
                <tbody>
                    {movieData.map(m => (
                        <tr>
                            <td>{m.title}</td>
                            <td>{m.director}</td>
                            <td>{m.year}</td>
                            <td>{m.category}</td>
                            <td>{m.rating}</td>
                            <td>{m.edited}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MovieList;