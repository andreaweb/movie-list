import React from 'react'
import { Link } from 'react-router-dom';
//import * as MoviesAPI from './MoviesAPI'
import '../components/App.css'
import { connect } from 'react-redux';
import {
 // searchMovies,
  fetchMovies,
  fetchMovieDetails
} from '../actions'
if (process.env.NODE_ENV !== 'production') {
 // const {whyDidYouUpdate} = require('why-did-you-update');
 // whyDidYouUpdate(React);
}

class MainPage extends React.Component {
  state = { 
    //There's no option to search by category or popularity, so I'm searching for a default word instead
    query: 'game',
    searchFieldVisible: false,
    warning: false,
    search: false
  }

  componentDidMount(){
    //Searches for 'game' (default word) only if we haven't searched anything before
    if(this.props.moviesList.movies.length <= 0){
      this.props.dispatch(fetchMovies(this.state.query))
    }
    console.log(this.props)
  }

  searchMovieDetails = (movieID) => {
   // console.log(this.props.dispatch)
    this.props.dispatch(fetchMovieDetails(movieID))
  }

  searchMovieName = () => {
    this.setState({query: this.search.value})
    if(this.search.value.length > 2){
      this.setState({warning: false, search: true})
      this.props.dispatch(fetchMovies(this.search.value))
    }else{
      this.setState({warning: true})
    }
  }

  toggleSearchField = () =>{
    this.state.searchFieldVisible ? this.setState({searchFieldVisible: false}) : this.setState({searchFieldVisible: true})
  }

