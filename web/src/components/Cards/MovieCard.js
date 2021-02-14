import React from 'react';
import API from '../../services/Api';
import { Link } from 'react-router-dom';

const MovieCard({ movie, type }) =>{
    return(
    <div className="movie-card" key={`${props.title}-${movie.id}-${movie.job}`}>
    <Link to={`/${to}/${movie.id}`}>
        <div className="movie-poster">
            <img alt={movie.title} src={API.image(movie.poster_path)}/>
        </div>
        <div className="movie-body">
            <div className="movie-title">
                <span>{(movie.title ? movie.title : movie.name)}</span>
            </div>
            <div className="movie-badge">
                <span>{movie.vote_average}</span>
            </div>
        </div>
        <div className="movie-footer">
            {
                renderMovieFooter(movie)
            }
        </div>
            {
                (movie.character ? 
                    <div className="movie-character"><span>{movie.character}</span></div> 
                    
                    : (movie.job ? 
                    <div className="movie-character"><span>{movie.job}</span></div>										
                        
                        : ''))
                }
    </Link>
</div>);
}

export default MovieCard;