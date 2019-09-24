import React , {Component} from 'react';

import TodoItem from './conponents/my-app' ; 

class App extends Component{

  constructor(){

    super(); 
    this.TodoItem = [
      { title:  'Hải dtrai' , complete : 1 } , 
      { title:  'Hải bảnh trai'} , 
      { title:  'Hải handsome' } 
     
    ]

  }

  render(){

    return(
      
        <div className="App">
        {
          this.TodoItem.length > 0  && this.TodoItem.map((item , index )=>{
              return <TodoItem key={index} title={item} />
            })
        }
        {
          this.TodoItem.length ==0 && 'Nothing here' 
        }
        </div>
       
      
  
    )

    
  }


}


export default App;
