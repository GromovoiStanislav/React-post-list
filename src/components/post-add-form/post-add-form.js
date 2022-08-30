import { Component, useState } from 'react'
import './post-add-form.css'

class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChange(e) {
    this.setState({ text: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onAdd(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="О чём вы думаете сейчас?"
          value={this.state.text}
          onChange={this.onValueChange}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    )
  }
}

const PostAddFormFn = ({ onAdd }) => {
  const [text, setText] = useState('')

  const onValueChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control new-post-label"
        placeholder="О чём вы думаете сейчас?"
        value={text}
        onChange={onValueChange}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  )
}

export default PostAddFormFn
