import React from 'react';

class Search extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
    return(
      <svg  xmlns='http://www.w3.org/2000/svg' onClick={this.props.toggleField} xmlnsXlink='http://www.w3.org/1999/xlink'
      width='22' height='22' viewBox='0 0 22 22' className="search-svg">
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
    )
  }
}
export default Search