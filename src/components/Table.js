import '../styles/app.scss'

export default function Table(props) {

	let {data, page, setSorting} = props

	const displayData = () => {
		let itemsToDisplay = []
		data.forEach((item, index) => {
			if((index < page*50) && (index > page*50 - 51)) {
				itemsToDisplay.push(item)
			}
		})
		return itemsToDisplay.map(item => {
				return (
					<div key={item.id} className="element">
						<p className="id">{ item.id }</p>
						<p className="content">{ item.body }</p>
					</div>
				)
		})
	}

	const changeSorting = (type) => {
		setSorting(sorting => {
			if((sorting.value === 'decrease') || (sorting.prop !== type)) {
				return {prop: type, value: 'raise'}
			} else {
				return {prop: type, value: 'decrease'}
			}
		})
	}

  return (
    <div className="table">
    	<div className="heading">
				<p 
					className="id" 
					onClick={() => changeSorting('id')}
				>ID</p>
				<p 
					className="content"
					onClick={() => changeSorting('body')}
				>Сообщение</p>
			</div>
    	{ displayData() }
    </div>
  )
}

