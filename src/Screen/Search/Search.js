/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Headers } from "../../components/Header/Headers";
import { useDispatch, useSelector } from "react-redux";
import { movieAdded, movieStore } from "../../redux/moviestore/getMovieList";
import { useNavigate } from "react-router-dom";
import HomeContaner from "../Home/Home.element";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(movieAdded);
  }, [movieAdded]);

  const movieData = useSelector((state) => state.movie.movieItems);
  console.log("movie", movieData);
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
      <HomeContaner>
        {/* <Headers
          onChange={(e) => handleChange(e.target.value)}
          value={movieSearch}
        /> */}

        {movieData
          ? movieData.map((post) => (
              <Card
                key={post.id}
                cardType="movieCard"
                title={post.Title}
                Image={post.Poster}
                Genre={post.Plot}
                Year={post.Year}
                onClick={() => navigate(`/movieDetail/${post.imdbID}`)}
              />
            ))
          : null}
      </HomeContaner>
    </>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
