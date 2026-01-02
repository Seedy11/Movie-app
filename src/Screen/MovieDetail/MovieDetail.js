/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../redux/moviestore/movieDetail";
import {
  InfoGrid,
  LoadingState,
  Meta,
  MovieContent,
  MovieHero,
  Overview,
  Poster,
} from "./MovieDetail.element";

function MovieDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const movieId = params.id;
  // const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    dispatch(movieDetail(movieId));
  }, []);
  const movieInfo = useSelector((state) => state.movieDetail.movieInfo);
  console.log("moie", movieInfo);

  return (
    <>
      {!movieInfo ? (
        <LoadingState>Loading movie...</LoadingState>
      ) : (
        <MovieHero
          bg={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}>
          <Container>
            <Row className="align-items-center">
              {/* Poster */}
              <Col md={4}>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                  alt={movieInfo.title}
                />
              </Col>

              {/* Movie Info */}
              <Col md={8}>
                <MovieContent>
                  <h1>{movieInfo.title}</h1>

                  <Meta>
                    <span>{movieInfo.release_date}</span>
                    <span>•</span>
                    <span>{movieInfo.runtime} min</span>
                    <span>•</span>
                    <span>⭐ {movieInfo.vote_average}</span>
                  </Meta>

                  <Overview>{movieInfo.overview}</Overview>

                  <InfoGrid>
                    <div>
                      <strong>Revenue</strong>
                      <p>${movieInfo.revenue?.toLocaleString()}</p>
                    </div>

                    <div>
                      <strong>Language</strong>
                      <p>
                        {movieInfo.spoken_languages
                          ?.map((l) => l.english_name)
                          .join(", ")}
                      </p>
                    </div>
                  </InfoGrid>
                </MovieContent>
              </Col>
            </Row>
          </Container>
        </MovieHero>
      )}
    </>
  );
}

export default MovieDetail;
