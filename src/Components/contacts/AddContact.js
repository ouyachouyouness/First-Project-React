import React, { Component } from 'react'
import {Consumer} from '../Context'

import TextInputGroup  from '../helpers/TextInputGroup'

import axios from 'axios'

 class AddContact extends Component {

     state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value })

    submit = async (dispatch,e) => {
        e.preventDefault();

        const {name, email, phone} = this.state

        if(name == ""){
            this.setState({errors : {name: "the name is required"}})
            return;
        }
        if(email == ""){
            this.setState({errors : {email: "the email is required"}})
            return;
        }
        if(phone == ""){
            this.setState({errors : {phone: "the phone is required"}})
            return;
        }
        const newContact = {
            name : this.state.name,
            email : this.state.email,
            phone : this.state.phone
        }
        try{

        const res = await axios.post("https://jsonplaceholder.typicode.com/users", newContact)
          dispatch({
            type: "Add_CONTACT",
            payload: res.data
        });
    }
    catch(e){
        console.log(e)
    }
          
        

        

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
          
    })

    this.props.history.push('/');
    }
  render() {
      const {name, email, phone, errors} = this.state
      return(
          <Consumer>
              {value => {
                  const {dispatch} = value;
                  return (
                    <div>
                        <form onSubmit= {this.submit.bind(this, dispatch)}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Add Contact</h4>
                                <div className="card-text">
                                <div className="card">
                          <div className="card-body">
                              <h4 className="card-title"></h4>
                              <div className="card-text">
                              <TextInputGroup label="Name"
                                             name = "name"
                                             value = {name}
                                             type = "text"
                                             onChange={this.onChangeInput}
                                             error = {errors.name}
                              />
                                  <TextInputGroup label="email"
                                             name = "email"
                                             value = {email}
                                             type = "email"
                                             onChange={this.onChangeInput}
                                             error = {errors.email}

                              />
                                  <TextInputGroup label="phone"
                                             name = "phone"
                                             value = {phone}
                                             type = "text"
                                             onChange={this.onChangeInput}
                                             error = {errors.phone}

                              />
              
                                  <button className="btn btn-success btn-block">Add new Contact</button>
                              </div>
              
                          </div>
                      </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                  )
              }}
          </Consumer>
      )
    
  }
}

export default AddContact