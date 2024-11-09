import React from 'react';
import useFetchJson from './Hooks/useFetchJson';
import Movie from './Movie';
import {useData} from "./Context/MovieContext";
const App = () => {
   const {searchQuery,filterQuery,sortQuery}=useData(); 
  const { data:loadedmovies, loading, error } = useFetchJson('http://localhost:3000/Movie_list.json');

  console.log(searchQuery, sortQuery,filterQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  
    if(loading){
        return <p className="error">movies fetching..,</p>
    }
    // if(!loadedmovies){
        
    //     return <Errors title="Error Fetching movies" message="unable to fetch movies" />
    // }
    
    var filteredmovies= loadedmovies.filter(movie=> movie.name.toLowerCase().includes(searchQuery.toLowerCase()));
    // filteredmovies=loadedmovies; .filter(movie=>movie..toLowerCase().includes(filterQuery.toLowerCase()))
    filteredmovies=filteredmovies.filter(movie=> movie.genre.toLowerCase().includes(filterQuery.toLowerCase()));
    if(sortQuery==="RatingL2H"){
        filteredmovies=filteredmovies.sort((movie1,movie2)=>( movie1.rating)-(movie2.rating));
    }
    else if(sortQuery==="RatingH2L"){
        filteredmovies=filteredmovies.sort((movie1,movie2)=>(movie2.rating)-( movie1.rating));
    }
    else if(sortQuery==="AtoZ"){
        filteredmovies=filteredmovies.sort((movie1,movie2)=>{
            const name1 = movie1.name; // Convert names to uppercase for case-insensitive comparison
            const name2 = movie2.name;
            if (name1 < name2) {
              return -1; // Name A should come before name B
            }
            if (name1 > name2) {
            return 1; // Name A should come after name B
            }
            return 0;
        });
    }


//     // if(filteredmovies.length===0){
        
//     //     return <Errors title="Movies searching is not available" message="Movies searching is not available please search for other Movies" />
//     // }




  return (
    <div >
      {filteredmovies ? (
        
        <ul className='movies'>
         {filteredmovies.map(movie=>(// <Movie key={movie.name} movie={movie} />
            // <li>
            //     <h3>{movie.name}</h3>
            //     <p>{movie.rating}</p>
            //     <p>{movie.genre}</p>
            // </li>
           
            <Movie movie={movie} key={movie.name} ></Movie>
            )
            )}   
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;
