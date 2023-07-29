import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_APY_KEY;

import "../pages/MovieGrid.css";

const Search = () => {
  return <div>Search</div>;
};

export default Search;
