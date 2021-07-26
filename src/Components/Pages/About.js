import React from 'react';

export default function About(props) {
  return (
    <div>
        <h2>About page</h2>
        <h5>{props.match.params.id}</h5>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quo quasi recusandae? Quos odio saepe assumenda, sunt nesciunt atque velit.
        </p>
    </div>
  );
}
