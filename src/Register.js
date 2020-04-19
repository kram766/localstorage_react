import React ,{Component} from 'react';
import Axios from 'axios';
class App extends Component {
  state = { 
     name:"",
     email:"",
     password:""
       }
   changehandler = (e) =>{
    this.setState({[e.target.name]:e.target.value});

}
handlesubmit = (e) =>{
  e.preventDefault();

  Axios.post('http://localhost:5000',this.state)
  .then(result =>{
    console.log(result);
    if(result.status===200) {window.location.href="/login"}

  })
  .catch();

}
  render() { 
    return ( 
      <>
      <div className="App_2">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/token">Token</a></li>
        </ul>
        <form onSubmit={this.handlesubmit}>
          <label>Name: </label>
          <input type="text" name="name" onChange={this.changehandler} />
          <label>Email: </label>

          <input type="email" name="email" onChange={this.changehandler} />
          <label>Password: </label>

          <input type="password" name="password" onChange={this.changehandler} />
          <input type="submit" value="Submit" />
        </form>
      </div>
      </>
     );
  }
}
 
export default App;
