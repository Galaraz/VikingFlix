import React, { useState, useEffect } from 'react';
import API from '../../services/Api';
import { Link } from 'react-router-dom';
/* import './style.css'; */
import SlideButton from '../Button/SlideButton';
import ResultCard from '../MovieCrud/ResultCard';

function Section(props) {
	const genres = props.genres;
	const [movies, setMovies] = useState([]);
	const f = props.f;
	const [showAll, setShowAll] = useState(false);

	const [load, setLoad] = useState(true);
	const to = props.to ? props.to : 'movie';
	useEffect( () => {
		setLoad(true);
		f().then( r => {
			if(r.data.results) setMovies(r.data.results);
			else if(props.crew){
				if(r.data.crew) setMovies(r.data.crew);
			}
			else if(r.data.cast) setMovies(r.data.cast);
			setLoad(false);
		});
	}, [f, props.crew]);


	function renderMovieFooter(movie){
		return movie.genre_ids.map(id => {
			return genres.map(g => {
				if(g.id === id){											
					return <span key={g.id}>{g.name}</span>
				}
				return false;
			})
		})
	}

	function renderMovies(movies){
		let aux = [];
		if(!showAll) aux = movies.slice(0, 5);
		else aux = movies;
		return aux.map(movie => {
			return (
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
					<ResultCard movie={movie} />
				</div>
			)
		});
	}

	function handleClick(){
		setShowAll( (!showAll) );
	}

	if(load){
		return <p>Carregando...</p>
	}

	if(movies.length <= 0){
		return (
			<>
			<div className="section-header">
				<h3>{props.title}</h3>
				<div>
					<span>Mostrar todos</span>
					<SlideButton  onClick={handleClick}/>
				</div>
			</div>
			<p>Nada encontrado</p>
			</>
		)
	}

	return (
			<section>
				<div className="section-header">
					<h3>{props.title}</h3>
					<div>
						<span>Mostrar todos</span>
						<SlideButton  onClick={handleClick}/>
					</div>
				</div>
				<section>
					{renderMovies(movies)}
				</section>
			</section>
	);
}

export default Section;