import React from 'react';
import './Assignment9.css'
//import {Component} from 'react';
import { useState } from 'react';


// class RegularClass{}
// class ComponentCLass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentCLassInstance = new Component();

// console.log('regularCLassInstance', regularClassInstance);
// console.log('componentCLassInstance', componentCLassInstance);

function App() {
  const [userStrings, setUserStrings] = useState([""]);
    // state = { string: false }; //In place of constructor

    const handleUserStringsChange = useCallback(
      function (event) {
        setUserStrings(event.target.value.split("\n"));
      },
      [setUserStrings]
    );

  return (
    <div className="main">
      <div className="title">
      <h1>Assignment 9</h1>
      <h3>Long Hoang and Faiz Zia</h3>
      </div>

      <div>
        <div className="textbox">
        <div>Enter string and click "save" to store it in the dataset</div>
        <textarea placeholder="Enter Strings here" value={props.userStrings.join("\n")} onChange={handleUserStringsChange} />
        </div>
      </div>


      {/* <div>
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
      </div> */}

      <div>
        <h1 className="collab">Collaboration Summary</h1>
        <h3>
          For this assignment Long and Faiz both took some time to do additonal research and practice with React because both of us did
          not have much experience with it. After doing our own individual research and practice we both decided to split up the work
          by having faiz work on the UI and Long work on the backend. After we finished our parts we both took some time to look
          through each others code to see if their was anything we both needed to add in order to make the user experience better.
          This assignment was a very difficult yet rewarding assignment because it took both of us a lot of time to understand
          the react as well as learning more javascript but after completing the assignment we were both very pleased with our end result.
        </h3>
      </div>

    </div>
    );
}

export default App;

