import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';

import TaskForm from './Components/TasksForms';

import {todos} from './Tasks.json';

class App extends Component {
  constructor(){
    super(); //Para que herede toda la funcionalidad de React
    this.state = {
      todos
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task){
    this.setState({
      todos: [...this.state.todos,task]
    })
  }

  removeTask(index){
      if(window.confirm('Estas seguro de querer eliminar esta tarea?')){
        this.setState({
          todos: this.state.todos.filter((elem,i) => {
            return i!== index
          })
        })
    }
  }

  render() {
    const totalTodos = this.state.todos.map((todo,i) => {
      return(
        <div className="col-md-4" key={i}>
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
              <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={this.removeTask.bind(this, i)}
                  >Borrar</button>
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
        <div className="col md-3">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskForm onAddTask={this.handleAddTask}/>
        </div>
          <div className="col-md-9">
          <div className="row">
            {totalTodos}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
