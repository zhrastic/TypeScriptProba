/// <reference path="TodosService.ts" />

class AddTodo {
    static $inject = ['TodosService'];

    newTaskName = "";

    constructor(private _todosService: TodosService) {

		var a = 'Jebi se';

		
    }

    add() {
        this._todosService.add(this.newTaskName);
        this.newTaskName = "";
    }
}
