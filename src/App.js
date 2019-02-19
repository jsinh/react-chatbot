import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
		super(props);
    this.state ={
      agsEntityid: '',
      agsSomemoreproperty:''
    }
}
  componentDidMount() {
  // const data = window._DEFAULT_DATA;
  this.setState({
    agsEntityid: window.document.getElementsByTagName('div')[0].getAttribute('ags-entityid'),
    agsSomemoreproperty: window.document.getElementsByTagName('div')[0].getAttribute('ags-somemoreproperty')
  })    
}
  render()
  {
    const {agsEntityid,agsSomemoreproperty}  = this.state
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
          this data is coming from index.html<br/>
          agsEntityid  = {agsEntityid}<br/>
          agsSomemoreproperty = {agsSomemoreproperty}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
