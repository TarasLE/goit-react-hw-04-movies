import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import logo from '../../img/no_user_logo.png'
import styles from './Cast.module.css'
// import no_user_logo from './img/no_user_logo.png'

class Cast extends Component {
    state = {
        cast: null,
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await Axios.get(
            // `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=189de549f8a757089f82fa92809038d7`
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=189de549f8a757089f82fa92809038d7&language=en-US`
        )
        // console.log(response.data)
        this.setState({ cast: response.data.cast })
        // console.log(this.state.cast)
    }
    render() {
        // console.log(this.props)
        return (
            this.state.cast && (
                <div>
                    {/* <h1>"Cast"</h1> */}
                    <ul className={styles.MovieCastCntainer}>
                        {this.state.cast.map((actor) => (
                            <li key={actor.id} className={styles.MovieCastItem}>
                                {actor.profile_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                        alt=""
                                        className={styles.CastProfile}
                                    />
                                ) : (
                                    <img
                                        src={logo}
                                        alt=""
                                        className={styles.CastProfile}
                                    />
                                )}
                                <p>{actor.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        )
    }
}

export default Cast
