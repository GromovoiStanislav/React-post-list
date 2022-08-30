import { Component, useState } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, label: 'learn ReactJS', important: true, like: true },
        { id: 2, label: 'learn NestJS', important: false, like: false },
        { id: 3, label: 'create React-app', important: false, like: false },
        { id: 4, label: 'create Nest-app', important: false, like: false },
      ],
      search: '',
      filter: 'all',
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLike = this.onToggleLike.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)
  }

  searchPost(items, search) {
    if (search.length === 0) {
      return items
    }
    return items.filter((item) => item.label.indexOf(search) > -1)
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter((item) => item.like)
    }
    return items
  }

  onUpdateSearch(search) {
    this.setState({ search })
  }

  onFilterSelect(filter) {
    this.setState({ filter })
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id)
      return { data: [...data.slice(0, index), ...data.slice(index + 1)] }
    })
    // const { data } = this.state
    // const index = data.findIndex((item) => item.id === id)
    // this.setState({ data: [...data.slice(0, index), ...data.slice(index + 1)] })
  }

  addItem(body) {
    const { data } = this.state
    const newItem = {
      id: data.length + 1,
      label: body,
      important: false,
    }
    //this.setState({ data: [...data, newItem] })
    this.setState(({ data }) => {
      return { data: [...data, newItem] }
    })
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id)
      const old = data[index]
      const newEl = { ...old, important: !old.important }
      const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)]
      return { data: newArr }
    })
  }

  onToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id)
      const old = data[index]
      const newEl = { ...old, like: !old.like }
      const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)]
      return { data: newArr }
    })
  }

  render() {
    const { data, search, filter } = this.state
    const liked = data.filter((item) => item.like).length
    const allPosts = data.length

    const visiblePosts = this.filterPost(this.searchPost(data, search), filter)

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />

        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

///////////////////////////////////////////////

const AppFn = () => {
  const [data, setData] = useState([
    { id: 1, label: 'learn ReactJS', important: true, like: true },
    { id: 2, label: 'learn NestJS', important: false, like: false },
    { id: 3, label: 'create React-app', important: false, like: false },
    { id: 4, label: 'create Nest-app', important: false, like: false },
  ])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const searchPost = (items, search) => {
    if (search.length === 0) {
      return items
    }
    return items.filter((item) => item.label.indexOf(search) > -1)
  }

  const filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter((item) => item.like)
    }
    return items
  }

  const onUpdateSearch = (search) => {
    setSearch(search)
  }

  const onFilterSelect = (filter) => {
    setFilter(filter)
  }

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id != id))
  }
  const addItem = (body) => {
    const newItem = {
      id: data.length + 1,
      label: body,
      important: false,
    }
    setData([...data, newItem])
  }
  const onToggleImportant = (id) => {
    const index = data.findIndex((item) => item.id === id)
    const old = data[index]
    const newEl = { ...old, important: !old.important }
    const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)]
    setData(newArr)
  }

  const onToggleLike = (id) => {
    const index = data.findIndex((item) => item.id === id)
    const old = data[index]
    const newEl = { ...old, like: !old.like }
    const newArr = [...data.slice(0, index), newEl, ...data.slice(index + 1)]
    setData(newArr)
  }

  const liked = data.filter((item) => item.like).length
  const allPosts = data.length
  const visiblePosts = filterPost(searchPost(data, search), filter)

  return (
    <div className="app">
      <AppHeader liked={liked} allPosts={allPosts} />

      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLike={onToggleLike}
      />
      <PostAddForm onAdd={addItem} />
    </div>
  )
}

export default AppFn
