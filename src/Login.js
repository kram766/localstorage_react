import React ,{Component} from 'react';
import Axios from 'axios';
class App extends Component {
  state = { 
      account:{
        email:"",
        password:""
      },
      token:""

   }
   changehandler = (e) =>{
       const {account} = this.state;
       account[e.currentTarget.name] = e.currentTarget.value 
       this.setState({account});

}
handlesubmit = (e) =>{
  e.preventDefault();

  Axios.post('http://localhost:5000/login',this.state.account)
  .then(result =>{
      const token = result.data.token;
      this.setState({token})
      console.log(result)
      localStorage.setItem('rememberMe', token);

      // const headers = new Headers();
      // headers.append('Content-Type', 'application/json', {'Authorization': 'Bearer ' + this.state.token} );

    // if(result.status===200) {window.location.href="/reserved"}

  })
  .catch();

}
postRoute = () =>{
  const token = localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') :"";
  Axios.post('http://localhost:5000/token',{ headers: {"authorization" : `bearer ${token}`} })
  .then(res=>{console.log(res)})
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
          <label>Email: </label>
          <input type="text" name="email" value={this.state.email} onChange={this.changehandler} />
          <label>password: </label>

          <input type="password" name="password" value={this.state.password} onChange={this.changehandler} />
          <input type="submit" value="Submit" />
        </form>
        <button type="submit" onClick={this.postRoute}>Post Route</button>
      </div>
      </>
     );
  }
}
 
export default App;
