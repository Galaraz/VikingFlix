import React from 'react';

function Main(props) {
	return (
		<main onClick={() => {document.getElementsByClassName('search-result')[0].style.display = 'none'}}>
			{props.children}
	  	</main>
  	);
}

export default Main;