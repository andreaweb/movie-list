import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css'

class MovieDetails extends React.Component {
	render() {
		return  (
			<div className="movie-details">
				<div 
					className="movie-poster" 
					style={{ backgroundImage: `url(
						${this.props.movieDetails.movieDetails ? this.props.movieDetails.movieDetails.Poster : null})`
						}}
				/>

				<main className="movie-info">
					<h2 className="movie-title">{this.props.movieDetails.movieDetails.Title}</h2>
					<span> {this.props.movieDetails.movieDetails.Year }
						<span className="separator">|</span> 
						{this.props.movieDetails.movieDetails.Runtime}
						<span className="separator">|</span> 
						{this.props.movieDetails.movieDetails.Genre} 
					</span>

					<section className="rating">
						{ /* filled star */}
						<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
						width='22' height='22' viewBox='0 0 22 22'>
						    <defs>
						        <path id='b' d='M11.094 5.563a.95.95 0 0 1 .547-.5c.24-.084.479-.084.718 0a.95.95 0 0 1 .547.5l2.031 4.125 4.563.656c.27.041.484.166.64.375.157.208.23.437.22.687a.96.96 0 0 1-.298.657L16.75 15.28l.781 4.563a.987.987 0 0 1-.14.703.917.917 0 0 1-.579.422.964.964 0 0 1-.718-.094L12 18.75l-4.094 2.125a.964.964 0 0 1-.719.094.917.917 0 0 1-.578-.422.987.987 0 0 1-.14-.703l.781-4.563-3.313-3.218a.96.96 0 0 1-.296-.657c-.01-.25.062-.479.218-.687a.948.948 0 0 1 .641-.375l4.562-.656 2.032-4.125z'
						        />
						        <filter id='a' width='159.8%' height='162.5%' x='-29.9%' y='-25%' filterUnits='objectBoundingBox'>
						            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
						            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
						            />
						            <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						            />
						        </filter>
						    </defs>
						    <g fill='none' fillRule='evenodd'>
						        <path d='M-1-3h24v24H-1z' />
						        <g transform='translate(-1 -3)'>
						            <use fill='#000' filter='url(#a)' xlinkHref='#b' />
						            <use fill='#F37820' xlinkHref='#b' />
						        </g>
						    </g>
						</svg>

						<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
						width='22' height='22' viewBox='0 0 22 22'>
						    <defs>
						        <path id='b' d='M11.094 5.563a.95.95 0 0 1 .547-.5c.24-.084.479-.084.718 0a.95.95 0 0 1 .547.5l2.031 4.125 4.563.656c.27.041.484.166.64.375.157.208.23.437.22.687a.96.96 0 0 1-.298.657L16.75 15.28l.781 4.563a.987.987 0 0 1-.14.703.917.917 0 0 1-.579.422.964.964 0 0 1-.718-.094L12 18.75l-4.094 2.125a.964.964 0 0 1-.719.094.917.917 0 0 1-.578-.422.987.987 0 0 1-.14-.703l.781-4.563-3.313-3.218a.96.96 0 0 1-.296-.657c-.01-.25.062-.479.218-.687a.948.948 0 0 1 .641-.375l4.562-.656 2.032-4.125z'
						        />
						        <filter id='a' width='159.8%' height='162.5%' x='-29.9%' y='-25%' filterUnits='objectBoundingBox'>
						            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
						            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
						            />
						            <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						            />
						        </filter>
						    </defs>
						    <g fill='none' fillRule='evenodd'>
						        <path d='M-1-3h24v24H-1z' />
						        <g transform='translate(-1 -3)'>
						            <use fill='#000' filter='url(#a)' xlinkHref='#b' />
						            <use fill='#F37820' xlinkHref='#b' />
						        </g>
						    </g>
						</svg>

						<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
						width='22' height='22' viewBox='0 0 22 22'>
						    <defs>
						        <path id='b' d='M11.094 5.563a.95.95 0 0 1 .547-.5c.24-.084.479-.084.718 0a.95.95 0 0 1 .547.5l2.031 4.125 4.563.656c.27.041.484.166.64.375.157.208.23.437.22.687a.96.96 0 0 1-.298.657L16.75 15.28l.781 4.563a.987.987 0 0 1-.14.703.917.917 0 0 1-.579.422.964.964 0 0 1-.718-.094L12 18.75l-4.094 2.125a.964.964 0 0 1-.719.094.917.917 0 0 1-.578-.422.987.987 0 0 1-.14-.703l.781-4.563-3.313-3.218a.96.96 0 0 1-.296-.657c-.01-.25.062-.479.218-.687a.948.948 0 0 1 .641-.375l4.562-.656 2.032-4.125z'
						        />
						        <filter id='a' width='159.8%' height='162.5%' x='-29.9%' y='-25%' filterUnits='objectBoundingBox'>
						            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
						            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
						            />
						            <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						            />
						        </filter>
						    </defs>
						    <g fill='none' fillRule='evenodd'>
						        <path d='M-1-3h24v24H-1z' />
						        <g transform='translate(-1 -3)'>
						            <use fill='#000' filter='url(#a)' xlinkHref='#b' />
						            <use fill='#F37820' xlinkHref='#b' />
						        </g>
						    </g>
						</svg>

						<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
						width='22' height='22' viewBox='0 0 22 22'>
						    <defs>
						        <path id='b' d='M11.094 5.563a.95.95 0 0 1 .547-.5c.24-.084.479-.084.718 0a.95.95 0 0 1 .547.5l2.031 4.125 4.563.656c.27.041.484.166.64.375.157.208.23.437.22.687a.96.96 0 0 1-.298.657L16.75 15.28l.781 4.563a.987.987 0 0 1-.14.703.917.917 0 0 1-.579.422.964.964 0 0 1-.718-.094L12 18.75l-4.094 2.125a.964.964 0 0 1-.719.094.917.917 0 0 1-.578-.422.987.987 0 0 1-.14-.703l.781-4.563-3.313-3.218a.96.96 0 0 1-.296-.657c-.01-.25.062-.479.218-.687a.948.948 0 0 1 .641-.375l4.562-.656 2.032-4.125z'
						        />
						        <filter id='a' width='159.8%' height='162.5%' x='-29.9%' y='-25%' filterUnits='objectBoundingBox'>
						            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
						            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
						            />
						            <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						            />
						        </filter>
						    </defs>
						    <g fill='none' fillRule='evenodd'>
						        <path d='M-1-3h24v24H-1z' />
						        <g transform='translate(-1 -3)'>
						            <use fill='#000' filter='url(#a)' xlinkHref='#b' />
						            <use fill='#F37820' xlinkHref='#b' />
						        </g>
						    </g>
						</svg>

						{ /*hollow star*/}
						<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
							width='22' height='22' viewBox='0 0 22 22'>
						    <defs>
						        <path id='b' d='M19.5 10.344c.27.041.484.166.64.375.157.208.23.437.22.687a.96.96 0 0 1-.298.657L16.75 15.28l.781 4.563a.987.987 0 0 1-.14.703.917.917 0 0 1-.579.422.964.964 0 0 1-.718-.094L12 18.75l-4.094 2.125a.964.964 0 0 1-.719.094.917.917 0 0 1-.578-.422.987.987 0 0 1-.14-.703l.781-4.563-3.313-3.218a.96.96 0 0 1-.296-.657c-.01-.25.062-.479.218-.687a.948.948 0 0 1 .641-.375l4.562-.656 2.032-4.125a.95.95 0 0 1 .547-.5c.24-.084.479-.084.718 0a.95.95 0 0 1 .547.5l2.031 4.125 4.563.656zm-4.344 4.406l3.125-3.062-4.344-.625L12 7.125l-1.938 3.938-4.343.625 3.125 3.062-.719 4.344L12 17.03l3.875 2.063-.719-4.344z'
						        />
						        <filter id='a' width='159.8%' height='162.5%' x='-29.9%' y='-25%' filterUnits='objectBoundingBox'>
						            <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
						            <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
						            />
						            <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						            />
						        </filter>
						    </defs>
						    <g fill='none' fillRule='evenodd'>
						        <path d='M-1-3h24v24H-1z' />
						        <g transform='translate(-1 -3)'>
						            <use fill='#000' filter='url(#a)' xlinkHref='#b' />
						            <use fill='#FFF' xlinkHref='#b' />
						        </g>
						    </g>
						</svg>

						<span className="number-rating"> {this.props.movieDetails.movieDetails.imdbRating} / 10</span>
					</section>

					<h5 className="synopsis-title">Sinopse</h5>
					<p className="movie-synopsis">{this.props.movieDetails.movieDetails.Plot}</p>
					
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
		)
	}
}

function mapStateToProps(state){
  const { query, movies, requesting, lastUpdated, movieDetails } = state
  return { query, movies, requesting, lastUpdated, movieDetails }
}

export default connect(mapStateToProps)(MovieDetails)