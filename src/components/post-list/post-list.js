import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  const elements = posts.map((post) => {
    const { id, ...itemProps } = post
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    )
  })

  return <ul className="list-group app-list">{elements}</ul>
}

export default PostList
