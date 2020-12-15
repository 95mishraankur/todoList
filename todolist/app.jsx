import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ReactDOM from 'react-dom';
import Java  from '../component1'

 
class App extends Component{
   constructor(prop){
      super(prop)
      this.state={users:[],allusder:[],inputText:""}
   }

   componentDidMoun(){
   fetch('https://fakestoreapi.com/products')
   .then(response=>response.json())
   .then (users=>
      { console.log(users);
         this.setState(
         {
            users:users.data,
            
         }
      )
      })
}
 render(){

    return (
      
       this.state.users.map((user)=>
        {  return(<Java userDetails={user}/> )
          })
      
       ) 
 
    }

}
export default App;
    