import React from 'react';

export default function About(props) {
  return (
    <div>
        <h2>About page</h2>
        {props.match.params.id}
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quo quasi recusandae? Quos odio saepe assumenda, sunt nesciunt atque velit.
        </p>
    </div>
  );
}
