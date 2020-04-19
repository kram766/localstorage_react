import React ,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Token from './Token';
import Danger from './Danger';
import Reserved from './Reserved';
class App extends Component {

  render() { 
    return ( 
      <>
       <BrowserRouter>
       <Route exact path="/" component={Register} />
       <Route path="/login" component={Login} />
       <Route path="/token" component={Token} />
       <Route path="/danger" component={Danger} />
       <Route path="/reserved" component={Reserved} />
         

       </BrowserRouter>
      </>
     );
  }
}
 
export default App;
