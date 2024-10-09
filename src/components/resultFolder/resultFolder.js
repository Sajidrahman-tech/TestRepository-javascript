const result=(props)=>{
    return( <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {console.log(props.data)}
          {props.data.map((yearlyData=>(
            <tr key={yearlyData.year}>
              {console.log(yearlyData)}
            <td>{yearlyData.year}</td>
            <td>{yearlyData.savingsEndOfYear}</td>
            <td>{yearlyData.yearlyInterest}</td>
            <td>{yearlyData.savingsEndOfYear-yearlyData['current-savings']-yearlyData.yearlyContribution*yearlyData.year}</td>
            <td>{yearlyData['current-savings']+yearlyData.yearlyContribution*yearlyData.year}</td>
          </tr>
          )))}
          
        </tbody>
      </table>)
}
export default result;