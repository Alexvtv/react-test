import '../styles/app.scss'
import { useState, useEffect } from 'react'

import Table from './Table'
import SearchPanel from './SearchPanel'
import PageSwitch from './PageSwitch'

export default function App() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [searchString, setSearchString] = useState('')
  const [sorting, setSorting] = useState({prop: 'id', value: 'raise'})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    setPage(1)
  }, [searchString])

  let filteredData = data.filter(item => item.body.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  if(sorting.value === 'raise') {
    filteredData.sort((a, b) => a[sorting.prop] > b[sorting.prop] ? 1 : -1)
  } else if(sorting.value === 'decrease') {
    filteredData.sort((a, b) => b[sorting.prop] > a[sorting.prop] ? 1 : -1)
  }

  return (
    <div className="App">
      <SearchPanel
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <PageSwitch 
        quantity={filteredData.length}
        page={page}
        setPage={setPage}
      />
      <Table 
        data={filteredData}
        page={page}
        setSorting={setSorting}
      />
    </div>
  )
}

