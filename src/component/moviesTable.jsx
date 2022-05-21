import Liked from "./common/liked";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Table from "./common/table";
 
class MoviesTable extends Component {
  columns = [
    { path: "title", title: "Title", content:(movie) => <Link to={`/add/${movie._id}`}> {movie.title} </Link> ,},
    { path: "genre.name", title: "Genre" },
    { path: "numberInStock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    {
      key: "like",
      content: (movie) => <Liked onLiked={this.props.onLiked} item={movie} />,
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table data= {movies} onSort ={onSort} sortColumn = {sortColumn} columns = {this.columns} />
    );
  }
}

export default MoviesTable;
