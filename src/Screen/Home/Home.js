/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Headers } from "../../components/Header/Headers";
import { useDispatch } from "react-redux";
import { MovieStore, movieStore } from "../../redux/moviestore/getMovieList";

export default function Home() {
  const [post, setPost] = useState("");
  const [movieSearch, setMovieSearch] = useState("");
  const dispatch = useDispatch();

  async function getMovieData() {
    try {
      const getData = await axios.get(
        `http://www.omdbapi.com/?s='${movieSearch}'&apikey=f1aa2fec&`
      );
      setPost(getData.data.Search);
      console.log("data", getData.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (value) => {
    setMovieSearch(value);
    getMovieData(value);
  };

  return (
    <>
      <Headers
        onChange={(e) => handleChange(e.target.value)}
        value={movieSearch}
      />

      {!post ? (
        <Card title={"NO MOVIE"} />
      ) : (
        post.map((post) => (
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
