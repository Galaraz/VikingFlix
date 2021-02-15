import React, { useState, useEffect } from 'react';
import API from '../../services/Api';
import './style.css';
import { Link } from 'react-router-dom';
import SlideButton from '../Button/SlideButton';
function Elenco(props) {
  const cast = props.cast;
  const [limit, setLimit] = useState(5);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, []);

  useEffect(() => {
    if (showAll) {
      setLimit(cast.lenght);
    } else {
      setLimit(5);
    }
  }, [showAll, cast.lenght]);

  function renderCast() {
    return cast.slice(0, limit).map((c) => {
      return (
        <div key={c.id} className="cast-person">
          <Link to={`/person/${c.id}`}>
            <div className="person-header">
              <img alt={c.name} src={API.image(c.profile_path)} />
            </div>

            <div className="person-body">
              <div className="person-name">
                <span>{c.name}</span>
              </div>
              <div className="person-character">
                <span>{c.character}</span>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  function handleClick() {
    setShowAll(!showAll);
  }

  return (
    <div>
      <div className="movie-cast-header">
        <h3>Elenco</h3>
        <div>
          <span>Mostrar todos</span>
          <SlideButton onClick={handleClick} />
        </div>
      </div>
      <div className="movie-cast">{renderCast()}</div>
    </div>
  );
}

export default Elenco;
