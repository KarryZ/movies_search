import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom';
import './search.css';
import SearchInput from '../search-input';
import SearchButton from '../search-button';


let Search = () => {
  let history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  let onSearchTextChanged = (e) => {
    let searchValue = e.target.value;
    setSearchValue( searchValue);
  }

  let onMovieSearch = (e) => {
    history.push(searchValue ? '/search/' + searchValue : '/Home');
    console.log("search: ", searchValue)
  }



  return (
    <div className='search'>
      <SearchInput searchValue={searchValue} onSearchTextChanged={onSearchTextChanged} />
      <SearchButton onMovieSearch={onMovieSearch} />
    </div>
  )

}


export default Search;