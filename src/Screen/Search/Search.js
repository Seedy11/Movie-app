/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { Headers } from "../../components/Header/Headers";
import { useDispatch, useSelector } from "react-redux";
import { movieAdded, movieStore } from "../../redux/moviestore/getMovieList";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  EmptyState,
  SearchContainer,
  SearchHeader,
  SearchInput,
} from "./Search.element";
import { NetflixCard } from "../Home/Home.element";

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
      {/* Search Header */}
      <SearchHeader>
        <h1>Search Movies</h1>
        <p>Find your favorite movies and explore details</p>

        <SearchInput
          type="text"
          placeholder="Search for a movie..."
          value={movieSearch}
          onChange={(e) => handleChange(e.target.value)}
        />
      </SearchHeader>

      {/* Results */}
      <SearchContainer>
        {movieData && movieData.length > 0
          ? movieData.map((post) => (
              <NetflixCard
                key={post.imdbID}
                onClick={() => navigate(`/movieDetail/${post.imdbID}`)}>
                <img
                  src={post.Poster !== "N/A" ? post.Poster : "/placeholder.jpg"}
                  alt={post.Title}
                />
                <div className="overlay">
                  <h4>{post.Title}</h4>
                  <span>{post.Year}</span>
                </div>
              </NetflixCard>
            ))
          : movieSearch && <EmptyState>No results found</EmptyState>}
      </SearchContainer>
    </>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
