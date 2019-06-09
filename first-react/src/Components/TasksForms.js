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
}
    render(){
        return(
            <div className="card">
            <form className="card-body">
            <div className="form-group"></div>
            </form>
            </div>


        )
    }


}