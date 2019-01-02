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

      <Card className='card-tile'>
        <Card.Content>
            <div>
              <button className='card-delete' onClick={this.handleDelete}>
                Delete
              </button>
            </div>
          <Card.Header onClick={this.handleClick}>
            {this.props.idea.title}
          </Card.Header>
          <Card.Description onClick={this.handleClick}>
            {this.props.idea.body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Idea