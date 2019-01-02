import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'

class IdeasContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: '',
    }
  }

  componentDidMount() {
    axios('https://quiet-taiga-10596.herokuapp.com/api/v1/ideas.json')
    .then(response => {
      // console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewIdea = () => {
    this.resetNotification()
    axios.post(
      'https://quiet-taiga-10596.herokuapp.com/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        ideas: ideas,
        editingIdeaId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x =>x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea }
    })
    console.log(idea)
    this.setState({
      ideas: ideas,
      notification: 'All Changes Saved',
      editingIdeaId: null,
    })
  }

  resetEditingIdeadId = () => {
    this.setState({editingIdeaId: null})
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  enableEditing = (id) => {
    this.setState({editingIdeaId: id},
      () => {this.title.focus() })
    
  }

  deleteIdea = (id) => {
    axios.delete(`https://quiet-taiga-10596.herokuapp.com/api/v1/ideas/${id}`)
    .then(response => {
      const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
      const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
      this.setState({ideas: ideas})
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <>
        <button className='newIdeaButton' onClick={this.addNewIdea}>
          New Idea
        </button>
        <span className='notification'>
          {this.state.notification}
        </span>
        <div>
          {this.state.ideas.map((idea) => {
            if (this.state.editingIdeaId === idea.id) {
              return (<IdeaForm idea={idea} key={idea.id} updateIdea={this.updateIdea} resetNotification={this.resetNotification} titleRef={input => this.title = input} resetId={this.resetEditingIdeadId}/>)
            } else {
              return (<Idea onClick={this.enableEditing}  idea={idea} key={idea.id} onDelete={this.deleteIdea} />)
            }
          })}
        </div>
      </>
    )
  }
}

export default IdeasContainer