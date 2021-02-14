import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Section from '../Section';
import Elenco from '../Elenco';
import MovieImages from '../MovieImages';
import  MovieControls  from "../MovieCrud/MovieControls";
import API from '../../services/Api';

import './style.css';


const medias = {
	'tv': API.tv,
	'movie': API.movies
}

function MovieDetail(props) {
	const {id, media} = useParams();
	const [movie, setMovie] = useState({});
	const [cast, setCast] = useState([]);
	const [director, setDirector] = useState([]);
	const [genres, setGenres] = useState();
	
	useEffect( () => {
		medias[media].detail(id).then(r => {
			setMovie(r.data);
			document.title = (r.data.title ? r.data.title : r.data.name );
			window.scrollTo(0, 0);
			
			medias[media].credits(id).then(cr => {
				setCast(cr.data.cast);
				if(media === 'movie'){
					for(let i = 0; i < cr.data.crew.length; i++){
						let c = cr.data.crew[i];
						if(c.job === 'Director'){
							setDirector([c]);
							break;
						}
					}
				}
				else{
					setDirector(r.data.created_by);
				}
			});
		});
		API.genres().then(r => {
			setGenres(r.data.genres);
		})
	
	}, [id, media]);


	function renderFristActors(){

		return cast.slice(0, 4).map(a => {
			return <Link key={a.id} to={`/person/${a.id}`}>{a.name}</Link>
		})
	}

	function renderDirectors(){

		return director.map(a => {
			return <Link key={a.id} to={`/person/${a.id}`}>{a.name}</Link>
		})
	}

	function renderCompanies(data){

		return data.map(a => {
			return <Link key={a.id} to={`/company/${a.id}`}>{a.name}</Link>
		})
	}

	function renderGenres(){
		return movie.genres.map(g => {
			return <span key={g.id}>{g.name}</span>
		});
	}

	function renderMovieFooter(movie){
			if(media === 'movie')
				return(
					<>
						<div className="realease-date">Lançamento: <b>{ formatDate( (movie.release_date ? movie.release_date : movie.first_air_date)) }</b></div>
						<div className="duration">Duração: <b>{ (movie.runtime ? movie.runtime : movie.episode_run_time[0]) }m</b></div>
						<div className="budget">Orçamento: <b>{ formatValue(movie.budget) }</b></div>
						<div className="revenue">Faturamento: <b>{ formatValue(movie.revenue) }</b> </div>
					</>
				)
			
			else
				return(
					<>
						<div className="realease-date">Lançamento: <b>{ formatDate( (movie.release_date ? movie.release_date : movie.first_air_date)) }</b></div>
						<div className="duration">Duração: <b>{ (movie.runtime ? movie.runtime : movie.episode_run_time[0]) }m</b></div>
						<div className="budget">Temporadas: <b>{ movie.number_of_seasons }</b></div>
						<div className="revenue">Ultimo episódio: <b>{ formatDate(movie.last_air_date) }</b> </div>
					</>
				)
			
		}

	function formatDate(date){
		if(!date) return false;
		return date.split('-').reverse().join('/');
	}

	function formatValue(value){
		if(!value) return false
		let n = value.toString();
		let t = n.length;
		let money = '';
		let aux = 0;
		for(let i = t-1; i >= 0; i--){
			money = n[i] + money;
			aux++;
			if(aux >= 3 && i > 0){
				money = '.' + money;
				aux = 0;
			}
		}
		return `$ ${money}`;
	}

	if(!movie.title && !movie.name){
		return <span>Loading</span>
	}
	return (
		<>
			<div className="movie">
				<div className="movie-poster">
					<img alt={movie.title} src={API.image(movie.poster_path)}/>
				</div>
				<div className="movie-detail">
					<div className="movie-header">
						<div className="movie-title">{ (movie.title ? movie.title : movie.name) } | <small>{ (movie.original_title ? movie.original_title : movie.original_name) }</small></div>
						<div className="movie-rate">{ movie.vote_average }</div>
					</div>
					<div className="movie-overview">{ movie.overview }</div>
					<div className="movie-genres">
						{
							renderGenres()
						}
					</div>
					<div className="movie-casting">		
						<div className="movie-director">
							{
								(media === 'tv' ? 'Criada por: ': 'Diretor: ')
							}
							{
								renderDirectors()
							}
						</div>

						<div className="movie-actors">
							Elenco: {renderFristActors()}
						</div>

						<div className="movie-companies">
							Estúdio: {renderCompanies(movie.production_companies)}
						</div>
					</div>
					<div className="movie-footer">
						{renderMovieFooter(movie)}
					</div>
				</div>
			</div>
			<MovieImages id={id} api={medias[media]} />
			<MovieControls  movie={movie} />
			<Section title="Recomendados" f={() => medias[media].recommendations(id)} genres={genres} to={media} limit={5}/>
			<Elenco cast={cast}/>
		</>
	)
	
}

export default MovieDetail;