import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/Api';
import MovieImages from '../MovieImages';
import Section from '../Section';
import './style.css';

function Person() {
	const {id} = useParams();
	const [person, setPerson] = useState({});
	const [genres, setGenres] = useState([]);
	useEffect( () => {
		API.genres().then(r => {
			setGenres(r.data.genres);
		})
		
		API.person.detail(id).then(r => {
			setPerson(r.data);
			window.scrollTo(0, 0);
			document.title = `${r.data.name} | ${r.data.known_for_department}`
		});

	}, [id]);

	function formatDate(date){
		if(!date) return false;
		return date.split('-').reverse().join('/');
	}

	function renderMovieFooter(person){
			return(
				<>
					<div className="realease-date">Nascimento: <b>{ formatDate( person.birthday) }</b></div>
					{(person.deathday ? 
						<div className="release-date">
							Morte: <b>{formatDate(person.deathday) }</b>
						</div> : '')}
				</>
			)
		}

	return(
		<>
			<div className="movie">
				<div className="movie-poster">
					<img alt={person.name} src={API.image(person.profile_path)}/>
				</div>
				<div className="movie-detail">
					<div className="movie-header">
						<div className="movie-title">{ person.name } | {person.known_for_department}</div>
						
					</div>
					<div className="movie-overview">{ person.biography }</div>
					<div className="movie-genres">
												
					</div>
					<div className="movie-casting">		
						<div className="movie-director">
							Nascido em: {person.place_of_birth}
						</div>
						
					</div>
					<div className="movie-footer">
						{renderMovieFooter(person)}
					</div>
				</div>
			</div>
			<MovieImages id={id} api={API.person} to="person"/>
			<Section title="Filmes" f={() => API.person.credits(id)} genres={genres} to='movie' limit={20}/>
			<Section title="Séries" f={() => API.person.creditsTv(id)} genres={genres} to='tv' limit={20}/>
			<Section title="Filmes por trás da camera" f={() => API.person.credits(id)} crew={true} genres={genres} to='movie' limit={10}/>

		</>
	)
}

export default Person;