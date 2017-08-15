import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<p className="todo-list__footer">
    	<FilterLink filter="SHOW_ALL">
      		<button>Todos</button>
    	</FilterLink>
    	<FilterLink filter="SHOW_ACTIVE">
			<button>Ativos</button>
    	</FilterLink>
    	<FilterLink filter="SHOW_COMPLETED">
			<button>Completados</button>
    	</FilterLink>
  	</p>
)

export default Footer