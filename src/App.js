import React, { Suspense, lazy } from 'react'
// import './App.css'
import { Route, NavLink, Switch } from 'react-router-dom'
import styles from './App.module.css'
// import HomePage from './components/HomePage/HomePage'
// import MoviesPage from './components/MoviesPage/MoviesPage'
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
// import Cast from './components/Cast/Cast'
// import Reviews from './components/Reviews/Reviews'

const HomePage = lazy(() =>
    import(
        './components/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
    )
)
const MoviesPage = lazy(() =>
    import(
        './components/MoviesPage/MoviesPage.js' /* webpackChunkName: "movie-page" */
    )
)
const MovieDetailsPage = lazy(() =>
    import(
        './components/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie--details-page" */
    )
)

const App = () => (
    // return (
    // <div className="App">
    //     <h1>'HT4 MOVIE TEST'</h1>
    // </div>

    <>
        <ul className={styles.HeaderContainer}>
            <li className={styles.HeaderTitles}>
                <NavLink
                    exact
                    to="/"
                    className={styles.HeaderLink}
                    activeClassName={styles.HeaderLinkActive}
                >
                    <h3>Home</h3>
                </NavLink>
            </li>
            <li className={styles.HeaderTitles}>
                <NavLink
                    to="/movies"
                    className={styles.HeaderLink}
                    activeClassName={styles.HeaderLinkActive}
                >
                    <h3>Movies</h3>
                </NavLink>
            </li>
        </ul>
        {/* <HomePage /> */}
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route path="/movies" component={MoviesPage} />
                {/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
                {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
            </Switch>
        </Suspense>
    </>
    // )
)

export default App
