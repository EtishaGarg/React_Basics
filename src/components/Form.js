import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comments : '',
         topic : 'React',
         message : ''
      }
    }

handleUsernameChange = (event) =>{
    this.setState({
        username : event.target.value
    })
}

handleCommentsChange = (event) =>{
    this.setState({
        comments: this.state.value
    })
}

handleTopicChange = (event) =>{
    this.setState({
        topic: this.state.value
    })
}

handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
    
  render() {
    const {username, comments, topic} = this.state
    return(
        <form onSubmit = {this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type = 'text' value = {username} onChange = {this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value = {comments} onChange = {this.handleCommentsChange}/>
            </div>
            <div>
                <label>Topic</label>
                <select value = {topic} onChange={this.handleTopicChange}>
                    <option value = 'React'>React</option>
                    <option value = 'Angular'>Angular</option>
                    <option value = 'Vue'>Vue</option>
                </select>
            </div>
            <div>
                <button type = 'submit'>Submit</button>
            </div>
        </form>
    ) 
  }
}

export default Form;
