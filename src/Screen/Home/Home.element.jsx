/** @format */

import styled from "styled-components";

/* Page Wrapper */
export const HomeMovieContainer = styled.div`
  background-color: #141414;
  min-height: 100vh;
  padding-bottom: 4rem;
`;

/* Hero Section */
export const HomeInfo = styled.div`
  height: 85vh;
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 1),
      rgba(20, 20, 20, 0.3)
    ),
    url("https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 4rem;
  color: white;

  .hero-content {
    max-width: 550px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .hero-btn {
    background-color: #e50914;
    border: none;
    color: white;
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  .hero-btn:hover {
    background-color: #f40612;
  }

  @media (max-width: 768px) {
    height: 60vh;
    padding: 2rem;

    h1 {
      font-size: 2.2rem;
    }
  }
`;

/* Section Title */
export const SectionTitle = styled.h2`
  color: white;
  margin: 1.5rem 2rem;
  font-size: 1.4rem;
`;

/* Netflix Movie Row */
export const HomeContaner = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 2rem 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* Netflix Card */
export const NetflixCard = styled.div`
  min-width: 180px;
  transition: transform 0.3s ease;
  cursor: pointer;
  color: white;
  img {
    width: 100%;
    border-radius: 0.4rem;
  }

  &:hover {
    transform: scale(1.25);
    z-index: 5;
  }
`;

/* Empty State */
export const EmptyState = styled.div`
  color: #aaa;
  padding: 2rem;
`;
