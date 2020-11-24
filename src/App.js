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

    function handleWithReplacement(){
      setWithReplacement(true); 
      setWithoutReplacement(false);
    }

    function handleWithOutReplacement(){
      setWithReplacement(false); 
      setWithoutReplacement(true);
    }


    function checkString(str){
      return str != "";
    }

    function handleOnSubmit() {
      let userStringArray = [...userStrings].filter(checkString);

      if(userStringArray.length == 0){
        alert("No Strings entered!");
        return;
      }

      let randomStringIndex = Math.floor(Math.random()*userStringArray.length)
      let randomString = userStringArray[randomStringIndex];
      setChosenString(randomString);
      setStringList([...stringList, randomString]);

      if (withoutReplacement) {
        let replacedArray = userStringArray;
        replacedArray.splice(randomStringIndex, 1); 
        setUserStrings(replacedArray);
      }

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
    <div>
      <div className="title">
      <h1>SWE 432 Assignment 9</h1>
      <h2>Long Hoang and Faiz Zia</h2>
      </div>

      <div className="container">
        <div className="sub-container">

          <div className="textbox">
            <div className="boxone-title">Enter Strings(Separate with new line).
            </div>
            <textarea value={userStrings.join("\n")} onChange={handleUserStringsChange} />
          </div>

          <div className="textbox">
            <div className="box-title">String chosen: {chosenString} </div>
            <textarea readonly value={stringList} />
            <div>
              <button onClick={clearStrings}> Clear Chosen Strings </button>
            </div>
          </div>

          <div className = "buttons-container">
            <label class="block"> <input type="radio" checked={withReplacement} onClick={handleWithReplacement} /> With Replacement </label>
            <label class="block"> <input type="radio" checked={withoutReplacement} onClick={handleWithOutReplacement} /> Without Replacement </label>
            <button onClick={handleOnSubmit}> Submit </button>
            <button onClick={handleOnReset}> Restart </button>
          </div>

        </div>
      </div>

      <div>
        <h2 className="collab">Collaboration Summary</h2>
        <p>
          For this assignment Long and Faiz both took some time to do additonal research and practice with React because we both did
          not have much experience with it. After doing our own individual research and practice we decided to split up the work
          by having Faiz work on the UI and Long work adding functionality to the web app. After we finished our parts we both took some time to look
          through each others code to see if there was anything we needed to improve upon in order to make the user experience better.
          This assignment was a very difficult yet rewarding assignment because it took both of us a lot of time to understand
          how to use React as well as learning more javascript but after completing the assignment we were both very pleased with our end result.
        </p>
      </div>

    </div>
    );
}

export default App;

