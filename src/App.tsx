import * as React from 'react';
import Login from './components/Login'

import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Login />        
      </div>
    );
  }
}

export default App;
