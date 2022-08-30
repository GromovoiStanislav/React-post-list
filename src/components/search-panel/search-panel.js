import { Component, useState } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { search: '' }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  onUpdateSearch(e) {
    const search = e.target.value
    this.setState({ search })
    this.props.onUpdateSearch(search)
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
        value={this.state.search}
      />
    )
  }
}

const SearchPanelFn = (props) => {
  const [search, setSearch] = useState('')

  const onUpdateSearch = (e) => {
    setSearch(e.target.value)
    props.onUpdateSearch(e.target.value)
  }

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Поиск по записям"
      onChange={onUpdateSearch}
      value={search}
    />
  )
}

export default SearchPanelFn
