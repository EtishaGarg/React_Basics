import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Etisha'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Etisha'
            })
        }, 2000);
    }
    
  render() {
    console.log("***************** Parent Component *****************");
    return (
        <div>
            Parent Component
            <MemoComp name = {this.state.name}/>
            {/* <RegComp name={this.name}/>
            <PureComp name={this.name}/> */}
        </div>
    )
    
  }
}

export default ParentComp;
