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
    id: '',
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
           /*  `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText}&id=${this.state.id}
              &image_type=id&photo&per_page=${this.state.amount}&safesearch=true` */
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                this.state.searchText}
                &image_type=id&photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ 
            images: res.data.hits,
            id: res.data.hits.id
           }))
          .catch(err => console.log(err));
      }
    });
  };
  
  render() {
    console.log(this.state.images);
    /* console.log(this.state.id); */ 
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
      </div>
    );
  }
}

export default Search;