import { React, Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

class Reviews extends Component {
    state = {
        reviews: null,
    }
    async componentDidMount() {
        const { movieId } = this.props.match.params
        const response = await Axios.get(
            // `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=189de549f8a757089f82fa92809038d7`
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=189de549f8a757089f82fa92809038d7&language=en-US&page=1`
        )

        // console.log(response.data)
        this.setState({ reviews: response.data.results })
        // console.log(this.state.reviews)
    }
    render() {
        return this.state.reviews && this.state.reviews.length > 0 ? (
            <div>
                {/* <h1>"Rewiev"</h1> */}
                <ul>
                    {this.state.reviews.map((review) => (
                        <li key={review.id}>
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
