import React from 'react'
import PropTypes from 'prop-types'
import Movie from '../Movie/Movie';
import Loading from '../../svg/Loading';
import Logo from '../../svg/Logo';
import Search from '../../svg/Search';
import { connect } from 'react-redux';
import {
  fetchMovies,
  fetchMovieDetails
} from '../../actions'
import './MainPage.css';

class MainPage extends React.Component {
  state = { 
    //There's no option to search by category or popularity,
    // so I'm searching for a default word instead
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

  toggleSearchField = () =>
    this.setState({searchFieldVisible: !this.state.searchFieldVisible})

  render() {
    return (
      <div>
        <header className="header">
          <Logo />

          <div className="search">
            <input 
              className={this.state.searchFieldVisible 
                ? "search-field visible" 
                : "search-field"
              } 
              onChange={this.searchMovieName} 
              ref={input => this.search = input}
              placeholder="Which movie or show are you looking for?"
            />

            <Search toggleField={this.toggleSearchField} />
            
            <span className={this.state.warning ? "warning" : "display-none"}>
              Please type at least 3 characters.
            </span>
          </div>

          <section 
            className={this.state.searchFieldVisible 
              ? "user-info display-none" 
              : "user-info"
            } 
          >
            <div 
             className="user-pic" 
             style={{backgroundImage: "url('./images/user.jpg')",
                backgroundSize: 'cover', 
                backgroundPosition: 'center center'
              }} 
            />
           <span className="user-name">Andrea Santana</span>
          </section>
        </header>

        <main>
          <h4 className="container-title">Trending</h4>

          <div 
            className={ this.props.moviesList.requesting 
              ? "loading" 
              : "display-none" 
            }> 
            <Loading />
          </div>

          <ul 
            className={ this.props.moviesList.requesting 
              ? "movies-container display-none" 
              : "movies-container" 
            }>
            { this.props.moviesList.movies  
              ? this.props.moviesList.movies.map(
                (movie) => (
                  <Movie 
                    movie={movie} 
                    key={movie.imdbID} 
                  />
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

MainPage.propTypes = {
  moviesList: PropTypes.shape({
    movies: PropTypes.array,
    requesting: PropTypes.bool.isRequired
  })
}

function mapStateToProps(state){
  const { moviesList } = state
  return { moviesList }
}

export default connect(mapStateToProps)(MainPage)