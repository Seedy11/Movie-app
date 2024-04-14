/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const params = useParams();
  const movieId = params.id;
  const [movieDetail, setMovieDetail] = useState({});

  React.useEffect(() => {
    async function movieDetailData() {
      try {
        const getData = await axios.get(
          `https://www.omdbapi.com/?i=${movieId}&apikey=f1aa2fec&plot=full`
        );
        setMovieDetail(getData.data);
      } catch (error) {
        return error;
      }
    }

    movieDetailData();
  }, []);

  return (
    <div>
      {!movieDetail ? (
        <h2>no movie</h2>
      ) : (
        <Row style={{ marginBottom: "10rem" }}>
          <Col sm={4}>
            <img src={movieDetail.Poster}></img>
          </Col>
          <Col sm={6}>
            {" "}
            <p>{movieDetail.Actors}</p>
            <p>{movieDetail.Awards}</p>
            <p>{movieDetail.BoxOffice}</p>
            <p>{movieDetail.Country}</p>
            <p>{movieDetail.Genre}</p>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default MovieDetail;
