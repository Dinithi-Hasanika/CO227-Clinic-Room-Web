import React, { Component } from 'react';
export default class Home extends Component {
  state = {
  }

  render () {
      return (
        <div>
             <div id='signinContainer'>
                <div>
                     <h1>This is home page</h1>
                </div>
                <form /*id='form'>
                      <br></br><br></br><br></br>
                      <input className='input' type="text"
                       placeholder="First Name"/>
                      <input className='input' type="text"
                       placeholder="Last Name"/>
                      <input className='input' type="text"
                       placeholder="Email"/>
                      <input className='input' type="password"
                       placeholder="Password"/>
                      <button id='submit'>Sign Up</button*/>
                  </form>
             </div>
        </div>
      )
   }
}