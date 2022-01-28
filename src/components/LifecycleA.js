import React, { Component } from 'react';
import LifecycleB from './LifecycleB';


class LifecycleA extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : 'Etisha'
        }
        console.log('LifecycleA constructor');
      }

    static getDerivedStateFromProps(state,props){
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('LifecycleA shouldComponentUpdate');
      return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
      console.log('LifecycleA getSnaphsotBeforeUpdate');
      return null
  }

  componentDidUpdate () {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () =>{
    this.setState({
      name : 'Etisha Garg'
    })
  }

  render() {
    console.log('LifecycleA render');
    return (
        <div>
            <h1>Lifecycle A</h1>
            <button onClick = {this.changeState}>Change State</button>
            <LifecycleB/>
        </div>
    )
  }
}

export default LifecycleA;
