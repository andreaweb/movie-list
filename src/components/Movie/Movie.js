import React from 'react'
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = (props) => (
			<li className="movie-item">
				<img 
					className="movie-card" 
					alt=""
					src={ props.movie.Poster === "N/A" 
						? "http://phillyjamz953fm.com/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg" 
						: props.movie.Poster 
					} 
				/>
				<Link 
					to={`/movieDetails/${props.movie.imdbID}`} 
				>
					<div className="movie-hover">
						<span className="movie-hover__title">
							{props.movie.Title}
						</span>
						<span className="movie-hover__year">
							{props.movie.Year}
						</span>
					</div>
				</Link>
			</li>
		)

export default Movie