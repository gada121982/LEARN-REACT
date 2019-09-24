import React , {Component} from 'react'
import '../conponents/Todoitem.css';
class TodoItem extends Component{

    render(){
        var className = 'TodoItem' ; 
        if(this.props.title.complete){
            className+= ' TodoItem-complete'; 
        }
        return(
            <div className={className}>
                <p>
                    {this.props.title.title}
                </p>
            </div>
            

        )
    }

}

export default TodoItem 
