import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<p>
    	<button onClick={onUndo} disabled={!canUndo}>
			<i className="fa fa-undo"></i>
    	</button>
		<button onClick={onRedo} disabled={!canRedo}>
			<i className="fa fa-repeat"></i>
    	</button>
  	</p>
)

const mapStateToProps = (state) => ({
	canUndo: state.todos.past.length > 0,
  	canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
  	onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  	mapStateToProps,
  	mapDispatchToProps
)(UndoRedo)

export default UndoRedo