import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './components/GenerateEmployee';
import  DisplayEmployee  from  './components/DisplayEmployee';

class App extends Component {
  render() {
    const  sampleEmployee = {
      gender:  'male',
      name: {
          title:  'mr',
          first:  'mathys',
          last:  'aubert'
      },
      location: {
          street:  '9467 rue gasparin',
          city:  'perpignan',
          postcode:  '90208'
      },
      email:  'mathys.aubert@example.com',
      picture: {
          medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
      }
  };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GenerateEmployee  />
        <DisplayEmployee  employee={sampleEmployee}  />
      </div>
    );
  }
}

export default App;
