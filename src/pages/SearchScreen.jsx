import React, {useState, useEffect} from 'react';
import queryString from 'query-string';

import {useLocation} from 'react-router-dom';
import {Characters} from '../models/Characters';

export const SearchScreen = ({history}) => {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  // const params = new URLSearchParams(location.search);

  // const s = params.get('search');
  const {s = ""} = queryString.parse(location.search);

  console.log("Valor de s");
  console.log(s);
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('?query='+search);

  }

  const getCharacter = () => {
    const value = search.toLocaleLowerCase();
    if (value === '') {
      setCharacters([]);
      return ;
    }
    const c = Characters.filter(e => e.name.toLocaleLowerCase().includes(value));
    setCharacters(c);
  }

  useEffect(() => {
    getCharacter();
    console.log("Personajes");
    console.log(characters);
  }, [s])

  return (
    <div className="container my-5">
      <h1>Search screen</h1>
      <div className="row">
        <div className="col-lg-4 col-xl-5 col-sm-6 mt-3">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-lg-8 col-xl-7 col-sm-6 mt-3">
          <h2>Resultados</h2>
        </div>
        
      </div>
    </div>
  )
};