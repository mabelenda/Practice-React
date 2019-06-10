import React, {Component} from 'react';

class TaskForm extends Component{
constructor(){
    super();
    this.state ={
        title: '',
        responsible:'',
        description:'',
        priority:'low'
    };
    this.handleInput = this.handleInput.bind(this); //Esto sirve para enlazar el this.state con la funcion
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit(e){
   e.preventDefault();
   console.log(this.state);
   this.props.onAddTask(this.state);
}

handleInput(e){ 
   const {value,name} = e.target //Para usar Target la funcion se llama como Prop
    this.setState({
        [name]: value
    });

}
    render(){
        return(
            <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="title"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Titulo"
                />  
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="responsible"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Responsable"
                />  
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="description"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Descripción"
                />  
            </div>
            <div className="form-group">
                <select
                    name="priority"
                    onChange={this.handleInput}
                    className="form-control"
                > 
                <option>Low</option>
                <option>Medium</option> 
                <option>High</option>  
                </select>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >Guardar</button>
            </form>
            </div>

        )
    }


}

export default TaskForm;