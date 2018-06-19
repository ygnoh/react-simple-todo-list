import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <React.Fragment>
        <TodoList />

        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChangeValue} />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.value);
  };

  handleChangeValue = event => {
    this.setState({value: event.target.value});
  };
}

export default App;
