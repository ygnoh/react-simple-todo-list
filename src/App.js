import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>list #1</li>
          <li>list #2</li>
          <li>list #3</li>
        </ul>

        <form>
          <input type="text" />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default App;
