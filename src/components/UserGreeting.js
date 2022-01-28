import React, { Component } from 'react'

class UserGreetig extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {

        // Short circuit operator - If we don't want to display anything if condition is not met
        // return this.state.isLoggedIn && <div>Hello Etisha</div>

        // Ternary conditional operator
        return this.state.isLoggedIn ? (
            <div>Hello Etisha</div>
        ):(
            <div>Hello User</div>
        )
        
        // Element variables approach
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Etisha</div>
        // }
        // else{
        //     message = <div>Hello User</div>
        // }
        // return <div>{message}</div>

        // if/else approach
        // if (this.state.isLoggedIn === true) {
        //     return <div>Hello Etisha</div>
        // }
        // else {
        //     return <div>Hello User</div>
        // }
    }
}

export default UserGreetig
