import React from 'react'
import '../components/App.css'
import Movie from '../components/Movie';
import Loading from '../svg/Loading';
import Logo from '../svg/Logo';
import Search from '../svg/Search';
import { connect } from 'react-redux';
import {
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

  toggleSearchField = () => {
    this.state.searchFieldVisible ? this.setState({searchFieldVisible: false}) : this.setState({searchFieldVisible: true})
  }

  render() {
    return (
      <div>
        <header className="header">
          <Logo />

          <div className="search">
            <input className={this.state.searchFieldVisible ? "search-field visible" : "search-field" } 
            onChange={this.searchMovieName} 
            ref={input => this.search = input}
            placeholder="Que filme você procura?"
            />

            <Search toggleField={this.toggleSearchField} />
            
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

          <div className={ this.props.moviesList.requesting ? "loading" : "loading display-none" }> 
            <Loading />
          </div>

          <ul className={ this.props.moviesList.requesting ? "movies-container display-none" : "movies-container" }>
            { this.props.moviesList.movies  
              ? this.props.moviesList.movies.map(
                (movie) => (
                  <Movie movie={movie} key={movie.imdbID} goToMovieDetails={(movieID) => this.searchMovieDetails(movie.imdbID)}/>
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