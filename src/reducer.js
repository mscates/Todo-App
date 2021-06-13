const TodoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO": {
      const newTodo = action.payload.todo
      return { todos: [newTodo, ...state.todos]}
    }
    case "DELETE_TODO": {
      const deletedTodoId = action.payload.id
      console.log(state.todos, action.payload.id)
      return {todos: state.todos.filter(todo => todo.id !== deletedTodoId)}
    }
    case "UPDATE_TODO": {
      const updatedTodoId = action.payload.id
      return { todos: state.todos.map(todo => todo.id === updatedTodoId ? {...todo, content: action.payload.content} : todo)}
    }
    case "COMPLETE_TODO": {
      console.log(action.payload)
      const completedTodoId = action.payload.id
      return { todos: state.todos.map(todo => todo.id === completedTodoId ? {...todo, completed: action.payload.todoCompleted} : todo)}
    }
    default:
      return state
  }
}

export default TodoReducer