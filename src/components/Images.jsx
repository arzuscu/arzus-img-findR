import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Images extends Component {
  state = {
    open: false, //toggles modal for selected image open
    openImg: {}, //is full object has all properties of open Img
  };

  handleOpen = (img) => {
    this.setState({ open: true, openImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAdd = () => {
    this.props.addCollection(this.state.openImg)
    // window.location = "http://localhost:3001/MyCollection";
  };

  render() {
    let imageList;
    const { images } = this.props;
    if (images) {
      imageList = (
        <GridList cols={5} rows={5}>
          {images.map((img, idx) => (
            <GridTile
              title={img.tags}
              key={img.id}
            
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={() => this.handleOpen(img)}
                >
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt={img.tags} />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageList = null;
    }

    const actions = [
      <>
      <FlatButton
          name="add"
          label="Add My Collection"
          primary={true}
          onClick={this.handleAdd}
          />
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
      </>
    ];

    return (
      <div>
        {imageList}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.openImg.largeImageURL} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}
Images.propTypes = {
  images: PropTypes.array.isRequired
};
export default Images;
