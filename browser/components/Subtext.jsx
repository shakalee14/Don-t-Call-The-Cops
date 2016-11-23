import React, { Component } from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

export class Subtext extends Component {
  render () {
    return(
      <div>
         <div class="section-1">
           <h3 class="helping-hand-info">Safe solutions for when you need help.</h3><a href="/list" class="btn enter-site-button">Find Resources Now</a>
         </div>
         <div class="section-3">
           <h1 class="what-is-helpinghand">What is JustUs?</h1>
           <h3 class="helping-hand-info">A forum for alternatives to calling police in crisis situations.</h3>
         </div>
         <div class="section-4">
           <h2 class="helping-hand-info">1 in 4 fatal police encounters involve someone with severe mental illness</h2>
           <h6>- Dec. 2015, Treatment Advocacy Center</h6>
         </div>
         <div class="section-3">
           <h3 class="helping-hand">Use JustUs as a tool when someone is in crisis...</h3>
           <h3 class="helping-hand">divorce medical care from policing in your community now...</h3><a href="/list" class="btn enter-site-button">Get Started</a>
         </div>
         <div class="section-4">
           <h4 class="just-us-quote">"The transfer of responsibility for persons with mental illness from mental health professionals to law enforcement officers is both illogical and harms both the patients and the officers."</h4>
           <h6>- Treatment Advocacy Center</h6>
         </div>
       </div>
    )
  }
}
$(document).ready(function () {
  ReactDom.render(<Subtext />, document.getElementById('subtext'));
});