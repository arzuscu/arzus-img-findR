import React, { Component } from 'react'
// import NavBar from './NavBar';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import FlatButton from 'material-ui/FlatButton';


 class MyCollection extends Component {
    state = {
        open: false,
        currentImg: ''
      };

      handleOpen = img => {
      this.setState({ open: true, currentImg: img });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    render() {
        console.log(this.props.data);
        let imageList;
        const data = this.props.data;

        if (data) {
          imageList = (
            <GridList cols={5} rows={5}>
              {data.map(img => (<GridTile title={img.title} key={img.id} subtitle={ <span>by <strong>{img.channel}</strong></span>}
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

          const actions = [
            <>
            {/* <FlatButton name ="add" label="Add" primary={true} onClick={this.handleClose} /> */}
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />  
            </>
          ];

        return (
            <div>
                { imageList }
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
MyCollection.propTypes = {
    data: PropTypes.array.isRequired
  };
export default MyCollection;