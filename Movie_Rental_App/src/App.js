import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/UIElement/Header";
import Layout from "./components/UIElement/Layout";

import MovieList from "./components/Movie/MovieList";
import MovieCart from "./components/MovieCart/MovieCart";

const App = () => {
  const showMyMovieCart = useSelector((state) => state.uiSlice.showCart);
  const movieItems = useSelector((state) => state.movieslice.items);

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <MovieList items={movieItems} />
        {showMyMovieCart && <MovieCart />}
      </Layout>
    </React.Fragment>
  );
};

export default App;
