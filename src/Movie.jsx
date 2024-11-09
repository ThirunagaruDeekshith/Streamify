import { useContext } from "react";
import Button from "./UI/Button";
export default function Movie({movie}) {
    return <li className="movie">
        <article>
            <img
             src={`${movie.movie_poster}`}
             alt={movie.name}/>
            <div>
                <h3>{movie.name}</h3>
                <p className="movie-rating">{movie.rating}</p>
                <p className="movie-genre">{movie.genre}</p>
            </div>
        </article>
    </li>
}