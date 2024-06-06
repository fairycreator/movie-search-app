import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </List>
  );
};

export default MovieList;
