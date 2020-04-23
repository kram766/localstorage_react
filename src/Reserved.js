import React, { Component } from 'react';

class Reserved extends Component {
    state = {  }
  //   deleteStorage =()=>{
  //     localStorage.removeItem('rememberMe');
  //     {window.location.href="/login"}
  // }
    render() { 
        return ( 
        <>
        <ul>
        <li><a href="/login">Login</a></li>
          <li><a href="/token">Token</a></li>
          </ul>
        <p>Reserved</p>
        <button onClick={this.deleteStorage}>Logout</button>

        </>
         );
    }
}
 
export default Reserved;