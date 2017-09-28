var TodosService = (function () {
    function TodosService() {
        this.todos = [
            { id: TodosService.__id++, name: 'Clean cave', completed: false },
            { id: TodosService.__id++, name: 'Dryclean cape', completed: true },
            { id: TodosService.__id++, name: 'Save Gotham', completed: false },
        ];
    }
    TodosService.prototype.add = function (todo) {
        var newTodo = {
            id: TodosService.__id += 1,
            name: todo
        };
        if (typeof todo === 'object') {
            newTodo = todo;
        }
        newTodo.completed = false;
        this.todos.push(newTodo);
    };
    TodosService.prototype.clearCompleted = function () {
        var _this = this;
        var completed = this.todos.filter(function (x) { return x.completed; });
        completed.forEach(function (x) { _this.remove(x.id); });
    };
    TodosService.prototype.getAll = function () {
        return this.todos;
    };
    TodosService.prototype.remove = function (todoId) {
        var instance = this._find(todoId);
        this.todos.splice(this.todos.indexOf(instance), 1);
    };
    TodosService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        return filtered.length ? filtered[0] : null;
    };
    return TodosService;
}());
TodosService.__id = 0;
angular.module('TodoApp').service('TodosService', TodosService);
//# sourceMappingURL=TodosService.js.map