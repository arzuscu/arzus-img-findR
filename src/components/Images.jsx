import React, { Component } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

 class Images extends Component {
  state = {
    open: false,
    currentImg: '',
    currentimageId:"",
    imageObject:[],
    mycollection:[]

  };

  GetingImageObject=()=>{
    axios
    .get(
      `https://pixabay.com/api?key=14004053-d3ac27b4ed8b8d1bdc57ed1db&id=${this.state.currentimageId}`
    )
    .then(res => this.setState({ imageObject: res.data.hits }))
    .catch(err => console.log(err));
  }

    handleOpen = (img , id) => {
      this.setState({ open: true, currentImg: img, currentimageId: id } , ()=> this.GetingImageObject() );
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    handleAdd = () =>{
      console.log(this.state.imageObject)
      const imageObject = this.state.imageObject
      localStorage.setItem('myCollection', JSON.stringify(imageObject)); 

      // var temp = JSON.parse(localStorage.getItem('myCollection'));
      // localStorage.setItem('newColl', temp);

      
      window.location ="http://localhost:3001/MyCollection";
    }
    
  render() {
   /*  console.log(this.props.images.id); */
        let imageList;
        const { images } = this.props;
       


        if (images) {
          console.log(images)
          imageList = (
            <GridList cols={5} rows={5}>
              {images.map(img => (<GridTile title={img.tags} key={img.id} subtitle={ <span>by <strong>{img.user}</strong></span>}
                  actionIcon={
                    <IconButton onClick={() => this.handleOpen(img.largeImageURL, img.id)}>
                      <ZoomIn  color="white" />
                    </IconButton>
                  }
                >
                  <img src={img.largeImageURL} alt="" />
                </GridTile>
              ))}
            </GridList>
          );
        } else {
          imageList = null;
        }

        const actions = [
          <>
          <FlatButton name ="add" label="Add My Collection" primary={true} onClick={this.handleAdd} />
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
            onRequestClose={this.handleClose}>
            <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    )
  }
}
Images.propTypes = {
  images: PropTypes.array.isRequired
};
export default Images;
