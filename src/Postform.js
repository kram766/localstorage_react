import React, { Component } from 'react';
import axios from 'axios';
class Postform extends Component {
    state ={ 
        userid:"",
        Title:"",
        name:"",
        result:""
     }
    //  componentDidMount(){
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(response =>console.log(response.data))
    //     .catch(err =>console.log(err));
    //  }
     onChangeHandler = e =>{
         this.setState({[e.target.name]:e.target.value});
     }
     SubmitHandler =e =>{
          e.preventDefault();
         axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(response =>console.log(response.data))
          .catch(err =>console.log(err));
          
     }
     
    render() { 
        const {userid ,Title ,name}=this.state;
        return ( 
            <div>
                <form onSubmit={this.SubmitHandler}>
                <label>userid</label>
                <input type="text" value={userid} name="userid" onChange={this.onChangeHandler} />
                <label>Title</label>
                <input type="text" value={Title} name="Title" onChange={this.onChangeHandler} />
                <label>name</label>
                <input type="text" value={name} name="name" onChange={this.onChangeHandler} />
                <button type="submit">Submit</button>
                
                </form>
            </div>
         );
    }
}
 
export default Postform;