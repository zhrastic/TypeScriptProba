var AddTodo = (function () {
    function AddTodo(_todosService) {
        this._todosService = _todosService;
        this.newTaskName = "";
    }
    AddTodo.prototype.add = function () {
        this._todosService.add(this.newTaskName);
        this.newTaskName = "";
    };
    return AddTodo;
}());
AddTodo.$inject = ['TodosService'];
//# sourceMappingURL=addTodo.js.map