import React, { Component } from 'react';
import '../App.css';


export default class Test extends Component {
    state = {
    }
 render(){
     return(

        <div id='container'>
        <form>
            <div className="App-header">
                <div className="col-5">
                    <input className='input' type="text"
                    placeholder="Name of the note"/>
                </div>
                <div className="col-6">
                    <a href="back">Back</a>
                </div>
            </div>

            <div className="App-header2">
                <div className="col-3">
                <button id='submit'>Add</button>
                </div>
                <div className="col-4">
                <button id='submit'>Remove</button>
                </div>
                <div className="col-3">
                <button id='submit'>Edit</button>
                </div>
            </div>
        </form>
        </div>
     )
 }
}
