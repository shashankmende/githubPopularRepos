// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {EachLanguage, isTabSame, updateTabBtn} = props

  const {id, language} = EachLanguage

  const tabClassName = isTabSame ? 'tabClass' : ''

  const onClickTabBtn = () => {
    updateTabBtn(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`language-button ${tabClassName}`}
        onClick={onClickTabBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
