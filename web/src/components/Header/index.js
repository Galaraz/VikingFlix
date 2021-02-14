import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import './style.css';
import { Link } from 'react-router-dom';
import API from '../../services/Api';
function Header() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [resultsTv, setResultsTv] = useState([]);
  const [resultsPerson, setResultsPerson] = useState([]);
  const [resultsCompany, setResultsCompany] = useState([]);

  useEffect(() => {
    if (search.length > 3) {
      API.search.movie(search).then((r) => {
        document.getElementsByClassName('search-result')[0].style.display = 'block';
        setResults(r.data.results);
        API.search.tv(search).then((t) => {
          setResultsTv(t.data.results);
          API.search.person(search).then((p) => {
            setResultsPerson(p.data.results);
            API.search.company(search).then((p) => {
              setResultsCompany(p.data.results);
            });
          });
        });
      });
    } else {
      document.getElementsByClassName('search-result')[0].style.display = 'none';
    }
  }, [search]);

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function renderResultsPerson() {
    return resultsPerson.slice(0, 10).map((r) => {
      return (
        <div
          key={r.id}
          onClick={() => {
            document.getElementsByClassName('search-result')[0].style.display = 'none';
          }}>
          <Link to={`/person/${r.id}`}>
            <div className="search-image">
              <img src={API.image(r.profile_path, 'w200')} alt="Celebridade" />
            </div>

            <div className="search-content">
              <div className="search-name">{r.name}</div>

              <div className="search-description">{r.known_for_department}</div>
            </div>
          </Link>
        </div>
      );
    });
  }

  function renderResultsTv() {
    return resultsTv.slice(0, 10).map((r) => {
      return (
        <div
          key={r.id}
          onClick={() => {
            document.getElementsByClassName('search-result')[0].style.display = 'none';
          }}>
          <Link to={`/tv/${r.id}`}>
            <div className="search-image">
              <img src={API.image(r.poster_path, 'w200')} alt="Séries" />
            </div>

            <div className="search-content">
              <div className="search-name">{r.name}</div>

              <div className="search-description">{r.overview}</div>
            </div>
          </Link>
        </div>
      );
    });
  }

  function renderResults() {
    return results.slice(0, 10).map((r) => {
      return (
        <div
          key={r.id}
          onClick={() => {
            document.getElementsByClassName('search-result')[0].style.display = 'none';
          }}>
          <Link to={`/movie/${r.id}`}>
            <div className="search-image">
              <img src={API.image(r.poster_path, 'w200')} alt="Filmes" />
            </div>

            <div className="search-content">
              <div className="search-name">{r.title ? r.title : r.name}</div>

              <div className="search-description">{r.overview}</div>
            </div>
          </Link>
        </div>
      );
    });
  }

  function renderResultsCompany() {
    return resultsCompany.slice(0, 10).map((r) => {
      return (
        <div
          key={r.id}
          onClick={() => {
            document.getElementsByClassName('search-result')[0].style.display = 'none';
          }}>
          <Link to={`/company/${r.id}`}>
            <div className="search-image">
              <img src={API.image(r.logo_path, 'w200')} alt="Produtoras" />
            </div>

            <div className="search-content">
              <div className="search-name">{r.name}</div>
            </div>
          </Link>
        </div>
      );
    });
  }

  return (
    <Navbar bg="light" expand="lg" variant="light" fixed="top" >
      <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Filmes&Series</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/watchlist">watchlist</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container>
      <InputGroup value={search} onChange={handleChange} autoComplete="off" className="mr-sm-2"expand="sm">
        <FormControl
          type="text"
          placeholder="Busque por filmes, séries ou celebridades"
          className="mr-sm-2"
        />
        <div className="search-result">
          {/* Filmes */}
          {renderResults()}
          {/* Séries */}
          {renderResultsTv()}
          {/* Celebridades */}
          {renderResultsPerson()}
          {renderResultsCompany()}
        </div>
      </InputGroup>
      </Container>
    </Navbar>
  );
}
export default Header;
