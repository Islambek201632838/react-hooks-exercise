import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginForm from './comp/LoginForm'
import ColorPicker from './comp/ColorPicker'
import Toggle from './comp/Toggle';
import Clock from './comp/Clock';
import Notification from './comp/Notification';
import UserApp from './comp/UserApp';
import CalculateSum from './comp/CalculateSum';
import MagicBlock from './comp/MagicBlock';
import ThemeApp from './comp/ThemeApp';

function App() {

function HomePage () {

return (
    <>
    <ul style={{listStyle:'none', fontSize:'30px'}}>
      <li>UseState</li>
      <li>
        <Link to='/loginform'>LoginForm</Link>
      </li>
      <li>
        <Link to='/colorPicker'>ColorPicker</Link> 
      </li>
      <li style={{marginBottom:'20px'}}>
        <Link to='/toggle'>Toggle</Link> 
      </li>
      <li>UseEffect</li>
      <li>
        <Link to='/clock'>Clock</Link> 
      </li>
      <li style={{marginBottom:'20px'}}>
        <Link to='/Notification'>Notification</Link> 
      </li>
      <li>UseContext</li>
      <li>
        <Link to='/userapp'>UserApp</Link> 
      </li>
      <li style={{marginBottom:'20px'}}>
        <Link to='/themeapp'>ThemeApp</Link> 
      </li>
      <li>UseRef</li>
      <li style={{marginBottom:'20px'}}>
        <Link to='/magicblock'>MagicBlock</Link> 
      </li>
      <li>UseMemo</li>
      <li style={{marginBottom:'20px'}}>
        <Link to='/calculatesum'>CalculateSum</Link> 
      </li>

    </ul>
    
    </>)
  }
  return (
    <>
     <Router>
                <Routes>
                    <Route path='/loginform' element={<LoginForm />} />
                    <Route path='/colorPicker' element={<ColorPicker />} />
                    <Route path='/toggle' element={<Toggle />} />
                    <Route path='/clock' element={<Clock />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/userapp' element={<UserApp />} />
                    <Route path='/themeapp' element={<ThemeApp />} />
                    <Route path='/calculatesum' element={<CalculateSum />} />
                    <Route path='/magicblock' element={<MagicBlock />} />
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </Router>
    
    </>
  )
}


export default App
