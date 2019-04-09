import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './components/GenerateEmployee';
import  DisplayEmployee  from  './components/DisplayEmployee';

class App extends Component {
  
  constructor(props) {
    const simpsonsAPI = {
      quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
      character: "Nelson Muntz",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    }
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpsons: simpsonsAPI
    };
  }

  getEmployee() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpsons:  data[0],
        });
    });
  }

  render() {
    

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
        <DisplayEmployee  simpsons={this.state.simpsons}  />
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
      </div>
    );
  }
}

export default App;
