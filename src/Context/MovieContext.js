// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const useData = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setfilterQuery] = useState('');
 const [sortQuery,setsortQuery]=useState(''); 
  const setSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
  };
  const setfilter = (query) => {
    console.log(query);
    setfilterQuery(query);
  };
  const setSort = (query) => {
    console.log(query);
    setsortQuery(query);
  };
  return (
    <MovieContext.Provider value={{  searchQuery,filterQuery,sortQuery, setSearch,setfilter,setSort}}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContext;
