import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/FavoritePage.css";
function FavoritePage() {
  const variables = { userFrom: localStorage.getItem("iduser") };

  const [FavoritedMovies, setFavoritedMovies] = useState([]);

  useEffect(() => {
    fetchFavoritedMovies();
  }, []);

  const fetchFavoritedMovies = () => {
    Axios.post(
      `${process.env.REACT_APP_API_URL}/app/favorite/getFavoritedMovie`,
      variables
    ).then((response) => {
      if (response.data.success) {
        setFavoritedMovies(response.data.favorites);
        console.log(response.data.favorites);
      } else {
        alert("Failed to get favorite movies ");
      }
    });
  };

  const onClickRemove = (movieId) => {
    const variable = {
      movieId: movieId,
      userFrom: localStorage.getItem("iduser"),
    };

    Axios.post(
      `${process.env.REACT_APP_API_URL}/app/favorite/removeFromFavorite`,
      variable
    ).then((response) => {
      if (response.data.success) {
        fetchFavoritedMovies();
      } else {
        alert("Failed to remove from favorite");
      }
    });
  };

  const renderTableBody = FavoritedMovies.map((movie, index) => {
    return (
      <tr>
        <td>{movie.movieTitle}</td>
        <td>{movie.movieRunTime} mins</td>
        <td>
          <button
            onClick={() => onClickRemove(movie.movieId)}
            className="btn btn-warning"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div id="fav-table">
      <h1>Favorite Movies List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Movie Runtime</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
