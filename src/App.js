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
        <TodoList items={this.state.items} onDelete={this.handleDeleteItem} />

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

  handleDeleteItem = event => {
    const index = parseInt(event.target.dataset.index);

    this.setState({
      items: this.state.items.filter((_, i) => i !== index)
    });
  }
}

export default App;
