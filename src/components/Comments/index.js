/* eslint-disable react/self-closing-comp */
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  onAddComment = event => {
    const now = new Date()
    event.preventDefault()
    const {name, comment} = this.state
    const colors = initialContainerBackgroundClassNames
    const index = Math.ceil(Math.random() * colors.length) - 1
    console.log(index)
    const randomColor = colors[index]
    console.log(randomColor)
    const newComment = {
      name,
      comment,
      id: uuidv4(),
      isLiked: false,
      color: randomColor,
      date: now,
    }

    this.setState(prveState => ({
      commentList: [...prveState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onDelete = id => {
    console.log(id)
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, commentList} = this.state
    const count = commentList.length

    return (
      <div className="app-container">
        <h1 className="heading">Comments</h1>
        <div className="responsive-container">
          <form className="comment-form-container" onSubmit={this.onAddComment}>
            <p className="form-heading">say something about 4.0 technologies</p>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Your Name"
            />
            <textarea
              className="input-comment"
              type="text"
              rows="5"
              cols="8"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            ></textarea>

            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <div>
          <hr />
        </div>
        <br />
        <div className="comment-item-container">
          <p>
            <span className="count">{count}</span> Comments
          </p>

          <ul className="comments-container">
            <br />
            {commentList.map(each => (
              <CommentItem
                key={each.id}
                commenttDetails={each}
                toggleIsFavorite={this.toggleIsFavorite}
                onDelete={this.onDelete}
                // colors={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
