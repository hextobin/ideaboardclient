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
      // <div className='tile'>
      //   <span className="deleteButton" onClick={this.handleDelete}>
      //     x
      //   </span>
      //   <h4 onClick={this.handleClick}>
      //     {this.props.idea.title}
      //   </h4>
      //   <p onClick={this.handleClick}>
      //     {this.props.idea.body}
      //   </p>
      // </div>

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