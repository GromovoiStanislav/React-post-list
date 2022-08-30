import { Component, useState } from 'react'
import './post-status-filter.css'

class PostStatusFilter extends Component {
  constructor(props) {
    super(props)
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилось' },
    ]
  }
  render() {
    const { filter, onFilterSelect } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name
      const className = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          key={name}
          type="button"
          className={`btn ${className}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      )
    })
    return <div className="btn-group">{buttons}</div>
  }
}

const PostStatusFilterFn = ({ filter, onFilterSelect }) => {
  const buttons = [
    { name: 'all', label: 'Все' },
    { name: 'like', label: 'Понравилось' },
  ]

  const buttonsJSX = buttons.map(({ name, label }) => {
    const active = filter === name
    const className = active ? 'btn-info' : 'btn-outline-secondary'
    return (
      <button
        key={name}
        type="button"
        className={`btn ${className}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return <div className="btn-group">{buttonsJSX}</div>
}

export default PostStatusFilterFn
