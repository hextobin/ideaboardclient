import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import onClickOutside from "react-onclickoutside"

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body,
    }
  }

  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body,
    }

    axios.put(
      `https://quiet-taiga-10596.herokuapp.com/api/v1/ideas/${this.props.idea.id}`,
      {
        idea: idea
      }
    )
    .then(response => {
      // console.log(response)
      this.props.updateIdea(response.data)
    })
    .catch(error => console.log(error))
  }

  handleClickOutside = evt => {
    this.props.resetId()
  };


  render() {
    return(

      <Card className='card-tile'>
        <Card.Content>
          <form>
            <Card.Header>
              <input className='new-title'  autoFocus type="text" name='title' placeholder='Enter a Title' value={this.state.title} onChange={this.handleInput} ref={this.props.titleRef} />
            </Card.Header>
            <Card.Description>
              <textarea className='idea-body' name="body" placeholder='Describe Your Idea' value={this.state.body} onChange={this.handleInput}></textarea>
            </Card.Description>
            <button type='button' onClick={this.handleSubmit}>
              Save
            </button>
          </form>
        </Card.Content>
      </Card>
    )
  }
}

export default onClickOutside(IdeaForm)