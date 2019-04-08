import React, { Component } from 'react';
import './App.scss';

import storage from '../../storage/storage';

storage.getDerpartments();

console.log(storage.departments);

class App extends Component {
  render() {
    return (
      <div className="App">
      {storage.departments && storage.departments.map((deparments) =>{
        return(
          <h1>{deparments.name}</h1>
        );
      })}
      </div>
    );
  }
}

export default App;
