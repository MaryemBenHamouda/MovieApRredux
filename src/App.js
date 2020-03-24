import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import AddModale from "./components/AddModale";

function App() {
  return (
    <div className="App">
      <Search />
      <MovieList />
      <AddModale editMode={false} />
    </div>
  );
}

export default App;
