import React from 'react';
import './Assignment9.css'
//import {Component} from 'react';
import { useState, useCallback } from 'react';


// class RegularClass{}
// class ComponentCLass extends Component{}

// const regularClassInstance = new RegularClass();
// const componentCLassInstance = new Component();

// console.log('regularCLassInstance', regularClassInstance);
// console.log('componentCLassInstance', componentCLassInstance);

function App() {
  const [userStrings, setUserStrings] = useState([""]);
  const [withReplacement, setWithReplacement] = useState(false);
  const [withoutReplacement, setWithoutReplacement] = useState(true);
  const [chosenString, setChosenString] = useState("");
  const [stringList, setStringList] = useState([""]);
    // state = { string: false }; //In place of constructor

    const handleUserStringsChange = useCallback(
      function (event) {
        setUserStrings(event.target.value.split("\n"));
      },
      [setUserStrings]
    );

    function checkString(str){
      return str != "";
    }

    function handleOnSubmit() {
      let userStringArray = [...userStrings].filter(checkString);

      if(userStringArray.length == 0){
        alert("No Strings entered!");
        return;
      }

      let randomString = userStringArray[Math.floor(Math.random()*userStringArray.length)];
      setChosenString(randomString);
      setStringList([...stringList, randomString]);

    }

    function handleOnReset() {
      setUserStrings([""]);
      setChosenString("");
      setStringList([""]);
    }

    function clearStrings() {
      setChosenString("")
      setStringList([""]);
    }

  return (
    <div className="main">
      <div className="title">
      <h1>Assignment 9</h1>
      <h3>Long Hoang and Faiz Zia</h3>
      </div>

      <div className="container">
        <div className="sub-container">

          <div className="textbox">
            <div className="boxone-title">Enter Strings to be chosen
              <p>Separate multiple strings by new lines.</p>
            </div>
            <textarea value={userStrings.join("\n")} onChange={handleUserStringsChange} />
          </div>

          <div className="textbox">
            <div className="box-title">String chosen: {chosenString} </div>
            <textarea value={stringList} />
            <div>
              <button onClick={clearStrings}> Clear Chosen Strings </button>
            </div>
          </div>

          <div className = "buttons-container">
            <label> <input type="radio" checked={withReplacement} onClick={() => { setWithReplacement(true); setWithoutReplacement(false); }} /> With Replacement </label>
            <label> <input type="radio" checked={withoutReplacement} onClick={() => { setWithReplacement(false); setWithoutReplacement(true); }} /> Without Replacement </label>
            <button onClick={handleOnSubmit}> Submit </button>
            <button onClick={handleOnReset}> Restart </button>
          </div>

        </div>
      </div>

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

