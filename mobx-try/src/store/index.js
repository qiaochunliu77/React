import { observable, computed, actions, action } from 'mobx';

class Todo {
    id = Math.random()
    @observable title
    @observable finished = false
    constructor(title) {
        this.title = title
    }
}
class TodoList {
    // state
    // 读
    // 写
    @observable todos = []
    @action
    addTodo = title => {
        if (!title) return;
        this.todos.push(new TodoList(title))
    }
}
const store = new TodoList();
export default store; 