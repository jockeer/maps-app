import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResult } from './SearchResult';


export const SearchBar = () => {

  const {searchPlacesByQuery} = useContext(PlacesContext)
  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChange = ( e:ChangeEvent<HTMLInputElement> ) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current= setTimeout(() => {
      // console.log('debounceValue:', e.target.value);
      searchPlacesByQuery(e.target.value)
    }, 350);
  }

  return (
    <div className="search-container">
        <input type="text" 
          className="form-control"
          placeholder="Buscar lugar..."
          onChange={onQueryChange}
        />

      <SearchResult />


    </div>
  )
}
