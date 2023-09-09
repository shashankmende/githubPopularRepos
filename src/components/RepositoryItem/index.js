// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repo} = props
  const {avatarUrl, name, starsCount, issuesCount, forksCount} = repo
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <h1 className="heading">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-img"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars-img"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stars-img"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
