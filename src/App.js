import React from 'react'
import './App.css'
import { Route, NavLink, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import MoviesPage from './components/MoviesPage/MoviesPage'
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
// import Cast from './components/Cast/Cast'
// import Reviews from './components/Reviews/Reviews'

const App = () => (
    // return (
    // <div className="App">
    //     <h1>'HT4 MOVIE TEST'</h1>
    // </div>

    <>
        <ul>
            <li>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            {/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
            {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
        </Switch>
    </>
    // )
)

export default App
