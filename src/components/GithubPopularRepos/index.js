import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {reposList: [], langTab: languageFiltersData[0].id, isLoading: true}

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const {langTab} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${langTab}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    const UpdatedData = data.popular_repos.map(each => ({
      id: each.id,
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    this.setState({
      reposList: UpdatedData,
      isLoading: false,
    })
  }

  updateTabBtn = id => {
    this.setState(
      {
        langTab: id,
        isLoading: true,
      },
      this.getRepos,
    )
  }

  render() {
    const {reposList, langTab, isLoading} = this.state
    console.log('repos list', reposList)
    return (
      <div className="bg-container">
        <h1>Popular</h1>
        <ul className="languages-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              EachLanguage={each}
              key={each.id}
              isTabSame={langTab === each.id}
              updateTabBtn={this.updateTabBtn}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repos-container">
            {reposList.map(each => (
              <RepositoryItem repo={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
