import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Rating from './Rating';
import './App.css'

class MovieDetails extends React.Component {
	render() {
		return  ( //try to make something like if movieID == null, render MainPage instead
		
			<div>
			{	this.props.movieDetails.Title ?
				<div className="movie-details">
					<div 
						className="movie-poster" 
						style={{ backgroundImage: `url(
							${this.props.movieDetails.Poster != "N/A" ? this.props.movieDetails.Poster : null})`
							}}
					/>

					<main className="movie-info">
						<h2 className="movie-title">{this.props.movieDetails.Title}</h2>
						<span> {this.props.movieDetails.Year }
							<span className="separator">|</span> 
							{	
								this.props.movieDetails.Runtime == "N/A"
								? "No Runtime available"
								: this.props.movieDetails.Runtime
							} 
							<span className="separator">|</span> 
							{	
								this.props.movieDetails.Genre == "N/A"
								? "No genre available"
								: this.props.movieDetails.Genre
							} 
						</span>

						<section className="rating">
							{ this.props.movieDetails.imdbRating && this.props.movieDetails.imdbRating != "N/A"
								? <Rating rating={this.props.movieDetails.imdbRating} />
								: null
							}
							
							<span className="number-rating"> {
								this.props.movieDetails.imdbRating == "N/A"
								? " - "
								: this.props.movieDetails.imdbRating
							} / 10</span>
						</section>

						<h5 className="synopsis-title">Sinopse</h5>
						<p className="movie-synopsis">
							{this.props.movieDetails.Plot == "N/A" 
								? "No plot available"
								: this.props.movieDetails.Plot
							}
						</p>
						
						<Link to="/">
							<button className="close-button--mobile">Voltar</button>
						</Link>
					</main>

					<Link to="/">
						<span className="close-button">
							{ /* close icon */ }
							<img className="close-icon" alt="" src="../images/ic-close@3x.png" height="16" width="16" />
							<span className="close-text">Voltar</span>
						</span>
					</Link>
				</div>
				: null
			}
			</div>
			
		)
	}
}

function mapStateToProps(state){
  const { query, movies, requesting, lastUpdated, movieDetails: {movieDetails} } = state
  return { query, movies, requesting, lastUpdated, movieDetails }
}

export default connect(mapStateToProps)(MovieDetails)