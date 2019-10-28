import React, { Component } from "react";
import axios from "axios";
import Images from "./Images";
import "./style/index.scss";


class Search extends Component {
  state = {
    searchText: "",
    amount: 50,
    images: []
  };
  
  onTextChange = e => {
    const apiUrl = "https://pixabay.com/api";
    const apiKey= "14004053-d3ac27b4ed8b8d1bdc57ed1db";
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${apiUrl}/?key=${apiKey}&q=${this.state.searchText}
                &image_type=id&photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res =>
            this.setState({
              images: res.data.hits
              })
          )
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    console.log("this.state.images", this.state.images);

    return (
      <div>
        <div className="searchBarDiv">
          <div className="searchBarDiv__wrapper">
            <input
              className="searchBarDiv__search"
              type="text"
              placeholder="Search"
              icon="search"
              name="searchText"
              onChange={this.onTextChange}
            />
          </div>
        </div>
        {this.state.images.length > 0 ? (
          <Images images={this.state.images} addCollection={this.props.addCollection}/>
        ) : null}
      </div>
    );
  }
}

export default Search;
