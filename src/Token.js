import React, { Component } from 'react';

class Token extends Component {
    state = { 
        rememberMe:localStorage.getItem('rememberMe')
     }

    // componentDidMount=()=>{
    //     const token = this.state.rememberMe ? this.state.rememberMe : "";
    //     Axios.post('http://localhost:5000/token',token)
    //     .then(
    //         result=>{
    //             console.log(result);
    //         }
    //     )
    //     .catch();
    // }
   redirecthandler=()=>{
         {window.location.href="/danger"} 
   }
   deleteStorage =()=>{
       localStorage.removeItem('rememberMe');
       {window.location.href="/login"}
   }
    render() { 
        const token = this.state.rememberMe;
        return (
            token ? 
            <div className="token">
                <p>Token</p>
                <form>
                    <input type="text" />
                </form>
                <button onClick={this.deleteStorage}>Logout</button>
            </div>
            :this.redirecthandler()
         );
    }
}
 
export default Token;