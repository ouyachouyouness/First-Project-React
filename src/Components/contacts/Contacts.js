import React, { Component } from 'react'
import Contact from './Contact'

import {Consumer} from '../Context'
 class Contacts extends Component {

    
    deleteContact(id){
      const { contacts } = this.state;
      const newListContacts = contacts.filter((a) => a.id !== id)
      this.setState({
        contacts : newListContacts}
      )
    }
    render(){
      
      return(
        <Consumer>
          {value => (<div>
        {value.contacts.map((a) => (
            <Contact data = {a} key = {a.id} deleteContactFromChild = {this.deleteContact.bind(this, a.id)}
            />
        ))}
      </div>)}
        </Consumer>
      )
    }
  
    
  }


export default Contacts