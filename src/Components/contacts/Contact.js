import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'
import {Consumer} from '../Context'


 class Contact extends Component {

  state = {
    showContactToggle : true
  }

  onDeleteClick = (id , dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    })
  }

    showContact(myMmessage){
      this.setState({
        showContactToggle : !this.state.showContactToggle
      });
      console.log('salam', myMmessage)
      
    }
  render() {
    const {id, name , phone, email} = this.props.data
    return (
    <Consumer>
      {value => {
        const {dispatch} = value;
        return (<div className="card">
        <div className="card-body">
          <h4 className="card-title">
            
            {name} <i onClick={ this.showContact.bind(this, name) } className = "fa fa-sort-down" style= {{cursor: 'pointer'}}></i>
            
            <i style = {{color: 'red', float: 'right', cursor: 'pointer'}} className="fa fa-times" aria-hidden="true" 
             onClick = {this.onDeleteClick.bind(this, id, dispatch)}
            ></i>
            </h4>
          <p className="card-text">
            {(this.state.showContactToggle)? (
               <ul className="list-group">
              
               <li className="list-group-item">{phone}</li>
               <li className="list-group-item">{email}</li>
  
               
             </ul>
            ): null}
           
          </p>
        </div>
      </div>)
         
      }
      }
    </Consumer>
     
    )
  }
 
}
Contact.defaultProps = {
  name: "My name",
  tel: "0000",
  email: "my@gmail.com"
}

Contact.propTypes = {
  data : PropTypes.object.isRequired,
}
export default Contact;