(function(React, Reflux, TodoActions, todoListStore, global) {

    var AddManyTextField = React.createClass({
        getInitialState: function() {
            return {
                value: ""
            }
        },
        onComplete: function(event) {
            var newLine = /\n/;
            var emptyString = "";
            var value = this.refs.textArea.getDOMNode().value;
            var removeEmptyString = function(s){return s !== emptyString};
            this.props.onComplete(value.split(newLine).filter(removeEmptyString));
            this.setState({
                value: ""
            });
        },
        handleOnChange: function(event) {
            this.setState({
                value: event.target.value
            })
        },
        render: function() {
            return (
                <div>
                    <textarea rows="5" cols="50"  className="addManyTextArea" 
                        value={this.state.value} 
                        onChange={this.handleOnChange}
                        ref="textArea">
                    </textarea>
                    <button className="normal-button" onClick={this.onComplete}>Submit</button>
                </div>
                
            )
        }
    })


    var AddMany = React.createClass({
        getInitialState: function() {
            return {
                showOrHide: false
            }
        },
        handleTextFieldToggle: function() {
            this.setState({
                showOrHide: !this.state.showOrHide
            })
        },
        onTextAreaComplete: function(listOfNewTodos) {
            listOfNewTodos.forEach(function(todo) {
                TodoActions.addItem(todo);
            });
        },
        render: function() {
            return (
                <div id="addMany">
                    <a href="javascript:;" onClick={this.handleTextFieldToggle}> Add Many</a>
                    {
                        this.state.showOrHide && 
                        <AddManyTextField onComplete={this.onTextAreaComplete}/>
                    }
                </div>        
            )
        }
    });

    React.render(<AddMany />, document.getElementById("addmanycontainer"));

})(window.React, window.Reflux, window.TodoActions, window.todoListStore, window);
