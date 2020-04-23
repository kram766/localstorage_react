import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class Token extends Component {
    state = { 
        rememberMe:localStorage.getItem('rememberMe'),
        token:""
     }

//    redirecthandler=()=>{
//          {window.location.href="/danger"} 
//    }
   deleteStorage =()=>{
       localStorage.removeItem('rememberMe');
    
   }
isAuthenticated = () =>{
    const token = localStorage.getItem('rememberMe');
    return token;
}
    render() { 
        // const token = this.state.rememberMe;
        const alreadyAuthenticate = this.isAuthenticated();
        return (
            // token ? 
            <>
            {!alreadyAuthenticate ? <Redirect to={{ pathname:'/login'}} /> :

            <div className="token">
                <p>Token</p>
                <form>
                    <input type="text" />
                </form>
                <a href="/login" onClick={this.deleteStorage}>Logout</a>
            </div>
            
            }
            </>
            );
        }   
    
}
 
export default Token;