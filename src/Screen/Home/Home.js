/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { movieHomeStore } from "../../redux/moviestore/HomeMovie";
import HomeContaner from "./Home.element";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movieData = useSelector((state) => state.homeMovie.movieItems);

  useEffect(() => {
    dispatch(movieHomeStore());
  }, [movieHomeStore]);

  return (
    <Container>
      <HomeContaner>
        {!movieData ? (
          <Card title={"NO MOVIE"} />
        ) : (
          movieData.map((post) => (
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
    </Container>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
