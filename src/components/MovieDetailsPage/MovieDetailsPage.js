import React, { Component } from 'react'
import { Route, NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Axios from 'axios'
import shortid from 'shortid'
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'

class MovieDetailsPage extends Component {
    state = {
        movie: null,
    }

    genId = () => {
        return this.shortid.generate()
    }

    clickBack = (event) => {
        event.preventDefault()
        this.props.history.push(this.props.location.state.from)

        // event.preventDefault()

        // this.setState({ searchName: event.currentTarget.value })
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await Axios.get(
            `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=189de549f8a757089f82fa92809038d7`
        )

        this.setState({ movie: response.data })
        // console.log(this.state.movie)
        // console.log(response.data)
    }
    render() {
        // const { title } = this.state.movie.title
        // const { name } = this.state.movie.title
        // console.log('from details')
        // console.log(this.state.movie)
        // console.log(this.state.movie)
        // console.log(this.props.match.url)
        // console.log(this.genId())
        // const key = this.shortid.generate()
        // console.log(this.props)

        return (
            this.state.movie && (
                <div>
                    <button type="button" onClick={this.clickBack}>
                        Go back
                    </button>
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div>
                        <h1>{this.state.movie.title}</h1>
                        <p>
                            User score:
                            <span> {this.state.movie.vote_average} </span>
                        </p>
                        <h2>Overview</h2>
                        <p>{this.state.movie.overview}</p>
                        <h2>Genres</h2>
                        <ul>
                            {this.state.movie.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Adittional information</h2>
                        <ul>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: `${this.props.match.url}/cast`,
                                        state: {
                                            from: this.props.location.state
                                                .from,
                                        },
                                    }}
                                >
                                    Cast
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to={{
                                        pathname: `${this.props.match.url}/reviews`,
                                        state: {
                                            from: this.props.location.state
                                                .from,
                                        },
                                    }}
                                >
                                    Reviews
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Route path="/movies/:movieId/cast" component={Cast} />
                    <Route
                        path="/movies/:movieId/reviews"
                        component={Reviews}
                    />
                </div>
            )
        )
    }
}

export default withRouter(MovieDetailsPage)
// { this.props.match.params.movieId}
