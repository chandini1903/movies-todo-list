import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Custom CSS for animations and gradients

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
    const updatedMovies = movies.map((movie, i) =>
      i === index ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(updatedMovies);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center gradient-bg">
      <div className="card p-5 shadow-lg rounded-4 animate__animated animate__fadeIn">
        <h2 className="text-center text-light mb-4">Movies to Watch</h2>

        {/* Input and Add Button */}
        <div className="d-flex gap-2 mb-3">
          <input
            type="text"
            className="form-control text-light bg-transparent border-light"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            placeholder="Add a movie to watch"
          />
          <button className="btn btn-warning fw-bold" onClick={addMovie}>
            Add
          </button>
        </div>

        {/* Movie List */}
        <ul className="list-group">
          {movies.map((movie, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center bg-transparent text-light border-light animate__animated animate__fadeInDown ${
                movie.watched ? "text-decoration-line-through opacity-50" : ""
              }`}
            >
              {movie.title}

              <div>
                <button
                  className="btn btn-success me-2"
                  onClick={() => toggleWatched(index)}
                >
                  {movie.watched ? "Unwatch" : "Watched"}
                </button>
                <button className="btn btn-danger" onClick={() => deleteMovie(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
