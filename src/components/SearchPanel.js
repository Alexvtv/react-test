import '../styles/app.scss'

export default function SearchPanel(props) {

	const {searchString, setSearchString} = props

  return (
    <div className="search-panel">
    	<input value={searchString} onChange={(event) => setSearchString(event.target.value)} />
    	<img src="/icons/search.png" alt="search icon" />
    </div>
  )
}

