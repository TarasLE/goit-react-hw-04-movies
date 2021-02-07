import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Router } from 'react-router-dom'
// import no_user_logo from './img/no_user_logo.png'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
// key: 189de549f8a757089f82fa92809038d7
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// console.log('test')

// fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=189de549f8a757089f82fa92809038d7&language=en-US&query=batman&page=1&include_adult=false`
// )
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('in fetch')
//         console.log(data.results)
//     })
