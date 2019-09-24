import React , {Component} from 'react'
import '../conponents/Todoitem.css';
import classNames  from 'classnames'
class TodoItem extends Component{

    
    render(){
      
        const {item , onclick} = this.props ; 
        console.log("this is function onlick " , onclick); 
        return(
            <div onClick = {onclick} className={classNames('TodoItem', {
                'TodoItem-complete' : item.complete === 1 
            })}>
                <p>
                    {item.title}
                </p>
            </div>
            

        )
    }

}

export default TodoItem 
