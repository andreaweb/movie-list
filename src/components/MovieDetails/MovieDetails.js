import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating';
import { fetchMovieDetails } from '../../actions';
import './MovieDetails.css';

class MovieDetails extends React.Component {
	componentDidMount(){
		let movieID = this.props.match.params.id;
		this.props.dispatch(fetchMovieDetails(movieID));
	}
	render() {
		return  (
			<div className="movie-details">
				<div 
					className="movie-poster" 
					style={{ backgroundImage: `url(
						${this.props.activeMovie.movieDetails.Poster !== "N/A" 
						? this.props.activeMovie.movieDetails.Poster 
						: null})`
						}}
				/>

				<main className="movie-info">
					<h2 className="movie-title">
						{this.props.activeMovie.movieDetails.Title}
					</h2>
					<span> 
						{this.props.activeMovie.movieDetails.Year }
						<span className="separator">|</span> 
						{	
							this.props.activeMovie.movieDetails.Runtime === "N/A"
							? "No Runtime available"
							: this.props.activeMovie.movieDetails.Runtime
						} 
						<span className="separator">|</span> 
						{	
							this.props.activeMovie.movieDetails.Genre === "N/A"
							? "No genre available"
							: this.props.activeMovie.movieDetails.Genre
						} 
					</span>

					<section className="rating">
						{ this.props.activeMovie.movieDetails.imdbRating 
							&& this.props.activeMovie.movieDetails.imdbRating !== "N/A"
							? <Rating rating={this.props.activeMovie.movieDetails.imdbRating} />
							: null
						}
						
						<span className="number-rating"> {
							this.props.activeMovie.movieDetails.imdbRating === "N/A"
							? " - "
							: this.props.activeMovie.movieDetails.imdbRating
						} / 10</span>
					</section>

					<h5 className="synopsis-title">Sinopse</h5>
					<p className="movie-synopsis">
						{this.props.activeMovie.movieDetails.Plot === "N/A" 
							? "No plot available"
							: this.props.activeMovie.movieDetails.Plot
						}
					</p>
					
					<Link to="/">
						<button className="close-button--mobile">Voltar</button>
					</Link>
				</main>

				<Link to="/">
					<span className="close-button">
						{ /* close icon */ }
						<img 
							className="close-icon" 
							alt="" 
							src="../images/ic-close@3x.png" 
							height="16" width="16" 
						/>
						<span className="close-text">Voltar</span>
					</span>
				</Link>
			</div>
		)
	}
}

function mapStateToProps(state){
  const { activeMovie } = state
  return { activeMovie }
}

export default connect(mapStateToProps)(MovieDetails)