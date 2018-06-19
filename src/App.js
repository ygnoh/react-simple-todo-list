import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      items: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChangeValue} />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.value],
      value: ''
    });
  };

  handleChangeValue = event => {
    this.setState({value: event.target.value});
  };
}

export default App;
