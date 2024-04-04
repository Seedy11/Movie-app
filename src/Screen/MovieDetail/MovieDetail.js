/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const params = useParams();
  const movieId = params.id;
  const [movieDetail, setMovieDetail] = useState({});

  React.useEffect(() => {
    async function movieDetailData() {
      try {
        const getData = await axios.get(
          `http://www.omdbapi.com/?i=${movieId}&apikey=f1aa2fec&plot=full`
        );
        setMovieDetail(getData.data);
      } catch (error) {
        return error;
      }
    }

    movieDetailData();
  }, []);

  return (
    <div>
      {!movieDetail ? (
        <h2>no movie</h2>
      ) : (
        <div>
          <h1>{movieDetail.Title}</h1>
          <img src={movieDetail.Poster}></img>
          <p>{movieDetail.Actors}</p>
          <p>{movieDetail.Awards}</p>
          <p>{movieDetail.BoxOffice}</p>
          <p>{movieDetail.Country}</p>
          <p>{movieDetail.Genre}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
