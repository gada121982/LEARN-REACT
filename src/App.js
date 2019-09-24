import React , {Component} from 'react';

import TodoItem from './conponents/my-app' ; 


class App extends Component{

  constructor(){

    super(); 
    this.state = {
      TodoItem : [
        { title:  'Hải dtrai' , complete : 0 } , 
        { title:  'Hải bảnh trai' , complete : 0} , 
        { title:  'Hải handsome'  , complete : 0}  
          ]
    }
  }
    functiononclick(item){

    
      // console.log(item); 
      return (event)=>{
        var cloneArray = this.state.TodoItem ; 
        cloneArray.forEach((Ele)=>{

          if(Ele === item){
  
            if(Ele.complete === 0){
              Ele.complete = 1 ; 
              return ; 
            }
            else{
              Ele.complete = 0 ; 
              return ;
            }
          }
          
        })
      
        this.setState({
          TodoItem : cloneArray 
        })
      }

    }

  

 
  render(){

    return(
      
        <div className="App">
        {
          this.state.TodoItem.length > 0  && this.state.TodoItem.map((item , index )=>{
          return <TodoItem  key={index} item={item}  onclick={this.functiononclick(item)}/>
                                                              //? đầu tiên nó gán hàm return về cho onlick . 
                                                              //? khi ng dùng click vô element thì hàm trả về đc thực thi
            })
        }
        {
          this.state.TodoItem.length === 0 && 'Nothing here' 
        }
        </div>
       
      
  
    )

    
  }


}


export default App;
