import React, { Component } from 'react';
import './style.scss';

// class RegularClass{}
// class ComponentCLass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentCLassInstance = new Component();

// console.log('regularCLassInstance', regularClassInstance);
// console.log('componentCLassInstance', componentCLassInstance);

class App {
    state = { string: false }; //In place of constructor

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

    render() {
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
        )
    }
}

export default App;
