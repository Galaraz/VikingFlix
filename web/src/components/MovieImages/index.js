import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../services/Api';


function MovieImages(props) {
	const {id, api} = props;
	const [images, setImages] = useState([]);
	const [openedImage, setOpenedImage] = useState(0);

	useEffect( () => {
		api.images(id).then(r => {
			if(r.data.backdrops) setImages(r.data.backdrops);
			else if(r.data.profiles) setImages(r.data.profiles);
		});
	}, [id, api]);

	function showImage(url, i){
		setOpenedImage(i);
		const div = document.getElementById("open-image");
		const img = div.childNodes[2];
		div.style.display = 'flex';
		img.src = API.image(url, 'original');
	}

	function closeImage(){
		const div = document.getElementById("open-image");
		const img = div.childNodes[0];
		img.src = "";
		div.style.display = 'none';
	}

	function renderImages(){
		return images.map( (p, i) => {
			return (	
					<img key={i} src={API.image(p.file_path, 'w200')} onClick={() => showImage(p.file_path, i)} alt="Foto extra"/>
				)
		});
	}

	function changeImage(step){
		const total = images.length;
		if(openedImage + step >= total){
			showImage(images[0].file_path, 0);
		}
		else if(openedImage + step < 0){
			showImage(images[total - 1].file_path, total - 1);
			
		}
		else{
			showImage(images[openedImage + step].file_path, openedImage + step);
		}
	}

	return(
		<>
			<div id="open-image" className={(props.to === 'person' ? 'photo': '')}>
				<div id="close" onClick={closeImage}>
					
				</div>
				<div className="backward" onClick={() => changeImage(-1)}></div>
				<img alt="Imagem grande" aria-hidden="true" src="https://centralcabos.vteximg.com.br/arquivos/ids/159950-400-400/produto_sem_foto.gif?v=635922653155000000" />
				<div className="forward" onClick={() => changeImage(1)}></div>
			</div>
			<div className="images-movie">
				{renderImages()}
			</div>
		</>
	);
}

export default MovieImages;