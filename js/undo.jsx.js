(function(React, Reflux, undoActions, undoListStore, global) {
	var UndoButton = React.createClass({
		mixins: [Reflux.ListenerMixin],
		getInitialState: function() {
			return {
				list: []
			};
		},
		showOrHideOnListChange: function(list) {
			this.setState({
				list: list
			});
	    },
	    componentDidMount: function() {
			this.listenTo(undoListStore, this.showOrHideOnListChange);
	    },
		render: function() {
			return this.state.list.length > 0 && (
				<div id="undo">
					<a href="#" onClick={undoActions.undoLastAction}>Undo {this.state.list.length} Items</a>
				</div>
			)
		}
	});

	React.render(<UndoButton/>, document.getElementById('undocontainer'));

})(window.React, window.Reflux, window.undoActions, window.undoStore, window)

