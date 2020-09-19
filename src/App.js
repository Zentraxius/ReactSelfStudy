import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';

class App extends Component {

  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Run dishes',
        id: 2,
        completed: true
      },
      {
        title: 'Squish the cat',
        id: 3,
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
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
