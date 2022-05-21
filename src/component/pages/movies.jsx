import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import MoviesTable from "../moviesTable";
import _ from "lodash";
import SearchBox from "../common/searchBox";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentGenre: "1",
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  handleSelectGenre = (id) => {
    this.setState({ currentGenre: id, searchQuery: "", currentPage: 1 });
  };

  handleDelete = (movie) => {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  getMovieCount = () => {
    if (this.state.movies.length === 0) return "there is no movie";
    return this.state.movies.length;
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const ind = movies.indexOf(movie);
    movies[ind] = { ...movie };
    movies[ind].isLike = !movies[ind].isLike;

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  genre = (movies, currentGenre) => {
    if (currentGenre === "1") return movies;
    return movies.filter((movie) => movie.genre._id === currentGenre);
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: "1", currentPage: 1 });
  };
  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      searchQuery,
      currentPage,
      currentGenre,
      sortColumn,
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (currentGenre)
    filtered = this.genre(allMovies, currentGenre);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { movies: movies, totalCount: filtered.length };
  };

  render() {
    const {
      genres,
      pageSize,
      currentPage,
      searchQuery,
      currentGenre,
      sortColumn,
    } = this.state;
    const { movies, totalCount } = this.getPageData();

    return (
      <div>
        {totalCount === 0 ? (
          <h1>"there is no movie"</h1>
        ) : (
          <div className="row">
            <div className="col-2">
              <ListGroup
                currentGenre={currentGenre}
                genres={genres}
                onGenreSelected={this.handleSelectGenre}
              />
            </div>
            <div className="col">
              <h3 className="my-2">{totalCount} movies</h3>
              <SearchBox value={searchQuery} onChange={this.handleSearch} />
              <MoviesTable
                movies={movies}
                onDelete={this.handleDelete}
                onLiked={this.handleLike}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />

              <Pagination
                itemCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
