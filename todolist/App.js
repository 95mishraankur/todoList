import React,{Component} from "react"
import "./todo.css";
import Card from "./compo1";
import Compo from "./compn2"



class Todo extends Component{

     constructor (props)
     {
         super(props);
         this.state={
             locall:[],
             items:[],
             current:{
             innerText:"",
             date:"",
             time:""
            }
           
         }
         this.update=this.update.bind(this)
         this.compltd=this.compltd.bind(this)
     }
       compltd(innerText,time){
        const itams=this.state.items
         itams.forEach(item=>
            {
        if(item.time===time)
        {
           this.setState({
               locall:innerText
           })
        }
    }
        )

       }
    
        update(innerText,time)
        {
            const items=this.state.items
             items.forEach(item =>{
                if(item.time===time)
                {
                       item.innerText=innerText;}
              })
             this.setState( 
                 {
                     items:items
                 }
             )
             //console.log(this.state.items,time)
        }
    
        setvalue(e){
                this.setState(
                    { current:{
                    innerText:e.target.value,
                    date:new Date().toLocaleDateString(),
                    time:new Date().toLocaleTimeString()
                    }})
                }
                Loder(){
                 const newItem=this.state.current;
                 const newItems=[...this.state.items,newItem]
                 this.setState(
                     {
                         items:newItems,
                         current:{
                            innerText:"",
                            date:"",
                            time:""
                           }
                     }
                 )
                 console.log(this.state.items)
                }
       
    render(){
        return (<>
        <div className="space">
        <div className="main">
        <h1 className="heading">ToDo</h1>
        <textarea name="massage" rows="0" cols="100" className="inputtext" onChange={(e)=>this.setvalue(e)} value={this.state.current.innerText}></textarea>
        <button className="add" onClick={()=>this.Loder()}>add.IT</button>
       </div>
       <Card items={this.state.items}
          update={this.update}
          compltd={this.compltd}
         />
        </div>
        <div className="local">
            <p>{this.state.local}</p>
        </div>
       
      <div className="footer">
            <h1>Completed</h1>
            <div className="completed">
            <Compo locall={this.state.locall} />
             
            </div>
        </div>
        
       </>
        )

    }
}

export default Todo;