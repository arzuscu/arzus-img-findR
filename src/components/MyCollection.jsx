import React, { Component } from 'react'
import NavBar from './NavBar';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';


export default class MyCollection extends Component {
    state = {
        open: false,
        currentImg: ''
      };

    render() {
        let imageList;
        const { images } = this.props;

        if (images) {
          imageList = (
            <GridList cols={5} rows={5}>
              {images.map(img => (<GridTile title={img.tags} key={img.id}subtitle={ <span>by <strong>{img.user}</strong></span>}
                  actionIcon={
                    <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                      <ZoomIn color="white" />
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

        return (
            <div>
                { imageList }
                <NavBar />
                <p>arzuuuu</p>
                <h1 className="myCollection">Hello</h1>
                <h1>Hello</h1>
            </div>
        )
    }
}
