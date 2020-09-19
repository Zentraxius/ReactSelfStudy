import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [
    //   {
    //     title: "Take out the trash",
    //     id: uuidv4(),
    //     completed: false,
    //   },
    //   {
    //     title: "Run dishes",
    //     id: uuidv4(),
    //     completed: true,
    //   },
    //   {
    //     title: "Squish the cat",
    //     id: uuidv4(),
    //     completed: false,
    //   },
    // 
  ]
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  // Toggles Complete!
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
    // console.log(id)
  };
///////////////////////////////////////////////////////////////////////
// Delete the Todo Item using Axios/Post
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res =>this.setState({ todos: [...this.state.todos.filter
    (todo => todo.id !== id)] }));
}

///////////////////////////////////////////////////////////////////////
  // // Delete the Todo Item || Original
  // delTodo = (id) => {
  //   this.setState({
  //     todos: [...this.state.todos.filter
  //     ((todo) => todo.id !== id)],
  //   });
  //   // console.log(id)
  // };
///////////////////////////////////////////////////////////////////////


// Happy Space

///////////////////////////////////////////////////////////////////////
  // Add Todo with API/Posting using Axios                           //
  addTodo = (title) => {                                             //
    axios.post('https://jsonplaceholder.typicode.com/todos', {title, //
    completed: false                                                 //
  })                                                                 //
  .then(res => this.setState({ todos:                                //
    [...this.state.todos, res.data] }));                             //
    // const newTodo = {                                             //
    //   // id: uuidv4(),                                            //
    //   title: title,                                               //
    //   completed: false,                                           //
    // };                                                            //
    // this.setState({ todos: [...this.state.todos, newTodo] });     //
  };                                                                 //
///////////////////////////////////////////////////////////////////////
    // Add Todo || Original Add Todo

    // addTodo = (title) => {
    //   const newTodo = {
    //     // id: uuidv4(),
    //     title: title,
    //     completed: false,
    //   };
    //   this.setState({ todos: [...this.state.todos, newTodo] });
    // };
/////////////////////////////////////////////////////////////////////










  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}/>
                </React.Fragment>
              )}/>
              <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
