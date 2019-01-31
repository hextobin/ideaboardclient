import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class Idea extends Component {

  handleClick = () => {
    this.props.onClick(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id)
  }

  render () {
    return(

      <Card className='card-tile idea-card' >
        <Card.Content>
            <div>
              <button data-cy-delete={this.props.id} className='card-delete' onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          <Card.Header data-cyheader={this.props.id} onClick={this.handleClick}>
            {this.props.idea.title}
          </Card.Header>
          <Card.Description data-cydescription={this.props.id}  onClick={this.handleClick}>
            {this.props.idea.body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Idea