import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
	<div className="todo-list">
		<h1>TODO</h1>
    	<AddTodo />
    	<VisibleTodoList />
    	<Footer />
    	<UndoRedo />
  	</div>
)

export default App