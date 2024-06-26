import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`
    );
    setMovies(response.data.Search || []);
  };

  return (
    <Router>
      <Container>
        <h1>Movie Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
