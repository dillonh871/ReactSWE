import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';

const publicURL = 'https://swe432tomcat.herokuapp.com';
export const getLocationUrlData = () => {
  return {
      url:
          process.env.NODE_ENV === 'production'?
          publicURL
          :`${window.location.origin}`,
      hash: `${window.location.hash}`
  };
};
export const servicePath ='/echo';

function App(props) {
mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are saving " + this.state.string);
    }
    myChangeHandler = (event) => {
        this.setState({ string: event.target.value });
        //SAVE STRINGS
    }
    myChooseHandler = (event) => {
        event.preventDefault();
        //CHOOSE RANDOM
    }
    myClearHandler = (event) => {
        event.preventDefault();
        alert("You have cleared the dataset");
        //CLEAR THE STORED
    }
        return (
            <div>
                <h1>Assignment 9</h1>
                <div>
                    <form onSubmit={this.mySubmitHandler}>
                        <p>Enter string and click "save" to store it in the dataset</p>
                        <input
                            id="standard-string"
                            label="String"
                            type="text"
                            onChange={this.myChangeHandler}
                        />
                        <input
                            type='submit'
                        />
                    </form>
                </div>
                <div>
                    <form onSubmit={this.myChooseHandler}>
                        <p>Click here to choose a random string from the dataset</p>
                        <input
                            type='submit'
                        />
                    </form>
                </div>
                <div>
                    <form onSubmit={this.myClearHandler}>
                        <p>Click here to clear the dataset</p>
                        <input
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        );
}

export default App;
