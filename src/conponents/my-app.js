import React , {Component} from 'react'
import '../conponents/Todoitem.css';
import classNames  from 'classnames'
import imgSucess from  '../img/success.svg' ; 
import imgSucessOff from  '../img/success-off.svg' ; 
class TodoItem extends Component{


    render(){
        
        
        const {item , onclick} = this.props ;
        var imgList = imgSucessOff ; 
        if(item.complete === 1){
            imgList = imgSucess ; 
        } 
        console.log("this is function onlick " , onclick); 
        return(
            <div  className={classNames('TodoItem', {
                'TodoItem-complete' : item.complete === 1 
            })}>

                <img onClick = {onclick} src={imgList} /> 
                <p>
                    {item.title}
                </p>
            </div>
            

        )
    }

}

export default TodoItem 
