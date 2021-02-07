import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { withRouter, NavLink } from 'react-router-dom'
import queryString from 'query-string'
import styles from './MoviesPage.module.css'

class MoviesPage extends Component {
    state = {
        searchName: '',
        searchResult: null,
    }

    handleInput = (event) => {
        event.preventDefault()
        this.setState({ searchName: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${this.state.searchName}`,
        })
        this.searchMovies(this.state.searchName)
    }

    searchMovies = async (movie) => {
        const response = await Axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=189de549f8a757089f82fa92809038d7&query=${movie}&language=en-US&page=1&include_adult=false`
        )
        this.setState({ searchResult: response.data.results })
        this.props.location.state = { searchName: this.state.searchName }
    }

    componentDidMount() {
        const { query } = queryString.parse(this.props.location.search)
        if (query) {
            this.searchMovies(query)
        }
    }

    componentDidUpdate(prevProps, PrevState) {
        const { query: prevQuery } = queryString.parse(
            prevProps.location.search
        )
        const { query: nextQuery } = queryString.parse(
            this.props.location.search
        )
        if (prevQuery !== nextQuery) {
            this.searchMovies(nextQuery)
        }
    }

    render() {
        return (
            <div className={styles.MoviePageContainer}>
                <form>
                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        onChange={this.handleInput}
                        className={styles.SearchInput}
                    />

                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className={styles.SearchButton}
                    >
                        <span>Search</span>
                    </button>
                </form>
                {this.state.searchResult && (
                    <ul>
                        {this.state.searchResult.map((movie) => (
                            <li key={movie.id}>
                                <NavLink
                                    to={{
                                        pathname: `${this.props.match.url}/${movie.id}`,
                                        state: {
                                            from: this.props.location,
                                        },
                                    }}
                                >
                                    <p className={styles.SearchItem}>
                                        {movie.title}
                                    </p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}

export default withRouter(MoviesPage)
