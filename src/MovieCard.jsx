import React from "react";

const MovieCard = ({ movie }) =>{
    return(
        <div className="Movie">
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            <div>
                <span>{movie.type}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;