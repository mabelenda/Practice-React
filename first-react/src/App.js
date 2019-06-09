import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';

import {todos} from './Tasks.json';

class App extends Component {
  constructor(){
    super(); //Para que herede toda la funcionalidad de React
    this.state = {
      // title: 'Aplicacion de Tareas',
      // countTasks: 10
      todos
    }
  }
  render() {
    const totalTodos = this.state.todos.map((todo,i) => {
      return(
        <div className="col-md-4">
           <div className="card mt-4">
              <div className="card-header">
                <h4>{todo.title}</h4>
                <span className="badge badge-pill badge-danger mt-2">
                {todo.priority}
                </span>
            </div>
              <div className="card-body">
                  <p>{todo.description}</p>
                  <p><mark>{todo.responsible}</mark></p>
              </div>
          </div> 
        </div>   
        )
    })

    return (
      <div className="App">
        <Navigation title="Titulo" totalTasks={totalTodos.length}/>

        <div className="container">
          <div className="row mt-4">
            {totalTodos}
          </div>
        </div>

        {/* <Navigation title={this.state.title + ' - ' + this.state.countTasks}  */}
         
          <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
