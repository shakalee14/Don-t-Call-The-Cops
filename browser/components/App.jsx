import React, { Component } from 'react'
import ReactDom from 'react-dom'
import dataStore from '../stores/dataStore'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { data: []}
  }
  componentWillMount(){
    fetch('http://localhost:3000/api')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({data: data})
      })
  }
  render() {
    return( <div>
          <h1> JustUs </h1>
          {this.state.data.name}
        </div>)
  }
}

$(document).ready(function () {
  ReactDom.render(<App />, document.getElementById('main'));
});

