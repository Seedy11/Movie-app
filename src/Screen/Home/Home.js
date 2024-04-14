/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { movieHomeStore } from "../../redux/moviestore/HomeMovie";
import HomeContaner from "./Home.element";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const akido = useSelector((state) => state.homeMovie.movieItems);

  useEffect(() => {
    dispatch(movieHomeStore());
  }, [movieHomeStore]);

  return (
    // <Container>
    <HomeContaner>
      {!akido ? (
        <Card title={"NO MOVIE"} />
      ) : (
        akido.map((post) => (
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
      )}
    </HomeContaner>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
