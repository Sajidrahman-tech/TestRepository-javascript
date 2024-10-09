import { useState } from "react";
const UserInput=(props)=>{
    const intialInput={
      'current-savings':1000,
      'yearly-contribution':3,
      'expected-return':7,
      'duration':2
    }
    const[userInput,setUserInput]=useState(intialInput)

    const inputChangeHandler=(input,number)=>{
      console.log("hi")
      setUserInput((prevInput)=>{
        return {
          ...prevInput,
          [input]:number
        }
      });
    }
    const submitHandler=(event)=>{
      event.preventDefault();
      props.calculate(userInput)
        console.log("submit")
    }

    const resetHandler=(event)=>{
      event.preventDefault();
      setUserInput(intialInput)
        props.reset();
    }

    
    return (
    <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input  onChange={
              (event)=>{inputChangeHandler("current-savings",event.target.value)}  
              } value={userInput['current-savings']} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" onChange={
              (event)=>{inputChangeHandler("yearly-contribution",event.target.value)}  
              } value={userInput['yearly-contribution']  } id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={
              (event)=>{inputChangeHandler("expected-return",event.target.value)}  
              } value={userInput['expected-return']} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={
              (event)=>{inputChangeHandler("duration",event.target.value)}  
              } value={userInput['duration']} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>)
}
export default UserInput;