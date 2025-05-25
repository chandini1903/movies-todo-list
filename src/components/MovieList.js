import { useState } from "react";
import { motion } from "framer-motion";
import MovieItem from "./MovieItem";
import MovieInput from "./MovieInput";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie.trim() !== "") {
      setMovies([...movies, { title: newMovie, watched: false }]);
      setNewMovie("");
    }
  };

  const toggleWatched = (index) => {
    setMovies(movies.map((movie, i) =>
      i === index ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="relative max-w-3xl w-full mx-auto p-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl">
        <h2 className="text-5xl font-bold mb-8 text-center text-white">Movies to Watch</h2>
        
        <MovieInput newMovie={newMovie} setNewMovie={setNewMovie} addMovie={addMovie} />
        
        <div className="space-y-6">
          {movies.map((movie, index) => (
            <MovieItem
              key={index}
              index={index}
              movie={movie}
              toggleWatched={toggleWatched}
              deleteMovie={deleteMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
