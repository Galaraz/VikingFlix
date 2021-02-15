import React, { useState, useEffect } from 'react';
import API from '../../services/Api';
import Section from '../Section';
function Home() {
	const [genres, setGenres] = useState();

	useEffect(() => {
		document.title = "Filmes | Viking-Flix"
		API.genres().then(r => {
			setGenres(r.data.genres);
		})
	}, []);
	
	if(!genres){
		return <></>
	}

	return (
		<>
			<Section f={API.movies.trends} title="Tendências" genres={genres} />	
			<Section f={API.movies.popular} title="Filmes Populares" genres={genres} />
			<Section f={API.tv.trends} title="Tendências" genres={genres} to="tv" />	
			<Section f={API.tv.popular} title="Séries Populares" genres={genres} to="tv" />	
				
		</>
	);
}

export default Home;