import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
import styles from './Reviews.module.css'

class Reviews extends Component {
    state = {
        reviews: null,
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await Axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=189de549f8a757089f82fa92809038d7&language=en-US&page=1`
        )

        this.setState({ reviews: response.data.results })
    }
    render() {
        return this.state.reviews && this.state.reviews.length > 0 ? (
            <div>
                <ul>
                    {this.state.reviews.map((review) => (
                        <li key={review.id} className={styles.ReviewAuthor}>
                            <h1>{review.author}</h1>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>We dont have any reviews for this movie</p>
        )
    }
}

export default Reviews
