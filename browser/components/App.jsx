import React, { Component } from 'react'
import ReactDom from 'react-dom'
import dataStore from '../stores/dataStore'
require('whatwg-fetch')
import $ from 'jquery'
import { Button, }

export class App extends Component {
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
  render(){
    return(
      <div>
      <button />
        <h1 className='title'> JustUs </h1>
        {this.state.data.name}
      </div>
    )
  }
}

$(document).ready(function () {
  ReactDom.render(<App />, document.getElementById('main'));
});

