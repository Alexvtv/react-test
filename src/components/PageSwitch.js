import '../styles/app.scss'

export default function PageSwitch(props) {

	const {quantity, page, setPage} = props

  return (
    <div className="page-switch">
    	{ page > 1 ? 
    		(<button onClick={() => setPage(1)}>&laquo;</button>) : ('') 
    	}
    	{ page > 2 ? 
    		(<button onClick={() => setPage(page - 2)}>{page - 2}</button>) : ('') 
    	}
    	{ page > 1 ? 
    		(<button onClick={() => setPage(page - 1)}>{page - 1}</button>) : ('') 
    	}
    	<button className="current-page">{page}</button>
    	{ quantity/50 > page ? 
    		(<button onClick={() => setPage(page + 1)}>{page + 1}</button>) : ('') 
    	}
    	{ quantity/50 > page + 1 ? 
    		(<button onClick={() => setPage(page + 2)}>{page + 2}</button>) : ('') 
    	}
    	{ Math.ceil(quantity/50) > page ? 
    		(<button onClick={() => setPage(Math.ceil(quantity/50))}>&raquo;</button>) : ('') 
    	}
    </div>
  )
}

