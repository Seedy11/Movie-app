/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Headers } from "../../components/Header/Headers";
import { useDispatch, useSelector } from "react-redux";
import { movieAdded, movieStore } from "../../redux/moviestore/getMovieList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(movieAdded);
  }, [movieAdded]);

  const movieData = useSelector((state) => state.movie.movieItems);

  const handleChange = (value) => {
    setMovieSearch(value);
    dispatch(movieStore(value));
  };

  return (
    <>
      <Headers
        onChange={(e) => handleChange(e.target.value)}
        value={movieSearch}
      />

      {!movieData ? (
        <Card title={"NO MOVIE"} />
      ) : (
        movieData.map((post) => (
          <Card
            key={post.id}
            cardType="homeCard"
            title={post.Title}
            Image={post.Poster}
            Genre={post.Plot}
            Year={post.Year}
            onClick={() => navigate(`/movieDetail/${post.imdbID}`)}
          />
        ))
      )}
    </>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
