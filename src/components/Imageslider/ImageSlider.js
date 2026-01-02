/** @format */

import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { movieHomeStore } from "../../redux/moviestore/homeMovie";
import { useDispatch, useSelector } from "react-redux";
import { ImageSliderContainer } from "./ImageSlider.element";

function ImageSlider() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieHomeStore());
  }, []);

  const mdata = useSelector((state) => state.movieDisplay.homeItems);
  return (
    <ImageSliderContainer>
      <Carousel data-bs-theme="dark">
        {!mdata ? (
          <Carousel.Item>
            <img
              className="movieCardImage"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>no movie available</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ) : (
          mdata.map((post) => (
            <Carousel.Item key={post.id}>
              <img
                className="movieCardImage d-block w-100"
                src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>{post.original_title}</h5>
                <p>{post.release_date}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </ImageSliderContainer>
  );
}

export default ImageSlider;
