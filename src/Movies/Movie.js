import React, { useState, useEffect } from "react";

function Movie(props) {
        

    return  <div className="item">
                <img src={props.movieImg} alt={props.movieTitle} /><br />
                {props.movieTitle} <br />
                {props.movieGenre} <br />
            </div>
}

export default Movie
