import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: uuidv4(),
        completed: false
      },
      {
        title: 'Run dishes',
        id: uuidv4(),
        completed: true
      },
      {
        title: 'Squish the cat',
        id: uuidv4(),
        completed: false
      }
    ]
  }

  // Toggles Complete!
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
    // console.log(id)
  }

// Delete the Todo Item
delTodo = (id) => {
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  // console.log(id)
}

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
