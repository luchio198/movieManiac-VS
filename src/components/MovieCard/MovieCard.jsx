import React from "react";
import "./movieCard.css";
import star from "../../assets/star.png";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie?.id}`} className="movie_card" rel="noreferrer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt="movie_poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie?.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie?.release_date}</p>
          <p>
            {movie?.vote_average?.toFixed(2)}
            <img src={star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie?.overview.substring(0, 100) + "..."}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
