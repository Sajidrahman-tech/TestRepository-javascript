import logo from '../../assets/investment-calculator-logo.png';
// import logo from './header./components/assets/investment-calculator-logo.png';

const header=()=>{
    return (
    <header className="header">
    <img src={logo} alt="logo" />
    <h1>Investment Calculator</h1>
    </header>
    )
}
export default header;