import React, { Component } from 'react';
import axios from 'axios';
import Images from './Images';
import './style/index.scss'
import NavBar from './NavBar';
// import MyCollection from './MyCollection';

class Search extends Component {
  state = {
    searchText: '',
    amount: 50,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '14004053-d3ac27b4ed8b8d1bdc57ed1db',
    images: []
  };

  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };
  
  render() {
    console.log(this.state.images);
    return (
      <div>
        <NavBar />
        <div className="searchBarDiv">
        <div className="searchBarDiv__wrapper">
            <input className="searchBarDiv__search" type="text" placeholder="Search" icon="search" 
            name="searchText"
            onChange={this.onTextChange}/>
        </div>
        </div>
        {this.state.images.length > 0 ? (<Images images={this.state.images} />) : null}
        {/* {this.state.images.length > 0 ? (<MyCollection images={this.state.images} />) : null} */}
      </div>
    );
  }
}

export default Search;