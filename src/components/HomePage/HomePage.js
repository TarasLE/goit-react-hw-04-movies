import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './HomePage.module.css'

class HomePage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const response = await Axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=189de549f8a757089f82fa92809038d7`
        )

        this.setState({ movies: response.data.results })
    }

    render() {
        return (
            <div className={styles.HomePageContainer}>
                <h1 className={styles.ListHeader}>Trending today</h1>
                <ul>
                    {this.state.movies.map((movie) =>
                        movie.title ? (
                            <li key={movie.id} className={styles.MovieItem}>
                                <NavLink
                                    to={{
                                        pathname: `/movies/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                    className={styles.MovieLink}
                                    activeClassName={styles.MovieLinkActive}
                                >
                                    {movie.title}
                                </NavLink>
                            </li>
                        ) : (
                            <li key={movie.id} className={styles.MovieItem}>
                                <NavLink
                                    to={{
                                        pathname: `/movies/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                    className={styles.MovieLink}
                                    activeClassName={styles.MovieLinkActive}
                                >
                                    {movie.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(HomePage)
