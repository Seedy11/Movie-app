/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { movieHomeStore } from "../../redux/moviestore/HomeMovie";

export default function Home() {
  const dispatch = useDispatch();
  // useEffect(dispatch(movieAdded));

  useEffect(() => {
    dispatch(movieHomeStore());
  }, [movieHomeStore]);

  const akido = useSelector((state) => state.homeMovie.movieItems);
  console.log("akido", akido);

  return (
    <>
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
          />
        ))
      )}
    </>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
