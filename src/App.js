
import Contacts from './Components/contacts/Contacts';
import  {Provider} from './Components/Context';
import Navbar from './Components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import AddContact from './Components/contacts/AddContact'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import About from './Components/Pages/About'
import PageNotFound from './Components/Pages/PageNotFound'

class App extends Component {
  render(){
  return (
    <Provider>
      <Router>
          
        <div className="App">
          
              <Navbar />
              <Switch>
                  <Route exact path ="/contact/add" component = {AddContact}/>
                  <Route exact path ="/About/:id" component = {About}/>
                  <Route exactpath ="/" component = {Contacts}/>
                  <Route component = {PageNotFound}/>

                  


              </Switch>
          
        </div>
      </Router>
    </Provider>
    
  );
}
}

export default App;
