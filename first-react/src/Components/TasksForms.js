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
                    name="Titulo"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder= "Title"
                />  
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="Responsable"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder= "Responsible"
                />  
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="Descripcion"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder= "Description"
                />  
            </div>
            <div className="form-group">
                <select
                    name="Prioridad"
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