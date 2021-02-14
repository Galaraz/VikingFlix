import axios from 'axios';
import {
		API_AUTH_KEY, API_MOVIE_URL, API_LANG, API_PERSON_URL, API_SEARCH,
		API_GENRES, API_TV_URL, API_TRENDS_URL, API_CERTIFICATE_MOVIE,
		API_DISCOVERY_MOVIE, API_COMPANY_URL, API_DISCOVERY_TV

	
	} from '../../config.json';



const API = {
	image: (img, size='w500') => {
		if(!img) return 'https://centralcabos.vteximg.com.br/arquivos/ids/159950-400-400/produto_sem_foto.gif?v=635922653155000000';
		return `https://image.tmdb.org/t/p/${size}/${img}`;
	},

	genres: async (lang=API_LANG) => {
		return await axios.get(`${API_GENRES}?api_key=${API_AUTH_KEY}&language=${lang}`);
	},

	company: async (id) => {
		return await axios.get(`${API_COMPANY_URL}/${id}?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
	},	
	
	movies:{
		popular: async (page=1) => {
			try{
				return await axios.get(`${API_MOVIE_URL}/popular/?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=${page}`);
			}   
			catch(err){
				console.log(err.response);
			}
		},

		topRated: async (page=1) => {
			try{
				return await axios.get(`${API_MOVIE_URL}/top_rated/?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=${page}`);
			}   
			catch(err){
				console.log(err.response);
			}
		},

		detail: async (movie_id) => {
			try{
				return await axios.get(`${API_MOVIE_URL}/${movie_id}?api_key=${API_AUTH_KEY}&language=${API_LANG}`)
			}catch(err){
				console.log(err.response);
			}
		},

		credits: async (movie_id) => {
			return await axios.get(`${API_MOVIE_URL}/${movie_id}/credits?api_key=${API_AUTH_KEY}`);
		},

		recommendations: async (movie_id) => {
			return await axios.get(`${API_MOVIE_URL}/${movie_id}/recommendations?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=1`);
		},

		images: async (movie_id) => {
			return await axios.get(`${API_MOVIE_URL}/${movie_id}/images?api_key=${API_AUTH_KEY}`);
		},

		trends: async () => {
			return await axios.get(`${API_TRENDS_URL}/movie/day?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		},

		certifications: async () => {
			return await axios.get(`${API_CERTIFICATE_MOVIE}?api_key=${API_AUTH_KEY}`);
		},

		discovery: async (obj) => {
			let url = `${API_DISCOVERY_MOVIE}?api_key=${API_AUTH_KEY}&language=${API_LANG}`;
			for(let i in obj){
				if(obj[i]){
					url += `&${i}=${obj[i]}`
				}
			}
			return await axios.get(url);
		}
	},

	person: {
		credits: async (person_id) => {
			return await axios.get(`${API_PERSON_URL}/${person_id}/movie_credits?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		},
		creditsTv: async (person_id) => {
			return await axios.get(`${API_PERSON_URL}/${person_id}/tv_credits?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		},
		detail: async (person_id)=>{
			return await axios.get(`${API_PERSON_URL}/${person_id}?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		},
		images: async (person_id) => {
			return await axios.get(`${API_PERSON_URL}/${person_id}/images?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		}
	},

	search:{
		movie: async (movie) => {
			return await axios.get(`${API_SEARCH}/movie?api_key=${API_AUTH_KEY}&language=${API_LANG}&query=${movie}`);
		},

		tv: async (movie) => {
			return await axios.get(`${API_SEARCH}/tv?api_key=${API_AUTH_KEY}&language=${API_LANG}&query=${movie}`);
		},

		person: async (person) => {
			return await axios.get(`${API_SEARCH}/person?api_key=${API_AUTH_KEY}&language=${API_LANG}&query=${person}`);
		},

		company: async (company) => {
			return await axios.get(`${API_SEARCH}/company?api_key=${API_AUTH_KEY}&language=${API_LANG}&query=${company}`);
		}
	},

	tv: {
		popular: async (page=1) => {
			try{
				return await axios.get(`${API_TV_URL}/popular/?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=${page}`);
			}   
			catch(err){
				console.log(err.response);
			}
		},

		topRated: async (page=1) => {
			try{
				return await axios.get(`${API_TV_URL}/top_rated/?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=${page}`);
			}   
			catch(err){
				console.log(err.response);
			}
		},

		detail: async (movie_id) => {
			try{
				return await axios.get(`${API_TV_URL}/${movie_id}?api_key=${API_AUTH_KEY}&language=${API_LANG}`)
			}catch(err){
				console.log(err.response);
			}
		},

		credits: async (movie_id) => {
			return await axios.get(`${API_TV_URL}/${movie_id}/credits?api_key=${API_AUTH_KEY}`);
		},

		recommendations: async (movie_id) => {
			return await axios.get(`${API_TV_URL}/${movie_id}/recommendations?api_key=${API_AUTH_KEY}&language=${API_LANG}&page=1`);
		},

		images: async (movie_id) => {
			return await axios.get(`${API_TV_URL}/${movie_id}/images?api_key=${API_AUTH_KEY}`);
		},

		seasons: async (movie_id) => {
			return await axios.get(`${API_TV_URL}/${movie_id}/images?api_key=${API_AUTH_KEY}`);
		},

		trends: async () => {
			return await axios.get(`${API_TRENDS_URL}/tv/day?api_key=${API_AUTH_KEY}&language=${API_LANG}`);
		},

		discovery: async (obj) => {
			let url = `${API_DISCOVERY_TV}?api_key=${API_AUTH_KEY}&language=${API_LANG}`;
			for(let i in obj){
				if(obj[i]){
					url += `&${i}=${obj[i]}`
				}
			}
			return await axios.get(url);
		}
	}
}

export default API;