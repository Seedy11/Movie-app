/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Headers } from "../../components/Header/Headers";
import { useDispatch, useSelector } from "react-redux";
import { movieAdded, movieStore } from "../../redux/moviestore/getMovieList";

export default function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAdded);
  }, [movieAdded]);

  const akido = useSelector((state) => state.movie.movieItems);
  console.log("akido", akido);

  // async function testData() {
  //   try {
  //     const getData = await axios.get(
  //       `http://www.omdbapi.com/?i=tt0462499&apikey=f1aa2fec&plot=full`
  //     );

  //     console.log("data", getData.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // console.log("testing API", testData());
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

      {!akido ? (
        <Card title={"NO MOVIE"} />
      ) : (
        akido.map((post) => (
          <Card
            key={post.id}
            cardType="homeCard"
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
