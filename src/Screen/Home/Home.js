/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { movieHomeStore } from "../../redux/moviestore/homeMovie";
import {
  HomeInfo,
  HomeContaner,
  HomeMovieContainer,
  SectionTitle,
  EmptyState,
  NetflixCard,
} from "./Home.element";
import { useNavigate } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import ImageSlider from "../../components/Imageslider/ImageSlider";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(movieHomeStore());
  }, []);

  const mdata = useSelector((state) => state.movieDisplay.homeItems);

  console.log("setail", mdata);
  // const slideImage =

  return (
    <HomeMovieContainer>
      {/* Hero Section */}
      <HomeInfo>
        <div className="hero-content">
          <h1>Discover Movies</h1>
          <p>Watch trailers, explore details, and discover what’s next.</p>
          <button className="hero-btn">Explore Now</button>
        </div>
      </HomeInfo>

      {/* Movie Row */}
      <SectionTitle>Upcoming Movies</SectionTitle>

      <HomeContaner>
        {Array.isArray(mdata) && mdata.length > 0 ? (
          mdata.map((post) => (
            <NetflixCard
              key={post.id}
              onClick={() => navigate(`/movieDetail/${post.id}`)}>
              <img
                src={
                  post.poster_path
                    ? `https://image.tmdb.org/t/p/w500${post.poster_path}`
                    : "/placeholder.jpg" // fallback image
                }
                alt={post.original_title || "Movie Poster"}
              />
            </NetflixCard>
          ))
        ) : (
          <EmptyState>No movies available</EmptyState>
        )}
      </HomeContaner>
    </HomeMovieContainer>
  );
}

//'http://www.omdbapi.com/?i=tt3896198&apikey=f1aa2fec'
