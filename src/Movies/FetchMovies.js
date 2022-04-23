import React,{useState, useEffect} from "react";
import axios from "axios"

import Movie from "./Movie";
import SearchFilterMovies from "./SearchFilterMovies";

function FetchMovies(){
    const [movies, setMovies]= useState([])

    useEffect(function(){
        function getMovies(){
            axios.get("https://yts.mx/api/v2/list_movies.json").then(data=>{
                console.log(data.data.data.movies);
                setMovies(data.data.data.movies);
                
            })
        }
        getMovies();
        
    },[]);

    if(movies[0]){

        console.log("test",movies[0].title);
    }

    return <div>
        <SearchFilterMovies/>
        <div className="main-container">
            {movies.map(movie => <Movie movieTitle={movie.title} movieImg={movie.medium_cover_image} movieGenre={movie.genres} /> )}
        </div>
    </div>
}


export default FetchMovies