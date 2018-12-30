import React, { Component } from 'react'
import axios from 'axios'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body,
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body,
    }
  }


  render() {
    return(
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input type="text" className="input" name='title' placeholder='Enter a Title' value={this.state.title} onChange={this.handleInput} />
          <textarea name="body" className="input" placeholder='Describe Your Idea' value={this.state.body} onChange={this.handleInput}></textarea>
          {/* <button className='sub'>Submit</button> */}
        </form>
      </div>
    )
  }
}

export default IdeaForm