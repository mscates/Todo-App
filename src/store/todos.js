import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const slice = createSlice ({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded: (todos, action) => {
      todos.push({
        todo: action.payload.todo,
        completed: false,
        id: uuid(),
      })
    },
    todoRemoved: (todos, action) => {
      return todos.filter((todo) => todo.id !== action.payload)
    },
    todoUpdated: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id)
      todos[index] = {
        todo: action.payload.todo,
        id: action.payload.id,
      }
    },
    todoCompleted: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id)
      todos[index].completed = action.payload.completed
    }
  }
})

export const { todoAdded, todoRemoved, todoUpdated, todoCompleted } = slice.actions
export default slice.reducer