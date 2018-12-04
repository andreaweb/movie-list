import React from 'react'
import { Link } from 'react-router-dom';
import './Movie.css';

class Movie extends React.Component {
	render(){
		return (
			<li className="movie-item">
				<img 
					className="movie-card" 
					alt=""
					src={ this.props.movie.Poster === "N/A" 
					? "http://phillyjamz953fm.com/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg" 
					: this.props.movie.Poster 
					} 
				/>
				<Link 
					to={`/movieDetails/${this.props.movie.imdbID}`} 
					onClick={this.props.goToMovieDetails}
				>
					<div className="movie-hover">
						<span className="movie-hover__title">
							{this.props.movie.Title}
						</span>
						<span className="movie-hover__year">
							{this.props.movie.Year}
						</span>
					</div>
				</Link>
			</li>
		)
	}
} 

export default Movie