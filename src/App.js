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

        <form>
          <input type='text' value={this.state.value} onChange={this.handleChangeValue} />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }

  handleChangeValue = event => {
    this.setState({value: event.target.value});
  };
}

export default App;
