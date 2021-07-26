import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext()

const reducer = (state, action)=> {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        contacts: state.contacts.filter((a) => a.id !== action.payload)
      };
      case 'Add_CONTACT':
      return {
        contacts: [action.payload, ...state.contacts]
      };
      case 'UPDATE_CONTACT':
        return {
          contacts: state.contacts.map(a => a.id === action.payload.id ? a = action.payload : a)
        };

      default: 
      return state;
  }
}

export class Provider extends Component {
  
    state = {
        contacts : [
            {id:1, name:"younes ouyachou", phone: "04567894", email:"ouyachouyouness@gmail.com"},
            {id:2, name:"sara ouyachou", phone: "05567894", email :"ouyachouyouness@gmail.com"},
            {id:3, name:"med ouyachou", phone: "06567894" , email:"ouyachouyouness@gmail.com"}


        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }
    async componentDidMount(){
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      this.setState({
        contacts: res.data
      })
    }
    render() {
    return (
      <Context.Provider value = {this.state}>
          {this.props.children}
        
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;