  render() {
    return (
      <div>
        <header className="header">
          { /* import later as logo component */  }
          <svg xmlns="http://www.w3.org/2000/svg" width="136" height="33" viewBox="0 0 136 33">
              <defs>
                  <linearGradient id="a" x1="100%" x2="0%" y1="50%" y2="50%">
                      <stop offset="0%" stopColor="#FF9951" />
                      <stop offset="100%" stopColor="#F76B1C" />
                  </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M56.677 20.94l-.038-7.027-3.408 5.72h-1.667l-3.389-5.53v6.836H44.71V7.682h3.086l4.658 7.651L57 7.682h3.086l.038 13.257h-3.446zm11.077.17c-1.098 0-2.09-.227-2.973-.682a5.145 5.145 0 0 1-2.073-1.894c-.499-.808-.748-1.723-.748-2.746 0-1.01.25-1.92.748-2.727a5.094 5.094 0 0 1 2.064-1.885c.877-.448 1.871-.672 2.982-.672 1.11 0 2.108.224 2.992.672.883.448 1.571 1.073 2.063 1.875.493.802.739 1.714.739 2.737 0 1.023-.246 1.938-.739 2.746-.492.808-1.18 1.44-2.063 1.894-.884.455-1.881.682-2.992.682zm0-2.86c.631 0 1.149-.218 1.553-.653.403-.436.605-1.039.605-1.81 0-.757-.202-1.35-.605-1.78-.404-.429-.922-.643-1.553-.643-.631 0-1.149.214-1.553.644-.404.429-.606 1.022-.606 1.78 0 .77.202 1.373.606 1.809.404.435.922.653 1.553.653zm18.272-7.576L81.785 20.94h-3.712l-4.222-10.265h3.692l2.462 6.27 2.594-6.27h3.427zm.928 0h3.597V20.94h-3.597V10.674zm1.799-1.136c-.657 0-1.187-.183-1.59-.55a1.766 1.766 0 0 1-.607-1.363c0-.543.202-.997.606-1.364.404-.366.934-.549 1.59-.549.657 0 1.187.174 1.591.521.404.347.606.792.606 1.335 0 .568-.202 1.039-.606 1.411-.404.373-.934.559-1.59.559zm14.617 6.288c0 .025-.019.322-.056.89h-7.46c.15.53.444.937.88 1.221.435.285.981.427 1.638.427.492 0 .918-.07 1.278-.209a3.77 3.77 0 0 0 1.088-.682l1.894 1.97c-.997 1.111-2.455 1.667-4.374 1.667-1.2 0-2.253-.227-3.162-.682-.909-.455-1.613-1.086-2.111-1.894-.499-.808-.748-1.723-.748-2.746 0-1.01.243-1.916.729-2.718a5.094 5.094 0 0 1 2.016-1.884c.859-.455 1.824-.682 2.897-.682 1.023 0 1.95.211 2.784.634a4.826 4.826 0 0 1 1.978 1.837c.486.802.73 1.752.73 2.85zm-5.472-2.765c-.555 0-1.02.157-1.391.473-.373.316-.61.745-.71 1.288H100c-.101-.543-.338-.972-.71-1.288-.372-.316-.836-.473-1.392-.473z"
                  />
                  <path fill="url(#a)" d="M107.891 19.205c-1.401 0-2.66-.297-3.777-.89a6.687 6.687 0 0 1-2.632-2.463c-.638-1.048-.957-2.228-.957-3.541 0-1.314.32-2.494.957-3.542a6.687 6.687 0 0 1 2.632-2.462c1.117-.594 2.376-.89 3.777-.89 1.401 0 2.66.296 3.778.89a6.687 6.687 0 0 1 2.632 2.462c.637 1.048.956 2.228.956 3.542 0 1.313-.319 2.493-.956 3.541a6.687 6.687 0 0 1-2.632 2.462c-1.118.594-2.377.89-3.778.89zm0-3.107a3.55 3.55 0 0 0 1.818-.473c.543-.316.972-.76 1.287-1.335.316-.575.474-1.234.474-1.98 0-.744-.158-1.404-.474-1.979a3.405 3.405 0 0 0-1.287-1.335 3.55 3.55 0 0 0-1.818-.473 3.55 3.55 0 0 0-1.818.473c-.542.316-.972.76-1.287 1.335-.316.575-.474 1.235-.474 1.98 0 .745.158 1.404.474 1.979.315.574.745 1.02 1.287 1.335a3.55 3.55 0 0 0 1.818.473zM123.74 8.504c1.275 0 2.3.379 3.077 1.136.776.758 1.164 1.9 1.164 3.428v5.871h-3.598v-5.284c0-1.401-.561-2.102-1.685-2.102-.618 0-1.114.202-1.486.606-.373.404-.559 1.01-.559 1.818v4.962h-3.597V8.674h3.427v1.118a4.078 4.078 0 0 1 1.439-.957 4.874 4.874 0 0 1 1.818-.331zM31.763 0c.434 0 .803.152 1.107.456.304.304.455.672.455 1.107v21.875c0 .434-.151.802-.455 1.106a1.506 1.506 0 0 1-1.107.456h-.52v-1.302a.754.754 0 0 0-.228-.553.753.753 0 0 0-.553-.228h-2.604a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553V25H6.249v-1.302a.754.754 0 0 0-.228-.553.753.753 0 0 0-.554-.228H2.864a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553V25h-.52c-.435 0-.804-.152-1.107-.456A1.507 1.507 0 0 1 0 23.437V1.563C0 1.129.152.76.456.456A1.506 1.506 0 0 1 1.562 0h.52v1.302c0 .217.077.402.229.553a.753.753 0 0 0 .553.228h2.603a.753.753 0 0 0 .554-.228.754.754 0 0 0 .228-.553V0h20.828v1.302c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.604a.753.753 0 0 0 .553-.228.754.754 0 0 0 .228-.553V0h.52zM6.25 20.052v-2.604a.754.754 0 0 0-.228-.553.753.753 0 0 0-.554-.228H2.864a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.603a.753.753 0 0 0 .554-.228.754.754 0 0 0 .228-.553zm0-6.25v-2.604a.754.754 0 0 0-.228-.553.753.753 0 0 0-.554-.228H2.864a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.603a.753.753 0 0 0 .554-.228.754.754 0 0 0 .228-.553zm0-6.25V4.948a.754.754 0 0 0-.228-.553.753.753 0 0 0-.554-.228H2.864a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.603a.753.753 0 0 0 .554-.228.754.754 0 0 0 .228-.553zm17.704 13.542v-6.25a.754.754 0 0 0-.228-.554.753.753 0 0 0-.553-.227H10.154a.753.753 0 0 0-.553.227.754.754 0 0 0-.228.554v6.25c0 .217.076.401.228.553a.753.753 0 0 0 .553.228h13.018a.753.753 0 0 0 .553-.228.754.754 0 0 0 .228-.553zm0-10.938v-6.25a.754.754 0 0 0-.228-.553.753.753 0 0 0-.553-.228H10.154a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v6.25c0 .217.076.402.228.554a.753.753 0 0 0 .553.227h13.018a.753.753 0 0 0 .553-.227.754.754 0 0 0 .228-.554zm7.29 9.896v-2.604a.754.754 0 0 0-.228-.553.753.753 0 0 0-.553-.228h-2.604a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.604a.753.753 0 0 0 .553-.228.754.754 0 0 0 .228-.553zm0-6.25v-2.604a.754.754 0 0 0-.228-.553.753.753 0 0 0-.553-.228h-2.604a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.604a.753.753 0 0 0 .553-.228.754.754 0 0 0 .228-.553zm0-6.25V4.948a.754.754 0 0 0-.228-.553.753.753 0 0 0-.553-.228h-2.604a.753.753 0 0 0-.553.228.754.754 0 0 0-.228.553v2.604c0 .217.076.402.228.553a.753.753 0 0 0 .553.228h2.604a.753.753 0 0 0 .553-.228.754.754 0 0 0 .228-.553z"
                  transform="translate(4 2)" />
              </g>
          </svg>

          <div className="search">
            <input className={this.state.searchFieldVisible ? "search-field visible" : "search-field" } 
            onChange={this.searchMovieName} 
            ref={input => this.search = input}
            placeholder="Que filme você procura?"
            />

            { /* import later as search component */}
            <svg className="search-svg" onClick={this.toggleSearchField} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
            width='22' height='22' viewBox='0 0 22 22'>
                <defs>
                    <path id='b' d='M19.906 18.656a.338.338 0 0 1 .094.25.457.457 0 0 1-.094.281l-.719.688a.389.389 0 0 1-.28.125.297.297 0 0 1-.25-.125l-3.813-3.781a.416.416 0 0 1-.094-.25v-.438c-.583.5-1.24.89-1.969 1.172-.729.281-1.49.422-2.281.422a6.313 6.313 0 0 1-3.266-.875 6.567 6.567 0 0 1-2.359-2.36A6.313 6.313 0 0 1 4 10.5c0-1.188.292-2.276.875-3.266a6.567 6.567 0 0 1 2.36-2.359A6.313 6.313 0 0 1 10.5 4c1.187 0 2.276.292 3.266.875a6.567 6.567 0 0 1 2.359 2.36c.583.989.875 2.077.875 3.265 0 .792-.14 1.552-.422 2.281a6.713 6.713 0 0 1-1.172 1.969h.438c.104 0 .187.031.25.094l3.812 3.812zM10.5 15.5a4.89 4.89 0 0 0 2.5-.672A4.964 4.964 0 0 0 14.828 13a4.89 4.89 0 0 0 .672-2.5 4.89 4.89 0 0 0-.672-2.5A4.964 4.964 0 0 0 13 6.172a4.89 4.89 0 0 0-2.5-.672 4.89 4.89 0 0 0-2.5.672A4.964 4.964 0 0 0 6.172 8a4.89 4.89 0 0 0-.672 2.5c0 .896.224 1.73.672 2.5A4.964 4.964 0 0 0 8 14.828a4.89 4.89 0 0 0 2.5.672z'
                    />
                    <filter id='a' width='162.5%' height='162.5%' x='-31.3%' y='-25%' filterUnits='objectBoundingBox'>
                        <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
                        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1.5'
                        />
                        <feColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                        />
                    </filter>
                </defs>
                <g fill='none' fillRule='evenodd'>
                    <path d='M-1-2h24v24H-1z' />
                    <g transform='translate(-1 -2)'>
                        <use fill='#000' filter='url(#a)' xlinkHref='#b' />
                        <use fill='#808080' xlinkHref='#b' />
                    </g>
                </g>
            </svg>

             <span className={this.state.warning ? "warning" : "display-none"}>Please type at least 3 characters.</span>
          </div>

          <section className={this.state.searchFieldVisible ? "user-info display-none" : "user-info"} >
           <div className="user-pic" 
           style={{backgroundImage: "url('./images/user.jpg')", backgroundSize: 'cover', backgroundPosition: 'center center'}} />
           <span className="user-name">Andrea Santana</span>
          </section>
        </header>

        <main>
          <h4 className="container-title">Trending</h4>

          { /* loading */ }
          <div className={ this.props.moviesList.requesting ? "loading" : "loading display-none" }> 
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
                <g fill="#FFF" fillRule="evenodd">
                    <path d="M72.222 6.2c-.744-.411-1.695-.167-2.125.544L59.21 24.77c-.43.71-.175 1.62.569 2.03.744.411 1.695.167 2.125-.544L72.79 8.23c.43-.71.175-1.62-.569-2.03zM89.8 23.778c-.41-.744-1.32-.999-2.03-.57l-18.026 10.89c-.711.429-.955 1.38-.545 2.124.411.744 1.32.999 2.031.57l18.026-10.89c.711-.429.955-1.38.545-2.124z" opacity=".05"/>
                    <path d="M96 48.5a1.5 1.5 0 0 0-1.5-1.5h-21a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 1.5-1.5zM89.8 72.222c.411-.744.167-1.695-.544-2.125L71.23 59.21c-.71-.43-1.62-.175-2.03.569-.411.744-.167 1.695.544 2.125L87.77 72.79c.71.43 1.62.175 2.03-.569z" opacity=".1"/>
                    <path d="M72.222 89.8c.744-.41.999-1.32.57-2.03l-10.89-18.026c-.429-.711-1.38-.955-2.124-.545-.744.411-.999 1.32-.57 2.031l10.89 18.026c.429.711 1.38.955 2.124.545z" opacity=".2"/>
                    <path d="M23.778 89.8c.744.411 1.695.167 2.125-.544L36.79 71.23c.43-.71.175-1.62-.569-2.03-.744-.411-1.695-.167-2.125.544L23.21 87.77c-.43.71-.175 1.62.569 2.03z" opacity=".3"/>
                    <path d="M47.5 96a1.5 1.5 0 0 0 1.5-1.5v-21a1.5 1.5 0 0 0-3 0v21a1.5 1.5 0 0 0 1.5 1.5z" opacity=".2"/>
                    <path d="M47.5 24a1.5 1.5 0 0 0 1.5-1.5v-21a1.5 1.5 0 0 0-3 0v21a1.5 1.5 0 0 0 1.5 1.5z" opacity=".6"/>
                    <path d="M6.2 72.222c.41.744 1.32.999 2.03.57l18.026-10.89c.711-.429.955-1.38.545-2.124-.411-.744-1.32-.999-2.031-.57L6.744 70.099c-.711.429-.955 1.38-.545 2.124z" opacity=".3"/>
                    <path d="M0 48.5A1.5 1.5 0 0 0 1.5 50h21a1.5 1.5 0 0 0 0-3h-21A1.5 1.5 0 0 0 0 48.5z" opacity=".4"/>
                    <path d="M23.778 6.2c-.744.41-.999 1.32-.57 2.03l10.89 18.026c.429.711 1.38.955 2.124.545.744-.411.999-1.32.57-2.031L25.901 6.744c-.429-.711-1.38-.955-2.124-.545z" opacity=".5"/>
                    <path d="M6.2 23.778c-.411.744-.167 1.695.544 2.125L24.77 36.79c.71.43 1.62.175 2.03-.569.411-.744.167-1.695-.544-2.125L8.23 23.21c-.71-.43-1.62-.175-2.03.569z" opacity=".4"/>
                </g>
            </svg>
          </div>

          <ul className={ this.props.moviesList.requesting ? "movies-container display-none" : "movies-container" }>
            { this.props.moviesList.movies  
              ? this.props.moviesList.movies.map(
                (movie) => (
                  <li className="movie-item" key={movie.imdbID}>
                    <img className="movie-card" alt=""
                    src={ movie.Poster === "N/A" ? "http://phillyjamz953fm.com/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg" : movie.Poster } />
                    <Link to={`/movieDetails/${movie.imdbID}`} onClick={(movieID) => this.searchMovieDetails(movie.imdbID)}>
                      <div className="movie-hover">
                        <span className="movie-hover__title">{movie.Title}</span>
                        <span className="movie-hover__year">{movie.Year}</span>
                      </div>
                    </Link>
                  </li>
              ))
              : <li className="movie-item">
                    <span>Nothing Found :(</span>
                  </li>
            }
          </ul>
        </main>
      </div>
    )
  }
}
function mapStateToProps(state){
  const { moviesList , requesting, lastUpdated, movieDetails } = state
  return { moviesList, requesting, lastUpdated, movieDetails }
}

export default connect(mapStateToProps)(MainPage)