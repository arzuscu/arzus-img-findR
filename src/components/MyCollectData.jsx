import React, { Component } from 'react'
import testData from './testData';
import MyCollection from './MyCollection';

class MyCollectData extends Component {
    constructor(){
        super();
        this.state = {
          data: testData
        }
      }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <MyCollection data={this.state.data}/>
            </div>
        )
    }
}
export default MyCollectData;