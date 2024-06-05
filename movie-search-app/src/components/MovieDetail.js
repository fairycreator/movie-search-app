import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`
      );
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1>{movie.Title}</h1>
      <Poster src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
    </Container>
  );
};

export default MovieDetail;
