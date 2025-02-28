import Header from "./components/header/header";
import UserInput from "./components/userInput/userInput"
import Result from "./components/resultFolder/resultFolder";
import { useState } from "react";

function App() {

  const [result,setResult]=useState(null)
  const  resetHandler=()=>{
    setResult(null);
  }
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log("in side the calculate handler")
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        'current-savings':userInput['current-savings']
      });
      
    }

    // do something with yearlyData ...
    setResult(yearlyData)
  };

  return (
    <div>
      <Header/>
      <UserInput calculate={calculateHandler} reset={resetHandler}/>
       {result!=null && <Result    data={result}/>}
      {/* <header/> */}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

     
    </div>
  );
}

export default App;
