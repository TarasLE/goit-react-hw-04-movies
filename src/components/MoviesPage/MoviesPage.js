import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { withRouter, NavLink } from 'react-router-dom'
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
        const currentInput = this.state.searchName.trim()
        if (currentInput) {
            event.preventDefault()
            this.searchMovies(this.state.searchName)
        } else {
            event.preventDefault()
            return
        }
    }

    searchMovies = async (movie) => {
        const response = await Axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=189de549f8a757089f82fa92809038d7&query=${movie}&language=en-US&page=1&include_adult=false`
        )
        this.setState({ searchResult: response.data.results })
        this.props.location.state = { searchName: this.state.searchName }
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({ searchName: this.props.location.state.searchName })
            this.searchMovies(this.props.location.state.searchName)
        }
    }

    render() {
        return (
            <div className={styles.MoviePageContainer}>
                {/* <h1>"MoviesPage"</h1> */}
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
                                            searchName: this.state.searchName,
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
