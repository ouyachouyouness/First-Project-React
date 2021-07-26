import React from 'react';
import classnames from 'classnames'

export default function TextInputGroup(props) {
  return (
    <div className="form-group">
        <label for={props.name}>{props.label}</label>
        <input type={props.type} className={classnames('form-control', {'is-invalid' : props.error})} 
        defaultValue = {props.value} 
        onChange = {props.onChange} 
        name = {props.name} />
        <div class="invalid-feedback">{props.error}</div>
    </div>
  );
}
