import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="card-body text-white bg-dark mb-3">
      <div className="container">
        <div className="row-footer">
          <div className="movie-title">
            <span className="card-title text-white">TheMovieDB</span>
            <p className="card-text text-white">
              Get the latest info about all movies
            </p>
          </div>
          <br />
        </div>
        <br />
        <div className="copyright">
          <div className="footer-title col-xs-6">
            <span>
              © 2021 Copyright -{" "}
              <Link to="https://www.themoviedb.org/">TheMovieDB</Link> -
              Developed by{" "}
              <Link to="https://www.github.com/wrafael91">@wrmp91</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
