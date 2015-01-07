(function(Reflux, undoActions, global, TodoActions) {
    'use strict';
    var listOfTodos = [];
    global.undoStore = Reflux.createStore({
        listenables: [undoActions],
        onUndoLastAction: function() {
            TodoActions.mergeLists(listOfTodos);
            listOfTodos = [];
            this.triggerList();
        },
        onUpdateItemsToRestore: function(items) {
            listOfTodos = items;
            this.triggerList();
        },
        triggerList: function() {
            this.trigger(listOfTodos);

        }
    });
})(window.Reflux, window.undoActions, window, window.TodoActions);
