TMDB Movie Application with React.js, Node.js, Express and MongoDB.

This a web-movie application which it renders 6 pages: home, top-rated, popular, upcoming, now-playing and favorite movies. Favorite page is driven to show up all movie list stored by user.
Frontend side was designed by using React.js, HTML, CSS and Bootstrap facilities at Navbar, footer, login/register section, grid-cards for movies, etc. Backend side was coded by using Node.js and Express. 
Database is connected to MongoDB Atlas in which the user is allowed to store it´s favorite movies. HTTP requests from client to server side, server to api side, both are supported by using Axios (GET and POST). 

Client side uses React hooks (useState, useEffect) at function components to save and update current state on variables used to support api info fetched by Axios from TMDB api. The app design is
responsive on mobiles and tablets at different screen resolutions in which movie card images are aligned on columns and rows. Each movie card has got a green button to be added and discarded
on 'Favorites' page.

The authentication procedure for users is supported by JWT (jsonwebtoken) at server side as a unique token is created and paired with database info to identify if user already
exists. New data is stored at MongoDB Atlas and password is hashed by bcrypt package. Subsequently, the new user is prompted to login page to initiate session and get 
access to all movie content. 

The movie project is currently deployed on Heroku: https://tmdb-wrmp91.herokuapp.com/

To get access to all content, first you need to create an account and then login into it.

Any suggestion you may have, please, let me know it.

Kind regards,

William Manchabajoy - 
Web Developer - 
https://www.wrmp.me/
  
