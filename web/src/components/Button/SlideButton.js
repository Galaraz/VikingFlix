import React from 'react';

function SlideButton(props) {
	return (
		<>
			<label className="switch" >
  				<input type="checkbox" onClick={props.onClick}/>
  				<span className="slider round"></span>
			</label>
		</>
  );
}

export default SlideButton;