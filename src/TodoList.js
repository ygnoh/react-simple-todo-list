import React from 'react';

class TodoList extends React.Component {
  render() {
    const items = this.props.items;

    return (
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>
              {item}
              <button>X</button>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TodoList;