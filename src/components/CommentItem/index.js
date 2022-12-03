/* eslint-disable react/no-unknown-property */
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commenttDetails, toggleIsFavorite, onDelete} = props
  const {id, name, comment, isFavorite, color, date} = commenttDetails
  const initial = name[0].toUpperCase()
  const likeImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedAt = formatDistanceToNow(date)

  const onClickToggle = () => {
    toggleIsFavorite(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const calssbtn = isFavorite ? 'liked' : ''

  return (
    <li className="list-item">
      <div className="header">
        <div className={`initial ${color}`}>{initial}</div>
        <div>
          <div className="head">
            <h1 className="commented-by">{name}</h1>
            <p className="time">{postedAt} ago</p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>

      <div className="footer">
        <button
          type="button"
          className={`button-like ${calssbtn}`}
          onClick={onClickToggle}
        >
          <div className="btn-container">
            <img src={likeImgUrl} alt="like" className="btn-image" />
            <p> Like</p>
          </div>
        </button>
        <button
          type="button"
          className="button-like"
          testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="btn-image"
          />
        </button>
      </div>
      <hr />
      <br />
    </li>
  )
}

export default CommentItem
