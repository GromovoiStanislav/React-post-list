import React from 'react'
import './post-list-item.css'

const PostListItem = ({
  like,
  label,
  important,
  onDelete,
  onToggleImportant,
  onToggleLike,
}) => {
  let classNames = 'app-list-item d-flex justify-content-between'
  if (important) {
    classNames += ' important'
  }
  if (like) {
    classNames += ' like'
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToggleLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btm-sm"
          onClick={onToggleImportant}
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btm-sm" onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  )
}

export default PostListItem
