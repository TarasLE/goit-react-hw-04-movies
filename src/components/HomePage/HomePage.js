import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class HomePage extends Component {
    state = {
        movies: [],
    }

    async componentDidMount() {
        const response = await Axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=189de549f8a757089f82fa92809038d7`
        )

        this.setState({ movies: response.data.results })
        // console.log(this.state.movies)
    }

    render() {
        // console.log(this.props.match.url)
        return (
            <div>
                <h1>Trending today</h1>
                <ul>
                    {this.state.movies.map((movie) =>
                        movie.title ? (
                            <li key={movie.id}>
                                <Link
                                    to={{
                                        pathname: `/movies/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                >
                                    {movie.title}
                                </Link>
                            </li>
                        ) : (
                            <li key={movie.id}>
                                <Link
                                    to={{
                                        pathname: `/movies/${movie.id}`,
                                        state: { from: this.props.location },
                                    }}
                                >
                                    {movie.name}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(HomePage)
